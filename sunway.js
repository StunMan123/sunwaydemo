/**
 * Demo Node.js Script (Runtime: Node.js 18)
 * Showcases various Node.js 18 features and capabilities
 */

// Built-in fetch API (stable in Node 18)
async function fetchDemo() {
  console.log("📡 Fetch API Demo");
  console.log("-".repeat(40));

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Fetched post:", data.title);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
  console.log();
}

// Array methods demo
function arrayMethodsDemo() {
  console.log("📊 Array Methods Demo");
  console.log("-".repeat(40));

  const numbers = [1, 2, 3, 4, 5];

  // Array.prototype.at() - access elements with negative indices
  console.log("Last element using at(-1):", numbers.at(-1));

  // Array.prototype.findLast() and findLastIndex()
  const items = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" },
  ];
  const lastFruit = items.findLast((item) => item.type === "fruit");
  console.log("Last fruit:", lastFruit?.name);
  console.log();
}

// Object methods demo
function objectMethodsDemo() {
  console.log("🔧 Object Methods Demo");
  console.log("-".repeat(40));

  const entries = [
    ["name", "Alice"],
    ["age", 30],
    ["city", "New York"],
  ];
  const person = Object.fromEntries(entries);
  console.log("Object from entries:", person);

  // Object.hasOwn() - safer alternative to hasOwnProperty
  console.log("Has 'name' property:", Object.hasOwn(person, "name"));
  console.log();
}

// String methods demo
function stringMethodsDemo() {
  console.log("📝 String Methods Demo");
  console.log("-".repeat(40));

  const text = "   Hello, Node.js 18!   ";
  console.log("Original:", `"${text}"`);
  console.log("trimStart():", `"${text.trimStart()}"`);
  console.log("trimEnd():", `"${text.trimEnd()}"`);

  // String.prototype.replaceAll()
  const sentence = "foo bar foo baz foo";
  console.log("replaceAll 'foo' with 'qux':", sentence.replaceAll("foo", "qux"));
  console.log();
}

// Promise combinators demo
async function promiseDemo() {
  console.log("⏳ Promise Combinators Demo");
  console.log("-".repeat(40));

  const delay = (ms, value) =>
    new Promise((resolve) => setTimeout(() => resolve(value), ms));

  // Promise.all
  const results = await Promise.all([
    delay(100, "first"),
    delay(50, "second"),
    delay(75, "third"),
  ]);
  console.log("Promise.all results:", results);

  // Promise.allSettled
  const mixed = await Promise.allSettled([
    Promise.resolve("success"),
    Promise.reject(new Error("failure")),
    Promise.resolve("another success"),
  ]);
  console.log(
    "Promise.allSettled:",
    mixed.map((r) => r.status)
  );
  console.log();
}

// Structured clone demo
function structuredCloneDemo() {
  console.log("📋 Structured Clone Demo");
  console.log("-".repeat(40));

  const original = {
    name: "Test",
    date: new Date(),
    nested: { array: [1, 2, 3] },
    map: new Map([["key", "value"]]),
    set: new Set([1, 2, 3]),
  };

  // structuredClone - deep clone including special types
  const clone = structuredClone(original);
  clone.nested.array.push(4);

  console.log("Original array:", original.nested.array);
  console.log("Cloned array:", clone.nested.array);
  console.log("Date preserved:", clone.date instanceof Date);
  console.log("Map preserved:", clone.map instanceof Map);
  console.log();
}

// Crypto API demo
function cryptoDemo() {
  console.log("🔐 Crypto API Demo");
  console.log("-".repeat(40));

  const { randomUUID, randomBytes } = require("crypto");

  console.log("Random UUID:", randomUUID());
  console.log("Random bytes (hex):", randomBytes(16).toString("hex"));
  console.log();
}

// Event emitter demo
function eventEmitterDemo() {
  console.log("📢 Event Emitter Demo");
  console.log("-".repeat(40));

  const { EventEmitter } = require("events");

  const emitter = new EventEmitter();

  emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
  });

  emitter.emit("greet", "World");
  console.log();
}

// File system promises demo
async function fsDemo() {
  console.log("📁 File System (Promises) Demo");
  console.log("-".repeat(40));

  const fs = require("fs/promises");
  const path = require("path");

  const tempFile = path.join(__dirname, "temp-demo.txt");

  try {
    // Write file
    await fs.writeFile(tempFile, "Hello from Node.js 18!");

    // Read file
    const content = await fs.readFile(tempFile, "utf-8");
    console.log("File content:", content);

    // Get file stats
    const stats = await fs.stat(tempFile);
    console.log("File size:", stats.size, "bytes");

    // Clean up
    await fs.unlink(tempFile);
    console.log("Temp file cleaned up");
  } catch (error) {
    console.log("FS error:", error.message);
  }
  console.log();
}

// Main execution
async function main() {
  console.log("=".repeat(50));
  console.log("🚀 Node.js 18 Demo Script");
  console.log(`   Running on Node ${process.version}`);
  console.log("=".repeat(50));
  console.log();

  arrayMethodsDemo();
  objectMethodsDemo();
  stringMethodsDemo();
  structuredCloneDemo();
  cryptoDemo();
  eventEmitterDemo();
  await fsDemo();
  await promiseDemo();
  await fetchDemo();

  console.log("=".repeat(50));
  console.log("✅ Demo completed!");
  console.log("=".repeat(50));
}

main().catch(console.error);