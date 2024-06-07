using GorloRouletteApi.DTO.User;

namespace GorloRouletteApi.Services
{
    public interface IAuthService
    {
        string GenerateToken(LoginDTO loginData);
        Task<bool> Login(LoginDTO loginData);
        Task<bool> RegisterUser(RegisterDTO registerData);
    }
}