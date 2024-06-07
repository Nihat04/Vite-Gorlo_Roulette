using GorloRouletteApi.DTO.User;
using GorloRouletteApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace GorloRouletteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO loginData)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _authService.Login(loginData);

            if (result)
            {
                var token = _authService.GenerateToken(loginData);
                return Ok(token);
            }

            return BadRequest();
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser(RegisterDTO registerData)
        {
            var result =  await _authService.RegisterUser(registerData);

            if(result)
            {
                return Ok("User created");
            }

            return BadRequest();
        }
    }
}
