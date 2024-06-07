using GorloRouletteApi.Context;
using GorloRouletteApi.DTO.Cinema;
using GorloRouletteApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace GorloRouletteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CinemaController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly GorloRouletteDbContext _context;

        public CinemaController(UserManager<User> userManager, GorloRouletteDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetCinema()
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userName == null)
            {
                return Unauthorized();
            }

            var user = await _userManager.FindByNameAsync(userName);
            if (user == null)
            {
                return NotFound();
            }
            var userCinemas = _context.Users.Include(u => u.Cinemas).ThenInclude(uc => uc.Cinema).FirstOrDefault(u => u.Id == user.Id).Cinemas;
            var cinemas = userCinemas.ConvertAll(new Converter<UserCinema, ShortCinemaDTO>(cinema => new ShortCinemaDTO { Id = cinema.Cinema.Id, Name = cinema.Cinema.Name}));

            return Ok(new
            {
                cinemas
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCinema(int id)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _userManager.FindByNameAsync(userName);
            var cinema = _context.Cinemas.Include(cinema => cinema.Users).Include(cinema => cinema.Movies).FirstOrDefault(cinema => cinema.Id == id);

            if(cinema == null) return NotFound("this cinema doesn't exist");

            if (!cinema.Users.Any(userCinemas => userCinemas.UserId == user.Id))
                return Unauthorized();

            var cinemaDto = new CinemaDTO(cinema);

            return Ok(cinemaDto);
        }

        [HttpPost]
        public async Task<IActionResult> PostCinema(CreateCinemaDTO cinema)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var user = await _userManager.FindByNameAsync(userName);

            if (cinema == null || cinema.Name.Length < 5)
            {
                return BadRequest("Name lenght must be greater than 5");
            }

            var newCinema = await _context.Cinemas.AddAsync(new Cinema { Name = cinema.Name });
            await _context.UserCinemas.AddAsync(new UserCinema { Cinema = newCinema.Entity, CinemaId = newCinema.Entity.Id, User = user, UserId = user.Id });
            _context.SaveChangesAsync();

            var cinemaDto = new CinemaDTO(newCinema.Entity);

            return Ok(cinemaDto);
        }
    }
}
