// ======================================
// Problem 1:
//=======================================

{
  type StringOrNumber = string | number;

  function calculateValue(input: StringOrNumber): number {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * input;
    }
  }
  const stringValue: StringOrNumber = "samim";
  const stringLength: number = calculateValue(stringValue);
  console.log(`Length of "${stringValue}": ${stringLength}`);

  const numberValue: StringOrNumber = 5;
  const squaredValue: number = calculateValue(numberValue);
  console.log(`Square of ${numberValue}: ${squaredValue}`);
}










// ======================================
// Problem 2:
//=======================================

{
  interface Address {
    City: string;
    Street: string;
  }
  interface Person {
    Address?: Address;
    Phone?: string;
  }

  function getAddressCity(Person: Person): string | undefined {
    return Person?.Address?.City;
  }

  const Person1: Person = {
    Address: {
      City: "Rangpur",
      Street: "kurigram",
    },
    Phone: "+880100000000",
  };
  const City1 = getAddressCity(Person1);
  console.log(`City 1: ${City1}`);
  const Person2: Person = {
    Phone: "+880100000000",
  };
  const City2 = getAddressCity(Person2);
  console.log(`City 2: ${City2}`);
}









// ======================================
// Problem 3:
//=======================================

{
  class Cat {
    name: string;
    color: string;

    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
    }

    meow(): void {
      console.log(`${this.name} says meow!`);
    }
  }

  function isCat(animal: any): animal is Cat {
    return animal instanceof Cat;
  }

  const cat = new Cat("Whiskers", "orange");
  const dog = "Fido";

  if (isCat(cat)) {
    console.log("Yes, it's a cat.");
    cat.meow();
  } else {
    console.log("No, it's not a cat.");
  }

  if (isCat(dog)) {
    console.log("Yes, it's a cat.");
  } else {
    console.log("No, it's not a cat.");
  }
}









// ======================================
// Problem 4:
//=======================================
{
  function sumNumbers(mixedData: (number | string)[]): number {
    let total = 0;
    for (const item of mixedData) {
      if (typeof item === "number") {
        total += item;
      }
    }
    return total;
  }
  const mixedData: (number | string)[] = [1, "two", 3, "four", 5];
  const result: number = sumNumbers(mixedData);
  console.log(`Total sum of numbers: ${result}`);
}











// ======================================
// Problem 5:
//=======================================

{
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: string;
  }

  function combineCarAndDriver(
    car: Car,
    driver: Driver
  ): { car: Car; driver: Driver } {
    return { car, driver };
  }
  const myCar: Car = { make: "HIP HOP", model: "xyz", year: 2022 };
  const myDriver: Driver = { name: "King Khang", licenseNumber: "sldf255" };
  const combinedData = combineCarAndDriver(myCar, myDriver);
  console.log("Combined Data:", combinedData);
}





// ======================================
// Problem 6:
//=======================================

{
  function calculateSumOrLogError(param: unknown): void {
    if (
      Array.isArray(param) &&
      param.every((item) => typeof item === "number")
    ) {
      const sum = (param as number[]).reduce((acc, curr) => acc + curr, 0);
      console.log("Sum of numbers:", sum);
    } else {
      console.error("Error: Parameter is not an array of numbers.");
    }
  }
  const numbersArray: unknown = [1, 2, 3, 4, 5];
  const notNumbersArray: unknown = [1, "two", 3, "four", 5];

  calculateSumOrLogError(numbersArray);
  calculateSumOrLogError(notNumbersArray);
}





// ======================================
// Problem 7:
//=======================================

{
  function calculateSumOrLogError(param: unknown): void {
    if (
      Array.isArray(param) &&
      param.every((item) => typeof item === "number")
    ) {
      const sum = (param as number[]).reduce((acc, curr) => acc + curr, 0);
      console.log("Sum of numbers:", sum);
    } else {
      console.error("Error: Parameter is not an array of numbers.");
    }
  }
  const numbersArray: unknown = [1, 2, 3, 4, 5];
  const notNumbersArray: unknown = [1, "two", 3, "four", 5];

  calculateSumOrLogError(numbersArray);
  calculateSumOrLogError(notNumbersArray);
}

// ======================================
// Problem 8:
//=======================================
{
}
