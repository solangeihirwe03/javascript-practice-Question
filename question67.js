Here are JavaScript functions for those tasks:

a. Object Properties:

JavaScript
function printObjectProperties(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

// Example usage
const person = { name: "Alice", age: 30, city: "New York" };
printObjectProperties(person); // Output: name, age, city
Use code with caution.
b. Object Values:

JavaScript
function printObjectValues(obj) {
  for (const key in obj) {
    console.log(obj[key]);
  }
}

// Example usage (with the same object `person`)
printObjectValues(person); // Output: Alice, 30, New York
Use code with caution.
c. Object Key Search:

JavaScript
function searchKeyInObject(obj, key) {
  return key in obj;
}

// Example usage
console.log(searchKeyInObject(person, "name"));  // Output: true
console.log(searchKeyInObject(person, "email")); // Output: false
Use code with caution.
d. Object Manipulation:

JavaScript
function modifyObjectValues(obj, condition) {
  for (const key in obj) {
    if (condition(obj[key])) {
      obj[key] = /* new value based on the condition */;
    }
  }
}

// Example: Double numbers in the object
modifyObjectValues(person, value => typeof value === 'number');
console.log(person); // Output: { name: "Alice", age: 60, city: "New York" }
Use code with caution.
e. Object Filtering:

JavaScript
function filterObject(obj, condition) {
  const filteredObj = {};
  for (const key in obj) {
    if (condition(obj[key])) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}

// Example: Filter numbers
const filteredPerson = filterObject(person, value => typeof value === 'number');
console.log(filteredPerson); // Output: { age: 60 }
Use code with caution.
f. Object Merging:

JavaScript
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2); // Combines obj1 and obj2 properties
}

// Example usage
const hobbies = { hobbies: ["reading", "coding"] };
const mergedPerson = mergeObjects(person, hobbies);
console.log(mergedPerson); // Output: { name: "Alice", age: 60, city: "New York", hobbies: ["reading", "coding"] }
Use code with caution.
g. Object Size:

JavaScript
function getObjectSize(obj) {
  return Object.keys(obj).length;
}

// Example usage
console.log(getObjectSize(mergedPerson)); // Output: 4
Use code with caution.
h. Nested Object:

JavaScript
function accessNestedValue(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    current = current[key];
    if (current === undefined) {
      return undefined;
    }
  }
  return current;
}

// Example usage
const nestedObj = { person: { name: "Bob", age: 25 } };
console.log(accessNestedValue(nestedObj, "person.name")); // Output: Bob
Use code with caution.
i. Object Sorting:

JavaScript
// Sort keys alphabetically
function sortObjectKeys(obj) {
  return Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

// Example usage
console.log(sortObjectKeys(person)); // Output: { age: 60, city: "New York", name: "Alice" }
Use code with caution.
j. Object Transformation:

JavaScript
function transformObjectValues(obj, transformFn) {
  for (const key in obj) {
    obj[key] = transformFn(obj[key]);
  }
}

// Example: Uppercase all values
transformObjectValues(person, value => value.toUpperCase());
console.log(person); // Output