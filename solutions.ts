// Problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

// Problem 2

const reverseString = (word: string): string => {
  return word.split("").reverse().join("");
};

// Problem 3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else {
    return "Please provide a String or Number value";
  }
};

// Problem 4

const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => {
  return obj[key];
};

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (bookInfo: Book) => {
  return {
    ...bookInfo,
    isRead: true,
  };
};

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7

type NumArr = number[];

const getIntersection = (arrOfNum1: NumArr, arrOfNum2: NumArr): NumArr => {
  return arrOfNum1.filter((num) => arrOfNum2.includes(num));
};
