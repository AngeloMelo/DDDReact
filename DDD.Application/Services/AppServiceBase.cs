using DDD.Application.Contracts;
using DDD.Domain.Contracts.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace DDD.Application.Services
{
    public class AppServiceBase<TEntity> : IDisposable, IAppServiceBase<TEntity> where TEntity : class
    {
        private readonly IServiceBase<TEntity> _serviceBase;

        public AppServiceBase(IServiceBase<TEntity> serviceBase)
        {
            _serviceBase = serviceBase;
        }

        public void Add(TEntity obj)
        {
            _serviceBase.add(obj);
        }

        public TEntity GetById(int id)
        {
            return _serviceBase.getById(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _serviceBase.getAll();
        }

        public void Update(TEntity obj)
        {
            _serviceBase.update(obj);
        }

        public void Remove(TEntity obj)
        {
            _serviceBase.remove(obj);
        }

        public void Dispose()
        {
            _serviceBase.Dispose();
        }
    }
}
