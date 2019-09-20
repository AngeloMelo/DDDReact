using System;
using System.Collections.Generic;
using System.Text;

namespace DDD.Domain.Contracts.Services
{
    public interface IServiceBase<TEntity> where TEntity : class
    {
        void add(TEntity obj);
        TEntity getById(int id);
        IEnumerable<TEntity> getAll();
        void update(TEntity obj);
        void remove(TEntity obj);
        void Dispose();
    }
}
