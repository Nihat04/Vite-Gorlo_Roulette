namespace GorloRouletteApi.DTO.User
{
    public class UserDTO
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public List<Models.UserCinema> Cinemas { get; set; }

        public UserDTO(Models.User user) 
        { 
            Id = user.Id;
            UserName = user.UserName;
            DisplayName = user.DisplayName;
            Cinemas = user.Cinemas;
        }
    }
}
