namespace server.Migrations
{
    using server.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<server.Models.serverContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(server.Models.serverContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.TODOes.AddOrUpdate(t => t.Id,
                new TODO { Id = 0, Content = "Pick up drycleaning", Date = DateTime.Today, Finished = false },
                new TODO { Id = 1, Content = "Study for exam", Date = DateTime.Today, Finished = false },
                new TODO { Id = 2, Content = "Drink beer", Date = DateTime.Today, Finished = false });
            }
    
    }
}
