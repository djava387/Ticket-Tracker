import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = ({ employee }) => {
  const { name, role } = employee;

  return (
    <div className="card-container">
      <h2>{name}</h2>
      <p>{role}</p>
      <Counter />
    </div>
  );
};

export default EmployeeCard;
