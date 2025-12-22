// type annotations
{
  let message: string = "Hello, TypeScript!";
  let count: number = 42;
  let isActive: boolean = true;
  let all: any = "Could be anything";
  console.log(message, count, isActive, all);
}

// type annotations for arrays
{
  let numbers: number[] = [1, 2, 3, 4, 5];
  let strings: string[] = ["one", "two", "three"];
  console.log(numbers, strings);
}

// type annotations for multidimensional arrays
{
  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(matrix);

  let arr: (string | number | string[])[] = [
    "hello",
    42,
    "world",
    100,
    ["nested", "array"],
  ];
}

// type annotations for functions
{
  let showMsg: boolean = true;
  function showDetails(name: string, age: number): string {
    if (showMsg) {
      return `Name: ${name}, Age: ${age}`;
    }
    return "No details to show.";
  }
}

// Function type annotations with optional and default parameters
{
  function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  console.log(greet("Alice")); // Uses default greeting
  console.log(greet("Bob", "Hi")); // Uses provided greeting

  // optional parameter should be after required parameters

  function multiply(a: number, b?: number): number {
    if (b !== undefined) {
      return a * b;
    }
    return a * a; // Default to squaring if b is not provided
  }
  console.log(multiply(5)); // Squares the number
  console.log(multiply(5, 3)); // Multiplies both numbers
}

// type annotations for arrow functions and annonymous functions
{
  const add = (x: number, y: number): number => {
    return x + y;
  };

  const multiply = function (x: number, y: number): number {
    return x * y;
  };
  console.log(add(2, 3)); // 5
  console.log(multiply(2, 3)); // 6
}

// type aliases
{
  type ID = string | number;
  let userId: ID = "user123";
  let productId: ID = 456;
  console.log(userId, productId);
}

// type aliases advanced
{
  type Point = {
    x: number;
    y: number;
  };
  let origin: Point = { x: 0, y: 0 };
  console.log(origin);
}

//  tuples
// tuples is a special type of array with fixed number of elements
{
  let article: [number, string, boolean] = [1, "TypeScript Basics", true];
  //   article.push(2000); // Allowed: adding an element
  console.log(article);

  // readonly tuples
  let readonlyTuple: readonly [string, number] = ["readonly", 100];
  console.log(readonlyTuple);
}

// Void type
{
  function logMessage(message: string): void {
    console.log("Log:", message);
  }
  logMessage("This is a void function example.");
}

// Never type
{
  function throwError(message: string): never {
    throw new Error(message);
  }
  // Uncommenting the following line will throw an error
  // throwError("This is a never type function example.");
}

// enum type
{
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  enum level {
    Low = 5,
    Medium,
    High,
  }
  console.log(Direction.Up, Direction.Down); // 0 1
  console.log(level.Low, level.Medium, level.High); // 1 2 3
}

// type assertions
{
  let someValue: any = "This is a string";
  let strLength: number = (someValue as string).length;
  console.log("String length:", strLength);
}

// union and intersection types
{
  // union type
  type Combinable = string | number;
  function combine(input1: Combinable, input2: Combinable) {
    if (typeof input1 === "string" || typeof input2 === "string") {
      return input1.toString() + input2.toString();
    }
    return input1 + input2;
  }

  console.log(combine(10, 20)); // 30
  console.log(combine("Hello, ", "World!")); // "Hello, World!"
  type Admin = {
    name: string;
    privileges: string[];
  };
  type Employee = {
    name: string;
    startDate: Date;
  };
  // intersection type
  type ElevatedEmployee = Admin & Employee;
  let e1: ElevatedEmployee = {
    name: "Alice",
    privileges: ["create-server"],
    startDate: new Date(),
  };
  console.log(e1);
}

// type annotations with objects
{
  // readonly property
  // when a property is marked as readonly, it cannot be modified after its initial assignment.
  let user: { readonly name: string; age: number; isAdmin: boolean } = {
    name: "John",
    age: 30,
    isAdmin: true,
  };
  // user.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property
  // using interface

  interface User {
    readonly name: string;
    age: number;
    isAdmin: boolean;
  }

  let user2: User = {
    name: "Jane",
    age: 25,
    isAdmin: false,
  };
}

// interface with methods
{
  interface Calculator {
    add(a: number, b: number): number;
    subtract: (a: number, b: number) => number;
  }
}

// interface inheritance
{
  interface Animal {
    name: string;
    eat(food: string): void;
  }
  interface Dog extends Animal {
    bark(): void;
  }

  let myDog: Dog = {
    name: "Buddy",
    eat(food: string) {
      console.log(`${this.name} is eating ${food}.`);
    },
    bark() {
      console.log("Woof! Woof!");
    },
  };
}

// difference between type alias and interface
{
  // type alias can represent primitive types, union types, and tuples
  type StringOrNumber = string | number;
  let sample: StringOrNumber = "Hello";
  sample = 42;
  console.log(sample);
  // interface cannot represent primitive types, union types, or tuples
  interface Person {
    name: string;
    age: number;
  }

  let individual: Person = { name: "Alice", age: 30 };
  console.log(individual);
}

// type annotations with classes
{
  class Person {
    private name: string;
    protected age: number;
    static species: string = "";
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  let person1 = new Person("Alice", 30);
  console.log(person1.greet());
}

// static properties and methods
{
  class MathUtil {
    static PI: number = 3.14159;
    static calculateCircumference(radius: number): number {
      return 2 * MathUtil.PI * radius;
    }
  }
  // static properties and methods are accessed using the class name
  // don't need to create an instance of the class
  console.log("PI:", MathUtil.PI);
  console.log("Circumference:", MathUtil.calculateCircumference(5));
}

// implements keyword
{
  interface Shape {
    area(): number;
  }

  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    area(): number {
      return this.width * this.height;
    }
  }
  class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  let circle = new Circle(7);
  console.log("Circle Area:", circle.area());

  let rect = new Rectangle(10, 5);
  console.log("Rectangle Area:", rect.area());
}

// abstract classes
{
  abstract class Vehicle {
    abstract startEngine(): void;
    stopEngine(): void {
      console.log("Engine stopped.");
    }
  }
  // should implement all abstract methods
  class Car extends Vehicle {
    startEngine(): void {
      console.log("Car engine started.");
    }
  }
  let myCar = new Car();
  myCar.startEngine();
  myCar.stopEngine();
}

// polymorphism
{
  abstract class Animal {
    abstract makeSound(): void;
  }
  class Cat extends Animal {
    override makeSound(): void {
      console.log("Meow");
    }
  }
  class Dog extends Animal {
    override makeSound(): void {
      console.log("Woof");
    }
  }
  let animals: Animal[] = [new Cat(), new Dog()];
  animals.forEach((animal) => animal.makeSound());

  // difference between method overriding and method overloading
  class Printer {
    print(message: string): void;
    print(message: string, times: number): void;
    print(message: string, times?: number): void {
      if (times) {
        for (let i = 0; i < times; i++) {
          console.log(message);
        }
      } else {
        console.log(message);
      }
    }
  }
  // overloaded methods can be called with different sets of parameters
  // the correct method implementation is chosen based on the arguments provided
  // overridden methods are called based on the object's runtime type

  let printer = new Printer();
  printer.print("Hello, World!");
  printer.print("Hello, TypeScript!", 3);
}
