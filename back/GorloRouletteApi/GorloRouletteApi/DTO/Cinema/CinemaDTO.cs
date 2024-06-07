using GorloRouletteApi.DTO.User;
using GorloRouletteApi.Models;

namespace GorloRouletteApi.DTO.Cinema
{
    public class CinemaDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Models.Movie> Movies { get; set; }
        public List<UserForCinemaDTO> Users { get; set; }

        public CinemaDTO(Models.Cinema cinema)
        {
            Id = cinema.Id;
            Name = cinema.Name;
            Movies = cinema.Movies;
            Users = cinema.Users.ConvertAll(new Converter<Models.UserCinema, UserForCinemaDTO>(userCinema => new UserForCinemaDTO(userCinema.User)));
        }
    }
}