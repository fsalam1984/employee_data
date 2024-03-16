// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// const employeesArray = "";
// Collect employee data
const collectEmployees = function() {


// return employeesArray;
}


const employeesArray =  [
  {
    firstName: "Clarissa",
    lastName: "Jones",
    fullName: "Clarissa Jones",
    salary: 30000
  },
  {
    firstName: "Patrick",
    lastName: "Hunter",
    fullName: "Patrick Hunter",
    salary: 50000
  },
  {
    firstName: "Indiana",
    lastName: "Hank",
    fullName: "Indiana Hank",
    salary: 70000
  },
]
 
  // TODO: Get user input to create and return an array of employee objects
  

  function extractValue(arr, prop) {
    // extract value from property
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;

}

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

const resultSalary = extractValue(employeesArray, 'salary');
  // console.log(resultSalary);
  let sumSalary = 0;
  for(i=0;i<resultSalary.length;i++){
    sumSalary += resultSalary[i]
  }
  console.log("This is the combined salary: " + sumSalary)
// Display the average salary
const displayAverageSalary = function() {
  // passing an array of objects and property 'a' to extract
  
  averageSalary = sumSalary / resultSalary.length ;
  console.log("This is the average salary" + averageSalary)
  // TODO: Calculate and display the average salary
}
displayAverageSalary()

//Get random first & last names
const resultEmployeeFirstName = extractValue(employeesArray, 'firstName');
const resultEmployeeLastName = extractValue(employeesArray, 'lastName');
let resultFirstName = resultEmployeeFirstName[(Math.floor(Math.random() * resultEmployeeFirstName.length))];
let resultLastName =  resultEmployeeLastName[(Math.floor(Math.random() * resultEmployeeFirstName.length))];
// console.log("This is my first random First name: " + resultFirstName)
// console.log("This is my first random Last name:   " + resultLastName)

//Get only random full name
const resultEmployeeFullName = extractValue(employeesArray, 'fullName');
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
//This is my random name
  let resultFullName = resultEmployeeFullName[(Math.floor(Math.random() * resultEmployeeFullName.length))];

  console.log("This is my first random name:   " + resultFullName)
  
}

getRandomEmployee()

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
// displayEmployees()