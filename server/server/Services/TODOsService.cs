using server.Models;
using server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace server.Services
{
    public interface ITODOsService
    {
        List<TODO> FindAll();
        TODO Add(string content);
        List<TODO> Delete(int id);
    }
    public class TODOsService : ITODOsService
    {
        private ITODOsRepository repository;

        public TODOsService(TODOsRepository irepository)
        {
            repository = irepository;
        }

        public List<TODO> FindAll()
        {
            return repository.FindAll().ToList();
        }

        public TODO Add(string content)
        {
            TODO tODO = new TODO { Content = content, Date = DateTime.Today };
        
            return repository.Add(tODO);
        }

        public List<TODO> Delete(int id)
        {
            return repository.Delete(id).ToList();
        }
    }
}