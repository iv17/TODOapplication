using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using server.Models;

namespace server.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TODOsController : ApiController
    {
        private serverContext db = new serverContext();

        // GET: api/TODO
        public IHttpActionResult GetTODOes([FromUri] string date)
        {
            List<TODO> todayTodos = new List<TODO>();
            foreach (TODO tODO in db.TODOes)
            {
                string todoDate = tODO.Date.Day + "/" + tODO.Date.Month + "/" + tODO.Date.Year;
                if (todoDate.Equals(date))
                {
                    todayTodos.Add(tODO);
                }
            }
            return Ok(db.TODOes);
        }

        public async Task<IHttpActionResult> PostTODO([FromBody] dynamic value)
        {
            TODO tODO = new TODO {Content = value.content, Date = DateTime.Today };
            db.TODOes.Add(tODO);
            await db.SaveChangesAsync();

            return Ok(tODO);
        }

        // DELETE: api/TODO/5
        [ResponseType(typeof(TODO))]
        public async Task<IHttpActionResult> DeleteTODO(int id)
        {
            TODO tODO = await db.TODOes.FindAsync(id);
            if (tODO == null)
            {
                return NotFound();
            }

            db.TODOes.Remove(tODO);
            await db.SaveChangesAsync();

            return Ok(tODO);
        }

    }
}