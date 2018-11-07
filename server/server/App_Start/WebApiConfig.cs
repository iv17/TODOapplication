using server.DI;
using server.Helpers;
using server.Repositories;
using server.Services;
using System.Web.Http;
using Unity;
using Unity.Lifetime;

namespace server
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var container = new UnityContainer();
            container.RegisterType<ITODOsRepository, TODOsRepository>(new HierarchicalLifetimeManager());
            container.RegisterType<ITODOsService, TODOsService>(new HierarchicalLifetimeManager());
            container.RegisterType<IConverter, Converter>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);
        }
    }
}
