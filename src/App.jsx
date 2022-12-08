import { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");

  // console.log(searchField);

  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilterEmployees] = useState(employees);

  // console.log("render");
  useEffect(() => {
    // console.log("effect1");
    fetch("https://my-json-server.typicode.com/djava387/team/team")
      .then((response) => response.json())
      .then((team) => setEmployees(team));
  }, []);

  useEffect(() => {
    // console.log("effect1");
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchField);
    });

    setFilterEmployees(newFilteredEmployees);
    // console.log("effect 2");
  }, [employees, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Ticket Tracking System</h1>

      <Search
        className="employees-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search by name"
      />
      <EmployeeList employees={filteredEmployees} />
      {/* <Counter /> */}
    </div>
  );
};

export default App;
