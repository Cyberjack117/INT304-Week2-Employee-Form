import React, { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
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
    <EmployeeList employees={employees} message={message} />
  </main>
);

}

export default App;
