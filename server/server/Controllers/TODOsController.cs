using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using server.DTOs;
using server.Helpers;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TODOsController : ApiController
    {
        private TODOsService service;
        private Converter converter;

        public TODOsController()
        {
            service = new TODOsService();
            converter = new Converter();
        }

        // GET: api/TODO
        public IHttpActionResult Get([FromUri] string date)
        {
            List<TODO> todos = service.FindAll();

            return Ok(converter.Convert(todos));
        }

        public IHttpActionResult Post([FromBody] dynamic value)
        {
            string content = value.content;

            return Ok(converter.Convert(service.Add(content)));
        }

        // DELETE: api/TODO/5
        [ResponseType(typeof(TODO))]
        public IHttpActionResult Delete(int id)
        {
            return Ok(converter.Convert(service.Delete(id)));
        }

    }
}