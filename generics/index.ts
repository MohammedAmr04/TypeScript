// generics
// when we want to create reusable components
{
  // generic function
  function identity<T>(arg: T): T {
    return arg;
  }

  // using the generic function
  let output1 = identity<string>("Hello");
  let output2 = identity<number>(42);
  console.log(output1);
  console.log(output2);

  // arrow function with generics
  const genericArrowFunction = <T>(arg: T): T => {
    return arg;
  };

  // generic multi-parameter function
  function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  function returnString<T>(arg: T): string {
    return `Value: ${arg}`;
  }
}

// generic interfaces
{
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }
  function identityFunction<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identityFunction;
  console.log(myIdentity(100));
}
