
function EmployeeList() {

    const employeeName = "Name LastName";
    const employeePosition = "Job Position";

    return(
       <div className="card">       
         <div className="container">
         <img src="profileIcon.png" className="photoIcon" />
            {employeeName} <br />
            {employeePosition}
        </div>
       </div>
    )
}

export default EmployeeList;