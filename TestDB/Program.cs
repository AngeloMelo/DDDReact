using DDD.Domain.Entities;
using DDD.Infra.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDB
{
    class Program
    {
        static void Main(string[] args)
        {
            var city = new City() {
                CityCode = "123",
                CityName = "teste"
            };

            var repo = new CityRepository();
            repo.Add(city);

            var all = repo.GetAll();
            Console.WriteLine($"cities: {all.Count()}");
        }
    }
}
