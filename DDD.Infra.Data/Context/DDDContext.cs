using DDD.Domain.Entities;
//using DDD.Infra.Data.EntityConfig;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DDD.Infra.Data.EntityConfig;

namespace DDD.Infra.Data.Context
{
    public class DDDContext : DbContext
    {
        public DDDContext(DbContextOptions<DDDContext> options) :
            base(options)
        {
        }

        public DbSet<City> Cities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new CityConfig());
        }

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    modelBuilder.Properties()
        //        .Where(p => p.Name == $"{p.ReflectedType.Name}Id")
        //        .Configure(p => p.IsKey());

        //    //modelBuilder.HasDefaultSchema("public");

        //    modelBuilder.Configurations.Add(new CityConfig());
        //    base.OnModelCreating(modelBuilder);
        //}

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("CreationDate") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("CreationDate").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("CreationDate").IsModified = false;
                }
            }
            return base.SaveChanges();
        }
    }
}
