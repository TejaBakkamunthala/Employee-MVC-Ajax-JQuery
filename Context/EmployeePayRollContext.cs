using EmployeePayRollAjaxAndJQuery.Entity;
using Microsoft.EntityFrameworkCore;

namespace EmployeePayRollAjaxAndJQuery.Context
{
    public class EmployeePayRollContext :DbContext
    {
        public EmployeePayRollContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<EmployeeEntity>EmployeePayRoll{ get; set; }
    }
}
