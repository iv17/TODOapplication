using server.Models;
using System.Data.Entity;
using System.Threading.Tasks;

namespace server.Repositories
{
    public class TODOsRepository
    {
        private serverContext db;

        public TODOsRepository()
        {
            db = new serverContext();
        }

        public DbSet<TODO> FindAll()
        {
            return db.TODOes;
        }

        public TODO Add(TODO tODO)
        {
            Task<TODO> task = Task<TODO>.Factory.StartNew(() =>
            {
                db.TODOes.Add(tODO);
                db.SaveChanges();

                return tODO;
            });
            return task.Result;
        }

        public DbSet<TODO> Delete(int id)
        {
            Task<DbSet<TODO>> task = Task<DbSet<TODO>>.Factory.StartNew( () =>
            {
                TODO tODO = db.TODOes.Find(id);

                if (tODO == null)
                {
                    return null;
                }
                db.TODOes.Remove(tODO);
                db.SaveChanges();

                return db.TODOes;

            });
            return task.Result;
        }
    }
}