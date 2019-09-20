using System.Collections.Generic;
using DDD.Application.Contracts;
using DDD.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DDD.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityAppService cityAppService;

        public CityController(ICityAppService cityAppService)
        {
            this.cityAppService = cityAppService;
        }

        // GET: api/City
        [HttpGet]
        public IEnumerable<City> Get()
        {
            return this.cityAppService.GetAll();
        }

        // GET: api/City/5
        [HttpGet("{id}", Name = "Get")]
        public City Get(int id)
        {
            return this.cityAppService.GetById(id);
        }

        // POST: api/City
        [HttpPost]
        public City Post([FromBody] City city)
        {
            this.cityAppService.Add(city);

            return city;
        }

        // PUT: api/City/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] City city)
        {
            this.cityAppService.Update(city);
        }

        // DELETE: api/City/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var city = this.cityAppService.GetById(id);
            this.cityAppService.Remove(city);
        }
    }
}
