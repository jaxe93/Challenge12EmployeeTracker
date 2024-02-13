document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const position = document.getElementById('position').value;

    // TODO: Send the data to the server to add the employee to the database

    // Clear the form
    document.getElementById('addEmployeeForm').reset();
});

// TODO: Fetch and display employee data from the server

// Sample data (replace this with actual data from the server)
const sampleData = [
    { id: 1, firstName: 'John', lastName: 'Doe', position: 'Manager' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', position: 'Developer' }
];

// Display sample data in the employee list
const employeeList = document.getElementById('employeeList');
sampleData.forEach(employee => {
    const listItem = document.createElement('li');
    listItem.textContent = `${employee.firstName} ${employee.lastName} - ${employee.position}`;
    employeeList.appendChild(listItem);
});