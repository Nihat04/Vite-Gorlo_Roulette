namespace GorloRouletteApi.DTO.User
{
    public class UserForCinemaDTO
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }

        public UserForCinemaDTO(Models.User user)
        {
            Id = user.Id;
            UserName = user.UserName;
            DisplayName = user.DisplayName;
        }
    }
}
