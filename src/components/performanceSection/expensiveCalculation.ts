function expensiveCalculation(number: number) {
  console.time("Calculation Time");
  for (let i = 0; i < 1000000000; i++) {
    number += 1;
  }
  console.timeEnd("Calculation Time");
  return number;
}

export default expensiveCalculation;
