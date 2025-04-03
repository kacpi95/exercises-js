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

const persons = {
  john: 2000,
  amanda: 3000,
  thomas: 1500,
  james: 6000,
  claire: 3000,
};
let sumAll = 0;
let sumHigh = persons.john;
let sumLow = persons.john;
for (const person in persons) {
  const personMoney = persons[person];
  sumAll += personMoney;
  if (personMoney > sumHigh) {
    sumHigh = personMoney;
  }
  if (personMoney < sumLow) {
    sumLow = personMoney;
  }
}
console.log(sumAll, sumHigh, sumLow);
