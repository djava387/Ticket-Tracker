import { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  // create state variable for search field with initial value of an empty string
  const [searchField, setSearchField] = useState("");

  // create state variable for employees with initial value of an empty array
  const [employees, setEmployees] = useState([]);

  // create state variable for filtered employees with initial value of the employees array
  const [filteredEmployees, setFilterEmployees] = useState(employees);

  // fetch employee data from API and update state
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/djava387/team/team")
      .then((response) => response.json())
      .then((team) => setEmployees(team));
  }, []);

  // filter employee data based on search field and update state
  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchField);
    });

    setFilterEmployees(newFilteredEmployees);
  }, [employees, searchField]);

  // handle changes to the search field
  const onSearchChange = (event) => {
    // convert search field value to lowercase
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  // render the search field and employee list, using the filtered employee data
  return (
    <div className="App">
      <h1 className="app-title">Ticket Tracking System</h1>
      Copy code
      <Search
        className="employees-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search by name"
      />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
