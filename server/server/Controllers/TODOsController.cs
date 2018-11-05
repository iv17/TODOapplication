using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace server.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TODOsController : ApiController
    {
        List<TODO> todos = new List<TODO> {
            new TODO { Id = 0, Content = "Pick up drycleaning", Date = DateTime.Today },
            new TODO { Id = 1, Content = "Study for exam", Date = DateTime.Today },
            new TODO { Id = 2, Content = "Drink beer", Date = DateTime.Today }
        };
        public IHttpActionResult Get()
        {
            return Ok(todos);
        }
    }
}
