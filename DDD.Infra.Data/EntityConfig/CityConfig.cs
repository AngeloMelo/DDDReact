using DDD.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDD.Infra.Data.EntityConfig
{
    public class CityConfig : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.ToTable("Cities");
            builder.HasKey(c => c.CityId);

            builder.Property(c => c.CityName)
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(c => c.CityCode)
             .HasMaxLength(150)
             .IsRequired();
        }
    }
}
