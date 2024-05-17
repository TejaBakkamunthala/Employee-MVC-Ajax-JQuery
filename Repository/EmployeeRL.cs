using EmployeePayRollAjaxAndJQuery.Context;

namespace EmployeePayRollAjaxAndJQuery.Repository
{
    public class EmployeeRL
    {

        private readonly EmployeePayRollContext PayRollContext;

        public EmployeeRL(EmployeePayRollContext PayRollContext)
        {
            this.PayRollContext = PayRollContext;
        }

        public object GetEmployeeDetails()
        {

            var result = PayRollContext.EmployeePayRoll.ToList();
            if (result != null)
            {
                return result;
            }
            else
            {
                return null;
            }

        }



    }
}
