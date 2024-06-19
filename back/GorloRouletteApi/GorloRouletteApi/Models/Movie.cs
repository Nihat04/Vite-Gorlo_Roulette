using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace GorloRouletteApi.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool Status { get; set; }
        public int Percentage { get; set;}

        public string? UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        [JsonIgnore]
        public User User { get; set; }

        public int CinemaId { get; set; }

        [ForeignKey(nameof(CinemaId))]
        [JsonIgnore]
        public Cinema cinema { get; set; }
    }
}