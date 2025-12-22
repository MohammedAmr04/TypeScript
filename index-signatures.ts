// Index signature with possible undefined values
// This reflects real JavaScript behavior:
// - If the key exists → string
// - If the key does NOT exist → undefined

{
  interface StringByString {
    [key: string]: string | undefined;
  }

  const dict: StringByString = {};

  const value = dict["nonExistingKey"];
  // value type: string | undefined

  // TypeScript forces a safety check
  if (value !== undefined) {
    console.log(value.toUpperCase());
  }

  //Most type-safe option

  // Best for dynamic objects (API responses, user input)

  // Matches JavaScript runtime exactly
}
// Index signature that assumes all keys always exist
// ⚠️ This is UNSAFE and can lie to the type system

{
  interface StringByStringUnsafe {
    [key: string]: string;
  }

  const dict: StringByStringUnsafe = {};

  const value = dict["nonExistingKey"];
  // value type: string ❌ (but runtime value is undefined)

  // No TypeScript error here, but this may crash at runtime
  // value.toUpperCase(); // ❌ Runtime error
}
// Record is just a cleaner alias for index signatures

type SafeDict = Record<string, string | undefined>;
type UnsafeDict = Record<string, string>;

// Same behavior as interfaces above
const safe: SafeDict = {};
const unsafe: UnsafeDict = {};

type SpecificSalary = Record<"yearlySalary" | "yearlyBonus", number>;
type GenericSalary = Record<string, number>;

const salary1: SpecificSalary = {
  yearlySalary: 120_000,
  yearlyBonus: 10_000,
}; // OK

interface Salary {
  // Type error:
  // An index signature parameter type cannot be a literal type or generic type.
  // Consider using a mapped object type instead.
  // [key: "yearlySalary" | "yearlyBonus"]: number;
}

// An index signature annotiation fits well the case when you don't know the exact structure of the object, but you know the key and value types.

// The index signature consists of the index name and its type in square brackets, followed by a colon and the value type: { [indexName: Keys]: Values }. Keys can be a string, number, or symbol, while Values can be any type.

// To limit the key type to a specific union of strings, then using the Record<Keys, Values> utilty type is a better idea. The index signature doesn't support unions of string literal types.

// Check also my post about record type.

// https://dmitripavlutin.com/typescript-index-signatures/
