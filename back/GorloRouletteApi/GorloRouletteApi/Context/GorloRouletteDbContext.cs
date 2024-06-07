using GorloRouletteApi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GorloRouletteApi.Context
{
    public class GorloRouletteDbContext : IdentityDbContext<User>
    {
        public GorloRouletteDbContext(DbContextOptions<GorloRouletteDbContext> options) : base(options) 
        {
            Database.EnsureCreated();
        }

        public DbSet<Cinema> Cinemas { get; set; } = null!;
        public DbSet<Movie> Movies { get; set; } = null!;
        public DbSet<UserCinema> UserCinemas { get; set;} = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserCinema>()
                .HasKey(uc => new {uc.UserId, uc.CinemaId});

            modelBuilder.Entity<UserCinema>()
                .HasOne(user => user.User)
                .WithMany(uc => uc.Cinemas)
                .HasForeignKey(uc => uc.UserId);

            modelBuilder.Entity<UserCinema>()
            .HasOne(cinema => cinema.Cinema)
            .WithMany(uc => uc.Users)
            .HasForeignKey(user => user.CinemaId);

        }
    }
}
