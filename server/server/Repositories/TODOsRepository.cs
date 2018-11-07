﻿using server.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace server.Repositories
{
    public interface ITODOsRepository
    {
        DbSet<TODO> FindAll();
        TODO Add(TODO tODO);
        DbSet<TODO> Delete(int id);

    }
    public class TODOsRepository : ITODOsRepository
    {
        private TODOsContext db = new TODOsContext();

        public DbSet<TODO> FindAll()
        {
            return db.TODOes;
        }

        public TODO Add(TODO tODO)
        {
            Task<TODO> task = Task<TODO>.Run(async () =>
            {
                db.TODOes.Add(tODO);
                await db.SaveChangesAsync();

                return tODO;
            });
            return task.Result;
        }

        public DbSet<TODO> Delete(int id)
        {
            Task<DbSet<TODO>> task = Task<DbSet<TODO>>.Run(async () =>
            {
                TODO tODO = db.TODOes.Find(id);

                if (tODO == null)
                {
                    return null;
                }
                db.TODOes.Remove(tODO);
                await db.SaveChangesAsync();

                return db.TODOes;

            });
            return task.Result;
        }
    }
}