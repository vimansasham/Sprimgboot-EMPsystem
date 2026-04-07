import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:9090/employees";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch employees
  const fetchEmployees = () => {
    axios.get(API_URL).then((res) => setEmployees(res.data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add employee
  const addEmployee = () => {
    axios.post(API_URL, { name, email }).then(() => {
      setName("");
      setEmail("");
      fetchEmployees();
    });
  };

  // Delete employee
  const deleteEmployee = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => fetchEmployees());
  };

  return (
    <div>
      <h2>Employees</h2>

      {/* Add employee form */}
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addEmployee}>Add</button>
      </div>

      {/* List employees */}
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.email}{" "}
            <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;