// const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

// const newNames = names.filter((nam) => nam.endsWith('a'));
// console.log(newNames);

// ///////////////////////////////////////////////

// const employees = {
//   john: {
//     name: 'John Doe',
//     salary: 3000,
//   },
//   amanda: {
//     name: 'Amanda Doe',
//     salary: 4000,
//   },
// };
// const employeesNames = [];
// const employeesSalaries = [];

// for (let array in employees) {
//   employeesNames.push(employees[array].name);
//   employeesSalaries.push(employees[array].salary);
// }
// console.log(employeesNames, employeesSalaries);

// ///////////////////////////////////////////////////////

// const salaries = [2000, 3000, 1500, 6000, 3000];
// let sum = 0;
// let highSum = salaries[0];
// let lowSum = salaries[0];

// for (let num of salaries) {
//   sum += num;
// }

// for (let i = 0; i < salaries.length; i++) {
//   if (salaries[i] > highSum) {
//     highSum = salaries[i];
//   }
// }
// for (let i = 1; i < salaries.length; i++) {
//   if (salaries[i] < lowSum) {
//     lowSum = salaries[i];
//   }
// }

// console.log(sum);
// console.log(highSum);
// console.log(lowSum);

//////////////////////////////////////////////////////////

// const persons = {
//   john: 2000,
//   amanda: 3000,
//   thomas: 1500,
//   james: 6000,
//   claire: 3000,
// };
// let sumAll = 0;
// let sumHigh = persons.john;
// let sumLow = persons.john;
// for (const person in persons) {
//   const personMoney = persons[person];
//   sumAll += personMoney;
//   if (personMoney > sumHigh) {
//     sumHigh = personMoney;
//   }
//   if (personMoney < sumLow) {
//     sumLow = personMoney;
//   }
// }
// console.log(sumAll, sumHigh, sumLow);

///////////////////////////////////////////////////////////////

// const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

// let uniqueTags = {};

// for (const tag of tags) {
//   if (!uniqueTags[tag]) {
//     uniqueTags[tag] = { appearances: 1 };
//   } else {
//     uniqueTags[tag].appearances++;
//   }
// }

// console.log(uniqueTags);

//////////////////////////////////////////////////////////////

// const employees = [
//   { name: 'Amanda Doe', salary: 3000 },
//   { name: 'John Doe', salary: 4000 },
//   { name: 'Claire Downson', salary: 2000 },
//   { name: 'Freddie Clarkson', salary: 6000 },
//   { name: 'Thomas Delaney', salary: 8200 },
// ];
// function filterEmployees(employees, minSalary, maxSalary) {
//   let newArray = [];
//   for (const empl of employees) {
//     if (empl.salary < maxSalary && empl.salary > minSalary) {
//       newArray.push(empl);
//     }
//   }
//   return newArray;
// }

// const filteredEmployees = filterEmployees(employees, 2000, 8000);
// console.log(filteredEmployees);

////////////////////////////////////////////////////////////////////

// const obj = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
// function newObj() {
//   for (const param in obj) {
//     const newObj = obj[param];
//     console.log(`${param}: ${newObj}`);
//   }
// }
// newObj();

///////////////////////////////////////////////////////////////////

// function formatName(name, surname) {
//   const newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   const newSurname =
//     surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
//   return `${newName} ${newSurname}`;
// }

// console.log(formatName('kacPEr', 'nOWaK'));

///////////////////////////////////////////////////////////////////////

// function getEvensInRange(numFirst, numEnd) {
//   let array = [];
//   for (let i = numFirst; i < numEnd; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvensInRange(1, 8));

//////////////////////////////////////////////////////////////////////////

function filter(array, call) {
  let newArray = [];

  for (const item of array) {
    if (call(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
function callback(item) {
  return item % 2 === 0;
}
console.log(filter([2, 4, 3, 6, 4, 8], callback));
