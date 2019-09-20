using DDD.Domain.Entities;
using DDD.Application.Contracts;
using DDD.Domain.Contracts.Services;

namespace DDD.Application.Services
{
    public class CityAppService : AppServiceBase<City>, ICityAppService
    {
        private readonly ICityService _clienteService;

        public CityAppService(ICityService clienteService)
            : base(clienteService)
        {
            _clienteService = clienteService;
        }
    }
}
