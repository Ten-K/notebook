# TypeScript

## 基础

### 交叉类型

交叉类型是一种将多种类型组合为一种类型的方法。 这意味着你可以将给定的类型 A 与类型 B 或更多类型合并，并获得具有所有属性的单个类型。

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
// {
//   color: string;
//   radius: number;
// }

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });
// Output: { color: "blue", radius: 42 }              
```

### 联合类型

联合类型是由两种或多种其他类型组成的类型，表示可能是这些类型中的任何一种的值。

```ts
type UnionType = string | number;

function showType(arg: UnionType) {
    console.log(arg);
}

showType("test");
// Output: test

showType(7);
// Output: 7
```

<!-- ### 泛型 -->

## 内置工具

### Partial<Type\>

接收一个对象类型，并将这个对象类型的所有属性都标记为可选的。

```ts
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
// {
//   name?: string;
//   age?: number;
// }
```

### Required<Type\>

接收一个对象类型，并将这个对象类型的所有属性都标记为必选的。

```ts
interface User {
  name?: string;
  age?: number;
}

type RequiredUser = Required<User>;
// {
//   name: string;
//   age: number;
// }
```

### Readonly<Type\>

接收一个对象类型，并将这个对象类型标记为只读的。

```ts
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  name: "test",
  age: 18
}

readonlyUser.name = "test2"; // Error
```

### Pick<Type, Keys\>

接收一个对象类型，以及一个字面量类型组成的联合类型，这个联合类型只能是由对象类型的属性名组成的。它会从传入的对象类型中，提取出指定的联合类型，并返回一个新的对象类型。

```ts
interface User {
  name: string;
  age: number;
}

type PickUserName = Pick<User, "name">;
// {
//   name: string;
// }
```

### Omit<Type, Keys\>

与`Pick`相反，`Omit`会从传入的对象类型中，删除指定的联合类型，并返回一个新的对象类型。

```ts
interface User {
  name: string;
  age: number;
}

type OmitUserName = Omit<User, "name">;
// {
//   age: number;
// }
```

### Record<Keys Type\>

用于构造一个对象类型，它所有的key(键)都是`Keys`类型，它所有的value(值)都是`Type`类型。这个工具类型可以被用于映射一个类型的属性到另一个类型。

```ts
interface UserInfo {
  name: string;
  age: number;
}

type UserName = "zhangshan" | "lisi" | "wangwu";

const users: Record<UserName, UserInfo> = {
  zhangshan: { name: "zhangshan", age: 10 },
  lisi: { name: "lisi", age: 10 },
  wangwu: { name: "wangwu", age: 10 }
};
```

### Extract<Type, Union\>

从`Type`联合类型中提取`Union`类型中也存在的部分，即交集

```ts
type UserProps = "name" | "age" | "email";
type RequiredUserProps = "name" | "age";

type OptionalUserProps = Extract<UserProps, RequiredUserProps>;

const optionalUserProps: OptionalUserProps = "name"; // "name" | "age"
```

### Exclude<UnionType, ExcludedMembers\>

从`UnionType`联合类型中移除所有的`ExcludedMembers`的类型，即差集

```ts
type UserProps = "name" | "age" | "email";
type RequiredUserProps = "name" | "age";

type OptionalUserProps = Exclude<UserProps, RequiredUserProps>;

const optionalUserProps: OptionalUserProps = "email"; // "email"
```

#### NonNullable<Type\>

从`Type`中排除了所有的null、undefined的类型。

```ts
type T0 = NonNullable<string | number | undefined>; // string | number

type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameters<Type\>

提取函数的参数类型

```ts
const addHandler = (x: number, y: number) => x + y;

type Add = typeof addHandler; // (x: number, y: number) => number;

type AddParams = Parameters<Add>; // [number， number]
```

### ReturnType<Type\>

提取函数的返回值类型

```ts
const addHandler = (x: number, y: number) => x + y;

type Add = typeof addHandler; // (x: number, y: number) => number;

type AddParams = ReturnType<Add>; // number
```
