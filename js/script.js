const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

const newNames = names.filter((nam) => nam.endsWith('a'));
console.log(newNames);

///////////////////////////////////////////////

const employees = {
  john: {
    name: 'John Doe',
    salary: 3000,
  },
  amanda: {
    name: 'Amanda Doe',
    salary: 4000,
  },
};
const employeesNames = [];
const employeesSalaries = [];

for (let array in employees) {
  employeesNames.push(employees[array].name);
  employeesSalaries.push(employees[array].salary);
}
console.log(employeesNames, employeesSalaries);

///////////////////////////////////////////////////////

