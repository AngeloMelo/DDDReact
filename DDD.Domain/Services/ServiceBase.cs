using DDD.Domain.Contracts.Repositories;
using DDD.Domain.Contracts.Services;
using System;
using System.Collections.Generic;

namespace DDD.Domain.Services
{
    public class ServiceBase<TEntity> : IDisposable, IServiceBase<TEntity> where TEntity : class
    {
        private readonly IRepositoryBase<TEntity> repository;

        public ServiceBase(IRepositoryBase<TEntity> repository)
        {
            this.repository = repository;
        }

        public void add(TEntity obj)
        {
            repository.Add(obj);
        }

        public void Dispose()
        {
            repository.Dispose();
        }

        public IEnumerable<TEntity> getAll()
        {
            return repository.GetAll();
        }

        public TEntity getById(int id)
        {
            return repository.GetById(id);
        }

        public void remove(TEntity obj)
        {
            repository.Remove(obj);
        }

        public void update(TEntity obj)
        {
            repository.Update(obj);
        }
    }
}
