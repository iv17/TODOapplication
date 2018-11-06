using server.DTOs;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Helpers
{
    public class Converter
    {
        public TODOdTO Convert(TODO todo)
        {
            TODOdTO dto = new TODOdTO { Id = todo.Id, Content = todo.Content, Date = todo.Date };
            return dto;
        }

        public List<TODOdTO> Convert(List<TODO> todos)
        {
            List<TODOdTO> dtos = new List<TODOdTO>();
            foreach (TODO todo in todos)
            {
                dtos.Add(Convert(todo));
            }
            return dtos;
        }
    }
}