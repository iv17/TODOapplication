using server.Models;
using server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace server.Services
{
    public class TODOsService
    {
        private TODOsRepository repository;

        public TODOsService()
        {
            repository = new TODOsRepository();
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