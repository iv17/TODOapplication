namespace server.Migrations
{
    using server.Models;
    using System;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<server.Models.TODOsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(server.Models.TODOsContext context)
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
                new TODO { Content = "Pick up drycleaning", Date = DateTime.Today },
                new TODO { Content = "Study for exam", Date = DateTime.Today},
                new TODO { Content = "Drink beer", Date = DateTime.Today });
            }
    
    }
}
