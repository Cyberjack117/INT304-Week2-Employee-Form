import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState('');

  function addEmployee(employee) {
    setEmployees((current) => [...current, employee]);
    setMessage(`${employee.name} was added.`);
  }

  return (
    <main className="employee-app">
      <EmployeeForm onAddEmployee={addEmployee} />
      <section className="employee-list" aria-labelledby="employee-list-heading">
        <h2 id="employee-list-heading">Employee List</h2>
        {message && <p role="status" className="success-message">{message}</p>}
        <ul>
          {employees.map((employee, index) => (
            <li key={`${employee.email}-${index}`}>{employee.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
