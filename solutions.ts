// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}


// Problem 2

function reverseString(word: string): string {
  return word.split("").reverse().join("");
}


// Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
  else{
  return "Please provide a String or Number value";
  }
}