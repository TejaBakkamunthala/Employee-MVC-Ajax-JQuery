using EmployeePayRollAjaxAndJQuery.Context;
using EmployeePayRollAjaxAndJQuery.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EmployeePayRollAjaxAndJQuery.Controllers
{
    public class AjaxController : Controller
    {
        private readonly EmployeePayRollContext payRollContext;

        public AjaxController(EmployeePayRollContext payRollContext)
        {
            this.payRollContext = payRollContext;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public JsonResult EmployeeList()
        {
            var result = payRollContext.EmployeePayRoll.ToList();

            if (result != null)
            {
                return new JsonResult(result);
            }
            else
            {
                return null;
            }
        }


        [HttpPost]
        public JsonResult AddEmployee(EmployeeEntity empEntity)
        {
            EmployeeEntity emp = new EmployeeEntity()
            {
                Name = empEntity.Name,
                State = empEntity.State,
                City = empEntity.City,
                Salary = empEntity.Salary
            };
            payRollContext.EmployeePayRoll.Add(emp);
            payRollContext.SaveChanges();
            return new JsonResult("Data is Saved");

        }


        public JsonResult Delete(int id)
        {
            var result = payRollContext.EmployeePayRoll.Where(em => em.Id == id).FirstOrDefault();

            if (result != null)
            {
                payRollContext.Remove(result);
                payRollContext.SaveChanges();
                return new JsonResult("Data Deleted");
            }
            else
            {
                return null;
            }
        }


        public JsonResult Edit(int id)
        {
            var result = payRollContext.EmployeePayRoll.Where(em => em.Id == id).FirstOrDefault();
            if (result != null)
            {
                return new JsonResult(result);
            }
            else
            {

                return null;
            }
        }


        public JsonResult Update(EmployeeEntity empEntity)
        {
            payRollContext.EmployeePayRoll.Update(empEntity);
            payRollContext.SaveChanges();
            return new JsonResult ( "Record Updated" );
        }


    }

}
