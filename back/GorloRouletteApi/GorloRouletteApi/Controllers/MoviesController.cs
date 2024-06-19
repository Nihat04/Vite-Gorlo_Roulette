using GorloRouletteApi.Context;
using GorloRouletteApi.DTO.Movie;
using GorloRouletteApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GorloRouletteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MoviesController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly GorloRouletteDbContext _context;

        public MoviesController(UserManager<User> userManager, GorloRouletteDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostMovie(MovieDTO movie)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userName == null)
            {
                return Unauthorized();
            }

            var user = await _userManager.FindByNameAsync(userName);
            var cinema = _context.Cinemas.Include(c => c.Users).FirstOrDefault(c => c.Id == movie.CinemaId);

            if (!cinema.Users.Any(u => u.UserId == user.Id))
            {
                return NotFound("User dont have acces to cinema");
            }

            if (cinema == null) return NotFound("error finding cinema");
            var newMovie = new Movie
            {
                Name = movie.Name,
                UserId = user.Id,
                User = user,
                CinemaId = cinema.Id,
                cinema = cinema
            };

            var finalMovie = await _context.Movies.AddAsync(newMovie);
            _context.SaveChanges();

            return Ok(finalMovie.Entity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, PutMovieDTO movie)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = _context.Users.Include(user => user.Cinemas).FirstOrDefault(user => user.UserName == userName);

            if (user == null) return NotFound();
            if (!user.Cinemas.Any(userCinemas => userCinemas.CinemaId == movie.CinemaId)) return Unauthorized("Acces Denied");

            var dbMovie = await _context.Movies.FindAsync(movie.Id);
            dbMovie.Status = movie.Status;
            dbMovie.Percentage = movie.Percentage;
            _context.SaveChanges();

            return Ok(movie);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> PutMovie(int id)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = _context.Users.Include(user => user.Cinemas).FirstOrDefault(user => user.UserName == userName);
            if (user == null) return NotFound();

            var movie = await _context.Movies.FindAsync(id);
            if (movie == null) return NotFound();

            if (!user.Cinemas.Any(userCinemas => userCinemas.CinemaId == movie.CinemaId)) return Unauthorized("Acces Denied");


            _context.Movies.Remove(movie);
            _context.SaveChanges();

            return Ok("movie deleted");
        }
    }
}
