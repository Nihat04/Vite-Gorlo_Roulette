using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace GorloRouletteApi.Models
{
    [Keyless]
    public class UserCinema
    {
        public string? UserId { get; set; }
        public int CinemaId { get; set; }

        [ForeignKey(nameof(UserId))]
        [JsonIgnore]
        public User User { get; set; }

        [ForeignKey(nameof(CinemaId))]
        [JsonIgnore]
        public Cinema Cinema { get; set; }
    }
}
