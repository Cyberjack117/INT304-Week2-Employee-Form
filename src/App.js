import React, { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm';

// Read saved employees once when the application first loads.
function loadEmployees() {
  try {
    const savedData = localStorage.getItem('employeeData');
    if (!savedData) return [];

    const parsedData = JSON.parse(savedData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error('Could not load saved employees:', error);
    return [];
  }
}

function App() {
  const [employees, setEmployees] = useState(loadEmployees);
  const [message, setMessage] = useState('');

  // Save changes after employees are added or changed.
  useEffect(() => {
    try {
      localStorage.setItem('employeeData', JSON.stringify(employees));
    } catch (error) {
      console.error('Could not save employee records:', error);
    }
  }, [employees]);

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
