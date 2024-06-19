using System.ComponentModel.DataAnnotations.Schema;

namespace GorloRouletteApi.DTO.Movie
{
    public class PutMovieDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool Status { get; set; }
        public int Percentage { get; set; }

        public string? UserId { get; set; }
        public int CinemaId { get; set; }
    }
}
