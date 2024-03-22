// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// document.getElementById("add-employees-btn")
// const employeesArray = "";
// Collect employee data


const collectEmployees = function() {

//Creating array
  const employeesArray = [
];

//Adding prompt and pushing array values
  let firstName = window.prompt("Please enter the first name data...")

  let lastName = window.prompt("Please enter last name data...")

  let fullName = window.prompt("Please enter full name data...")
 
  let salary = window.prompt("Please enter salary data...")
 
  employeesArray.push(  
    { firstName: `${firstName}`,
      lastName:`${lastName}` ,
      fullName: `${fullName}`,
      salary: `${salary}`
  })
  let addMoreEmployees = window.confirm("Do you want to add more employees?")

  if (employeesArray != null){
      console.log("this is the Employees array : " + employeesArray)
  }
  if (addMoreEmployees === true){
    let j = "1";
    const employeesArraynew = [];
   
    let countEmployees = window.prompt("Enter number of additional employees...")
      for(i=0;i<countEmployees;i++) {
        

          //Adding prompt and pushing array values
        let firstName = window.prompt("Please enter the first name data.. " )
        
        let lastName = window.prompt("Please enter last name data...")
       
        let fullName = window.prompt("Please enter full name data...")
       
        let salary = window.prompt("Please enter salary data...")
    
        //Push
        
        employeesArray.push(  
          { firstName: `${firstName}`,
            lastName:`${lastName}` ,
            fullName: `${fullName}`,
            salary: `${salary}`
        })
        console.log("this is the employees array now: " + employeesArray)
      }
    }
 
  return employeesArray;


}

 
  // TODO: Get user input to create and return an array of employee objects
  

  function extractValue(arr, prop) {
    // extract value from property
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;

}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // passing an array of objects and property 'a' to extract
  const resultSalary = extractValue(employeesArray, 'salary');
  //Converting the string to an integer using .map(Number) function
  const resultSalary1 = resultSalary.map(Number)
  let sumSalary = 0;
  for(i=0;i<resultSalary1.length;i++){
    sumSalary += resultSalary1[i]
  }
  console.log("This is the combined salary: " + sumSalary)
  averageSalary = sumSalary / resultSalary.length ;
  console.log("This is the average salary: " + averageSalary)
  // TODO: Calculate and display the average salary
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
//This is my random name

//Get only random full name
  const resultEmployeeFullName = extractValue(employeesArray, 'fullName');
  let resultFullName = resultEmployeeFullName[(Math.floor(Math.random() * resultEmployeeFullName.length))];

  console.log("This is my first random name:   " + resultFullName)
  
}



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
