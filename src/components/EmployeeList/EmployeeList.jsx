import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.scss";

const EmployeeList = ({ employees }) => (
  <div className="employee-list">
    {employees.map((employee) => {
      return <EmployeeCard key={employee.id} employee={employee} />;
    })}
  </div>
);

export default EmployeeList;
