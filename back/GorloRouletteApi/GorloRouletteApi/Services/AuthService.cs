using GorloRouletteApi.DTO.User;
using GorloRouletteApi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GorloRouletteApi.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _config;

        public AuthService(UserManager<User> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public string GenerateToken(LoginDTO loginData)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, loginData.UserName),
                new Claim(ClaimTypes.Role, "StandartUser")
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));

            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);

            var securityToken = new JwtSecurityToken(
                claims:claims,
                expires: DateTime.Now.AddMonths(1),
                issuer: _config.GetSection("Jwt:Issuer").Value,
                audience: _config.GetSection("Jwt:Audience").Value,
                signingCredentials: signingCredentials);

            var token = new JwtSecurityTokenHandler().WriteToken(securityToken);

            return token;
        }

        public async Task<bool> Login(LoginDTO loginData)
        {
            var identityUser = await _userManager.FindByNameAsync(loginData.UserName);
            if(identityUser == null)
            {
                return false;
            }

            return await _userManager.CheckPasswordAsync(identityUser, loginData.Password);
        }

        public async Task<bool> RegisterUser(RegisterDTO registerData)
        {
            var identityUser = new User { UserName = registerData.UserName, DisplayName = registerData.DisplayName };

            var response = await _userManager.CreateAsync(identityUser, registerData.Password);
            return response.Succeeded;
        }
    }
}
