using DDD.Domain.Contracts.Repositories;
using DDD.Domain.Contracts.Services;
using DDD.Domain.Entities;

namespace DDD.Domain.Services
{
    public class CityService : ServiceBase<City>, ICityService
    {
        private readonly ICityRepository _repository;

        public CityService(ICityRepository repository)
            : base(repository)
        {
            this._repository = repository;
        }
    }
}
