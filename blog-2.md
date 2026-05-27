# Generics: Reusable Code That Stays Type-Safe

---

## Introduction

One of the biggest reasons developers love TypeScript is its ability to create reusable code without losing type safety. In JavaScript, reusable functions are easy to write. But keeping them strictly typed for different kinds of data can become difficult very quickly. That’s where Generics become powerful.
Generics allow you to write flexible code that adapts to different data types while still preserving TypeScript’s type checking. Instead of creating separate functions for strings, numbers, objects, or arrays, you can create one reusable solution. And TypeScript still knows exactly what type is being used.

---

## Understanding  Generic Function

Generics allow a function, interface, or class to work with multiple types. Think of them as placeholders for types. Instead of hardcoding a specific type like string or number, you create a flexible type parameter.

### Basic Generic Function:

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity<string>("Hello");
```

Here: `T` is a generic type.
It means: “Whatever type comes in should also come out.”

---

## Why Generics matter

Without Generics, developers often duplicate code.

### Example without Generics:

```ts
function getString(value: string): string {
  return value;
}


function getNumber(value: number): number {
  return value;
}
```

Both functions do the exact same thing.

Generics solve this problem elegantly.

```ts
function getValue<T>(value: T): T {
  return value;
}

/* -- Now it works for everything. -- */

getValue<string>("Hello");
getValue<number>(100);
getValue<boolean>(true);
```
One reusable function. Strict typing preserved. No duplication.

---

## Conclusion

Generics are one of the most important features in TypeScript.
They allow developers to build reusable functions, interfaces, and components without sacrificing type safety.
Instead of duplicating logic for every data structure, you can write flexible code once and safely reuse it everywhere.

In large-scale applications, this leads to:

- cleaner architecture
- less duplication
- better maintainability
- safer code
- improved developer experience

Once you start using Generics properly, it becomes difficult to imagine writing scalable TypeScript applications without them.

---