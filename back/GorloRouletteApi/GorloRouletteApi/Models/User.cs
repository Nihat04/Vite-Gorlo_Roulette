using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GorloRouletteApi.Models
{
    public class User : IdentityUser
    {
        public string? DisplayName { get; set; }

        public List<UserCinema> Cinemas { get; set; } = new List<UserCinema>();
    }
}
