function calculateExponent(base: number, exponent: number): number {
  if (base === 0 || exponent === 0) {
    return 0;
  }
  return Math.pow(base, exponent);
}

let numberPower = calculateExponent(5, 5);

console.log(numberPower); // result : 3125

// Optional value in function with "?" operator before ":" in set type for function parameters
function OptionalValue(num1: number, num2?: number) {
  if (num2) {
    return { num1, num2 };
  }
  return { num1 };
}

let optionalValueFunctionResult: object = OptionalValue(1);

console.log(optionalValueFunctionResult);

function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

let sumNumbersResult: number = sumNumbers(1, 2, 3, 4, 5);

console.log(sumNumbersResult);

function checkHasVipPlan(userId: number): boolean {
  return userId === 1 ? true : false;
}

let userVipPlanSituation: boolean = checkHasVipPlan(1);
console.log(userVipPlanSituation);
