/*
Excess Property Checks in TypeScript

- TypeScript performs extra checks ONLY on object literals.
- It ensures that object literals do not contain properties
  that are not defined in the target type.
- This helps catch typos and unintended properties early.
*/
interface User {
  name: string;
  age: number;
}

// ❌ Error: "role" does not exist in type User
const user1: User = {
  name: "Mohamed",
  age: 25,
  //   role: "admin",
};
// ✅ Correct: No extra properties

// ✅ No error because this is NOT an object literal
const tempUser = {
  name: "Mohamed",
  age: 25,
  role: "admin",
};

const user2: User = tempUser;

/*
Without excess property checks, simple typos would pass silently.

Example:
- "ag" instead of "age"
- Extra config fields that are never used

Excess property checks catch these bugs at compile time.
*/

interface BoxOptions {
  width: number;
  height: number;
}

function createBox(options: BoxOptions) {}

// ❌ Error: "color" is an excess property
createBox({
  width: 100,
  height: 200,
  //   color: "red",
});
// ✅ Correct: No extra properties
createBox({
  width: 100,
  height: 200,
  color: "red",
} as BoxOptions);

// ✅ Correct: No extra properties
const boxOptions = {
  width: 100,
  height: 200,
  color: "red",
};
createBox(boxOptions);
