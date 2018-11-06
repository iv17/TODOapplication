using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using server.Models;

namespace server.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TODOController : ApiController
    {
        private serverContext db = new serverContext();

        // GET: api/TODO
        public IHttpActionResult GetTODOes([FromUri] string date)
        {
            List<TODO> todayTodos = new List<TODO>();
            foreach (TODO todo in db.TODOes)
            {
                string todoDate = todo.Date.Day + "/" + todo.Date.Month + "/" + todo.Date.Year;
                if (todoDate.Equals(date))
                {
                    todayTodos.Add(todo);
                }
            }
            return Ok(todayTodos);
        }

        // GET: api/TODO/5
        [ResponseType(typeof(TODO))]
        public async Task<IHttpActionResult> GetTODO(int id)
        {
            TODO tODO = await db.TODOes.FindAsync(id);
            if (tODO == null)
            {
                return NotFound();
            }

            return Ok(tODO);
        }

        // PUT: api/TODO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTODO(int id, TODO tODO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tODO.Id)
            {
                return BadRequest();
            }

            db.Entry(tODO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TODOExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        public async Task<IHttpActionResult> Post([FromBody] dynamic value)
        {
            List<TODO> todos = db.TODOes.ToList();
            TODO newTODO = new TODO { Id = todos.Count, Content = value.content, Date = DateTime.Today, Finished = false };
            db.TODOes.Add(newTODO);
            await db.SaveChangesAsync();

            return Ok(newTODO);
        }

        // POST: api/TODO
        /*[ResponseType(typeof(TODO))]
        public async Task<IHttpActionResult> PostTODO(TODO tODO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TODOes.Add(tODO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tODO.Id }, tODO);
        }*/

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

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TODOExists(int id)
        {
            return db.TODOes.Count(e => e.Id == id) > 0;
        }
    }
}