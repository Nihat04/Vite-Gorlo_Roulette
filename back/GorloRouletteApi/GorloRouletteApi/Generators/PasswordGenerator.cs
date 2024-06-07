using GorloRouletteApi.Models;

namespace GorloRouletteApi.Generators
{
    public class PasswordGenerator
    {
        public static readonly int PASSWORD_LENGTH = 15;
        private static readonly string PASSWORD_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:'\",./?`~";
        private static readonly Random RANDOM = new Random();

        public static string GeneratePassword()
        {
            throw new NotImplementedException();
        }

        public static string GenerateAuthorizationToken(string username) 
        {
            var token = username + ":";
            for(int i = 0; i < PASSWORD_LENGTH; i++)
            {
                var randomIndex = RANDOM.Next(PASSWORD_CHARS.Length);
                token += PASSWORD_CHARS[randomIndex];
            }
            return token;
        }
    }
}
