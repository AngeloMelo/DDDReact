using DDD.Domain.Contracts.Repositories;
using DDD.Domain.Entities;
using DDD.Infra.Data.Context;

namespace DDD.Infra.Data.Repositories
{
    public class CityRepository : RepositoryBase<City>, ICityRepository
    {
        public CityRepository(DDDContext ctx) : base(ctx)
        {

        }
    }
}
