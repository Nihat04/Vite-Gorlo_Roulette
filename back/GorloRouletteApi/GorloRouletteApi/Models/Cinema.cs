using Newtonsoft.Json;

namespace GorloRouletteApi.Models
{
    public class Cinema
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public List<UserCinema> Users { get; set; } = new List<UserCinema>();
        public List<Movie> Movies { get; set; } = new List<Movie>();
    }
}