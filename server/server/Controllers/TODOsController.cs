using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace server.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TODOsController : ApiController
    {
        private List<TODO> todos;
        
        public TODOsController()
        {
            todos = new List<TODO> {
                new TODO { Id = 0, Content = "Pick up drycleaning", Date = DateTime.Today, Finished = false },
                new TODO { Id = 1, Content = "Study for exam", Date = DateTime.Today, Finished = false },
                new TODO { Id = 2, Content = "Drink beer", Date = DateTime.Today, Finished = false }
            };
            //var session = HttpContext.Current.Session;
            //session["todos"] = todos;
        }
        
        public IHttpActionResult Get([FromUri] string date)
        {
            List<TODO> todayTodos = new List<TODO>();
            foreach (TODO todo in todos)
            {
                string todoDate = todo.Date.Day + "/" + todo.Date.Month + "/" + todo.Date.Year;
                if (todoDate.Equals(date))
                {
                    todayTodos.Add(todo);
                }
            }

            var session = HttpContext.Current.Session;

            session["todos"] = todayTodos;
            todos = (List<TODO>) session["todos"];
            return Ok(todos);
        }

        public IHttpActionResult Post([FromBody] dynamic value)
        {
            var session = HttpContext.Current.Session;
            List<TODO> todos = (List<TODO>) session["todos"];
            TODO newTODO = new TODO { Id = todos.Count, Content = value.content, Date = DateTime.Today, Finished = false };
            todos.Add(newTODO);
            session["todos"] = todos;
            return Ok(newTODO);
        }

        public IHttpActionResult Delete(int id)
        {
            var session = HttpContext.Current.Session;
            List<TODO> todos = (List<TODO>) session["todos"];
            TODO todo = todos.FirstOrDefault((p) => p.Id == id);
            todo.Finished = true;
            session["todos"] = todos;
            return Ok(todos);
        }
    }
}
