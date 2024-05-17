using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeePayRollAjaxAndJQuery.Entity
{
    public class EmployeeEntity
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }    

        public string State {  get; set; }

        public string City { get; set; }

        public long Salary {  get; set; }
    }
}
