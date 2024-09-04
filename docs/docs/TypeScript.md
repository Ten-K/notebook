# TypeScript

## 基础

### any, unknown, never

1. `any` 放弃类型检查。

```ts
let vAny: any = 'Hello World!' 
vAny = 18 // ok! ts不会管any的类型检查
vAny = true // ok! ts不会管any的类型检查           
```

2. `unknown` 允许你指定一个未知的类型。在后续的类型分流中，类型会逐渐收窄，最终得到一个更精确的类型。

```ts
/** 例1 */
let vAny: any = 'Hello World!'
let vUnknown: unknown = 'Hello World!'

let vNumberForAny: number = vAny // ok! any可以直接赋值给其它任意类型
let vNumberForUnknown: number = vUnknown // error! unknown不可以直接赋值给其它非any和unknown类型的对象

/** 例2 */
let vUnknown: unknown = 'abc'

// 使用typeof推断出vUnknown的类型是string
if (typeof vUnknown === 'string') {
    vUnknown.toLocaleUpperCase() // ok! 因为能进入这个if条件体就证明了vUnknown是字符串类型！
}

let vNumberForUnknown: number = vUnknown as number // unknown类型一定要使用as关键字转换为number才可以赋值给number类型
```

3. `never` 表示一个不会出现的类型。例如一个函数抛出错误，那么never就是这个函数的返回值类型。

```ts
/** 例1 */
function crashFunc(): never {
  throw new Error('this function will crash')
}

/** 例2 */
type Texample = string & number // never, 因为一个类型不可能即是string，也是number
```

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

### 泛型

泛型指的是在定义**函数/接口/类型**时,不预先指定具体的类型,而是在使用的时候在指定类型限制的一种特性。

```ts
/** 联合类型中使用 */
type UnionType<T> = T | string | number;

const example1: UnionType<boolean> = true; // 正确
// boolean | string | number;

/** 接口中使用 */
interface Container<T> {
    data: T;
}

const container1: Container<number> = { data: 10 };
// {
//   data: number;
// }
const container2: Container<string> = { data: "hello" };
// {
//   data: string;
// }
```

### infer 关键字

在条件类型中提取类型的某一部分信息

```ts
// 提取函数的返回值类型
type FunctionReturnType<T extends Func> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;
```

<!-- ### 协变与逆变 -->

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

**实现：**

```ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};
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

**实现：**

```ts
type Required<T> = {
    [P in keyof T]-?: T[P];
};
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

**实现：**

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
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

**实现：**

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
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

**实现：**

```ts
type Omit<T, K> = {
    [P in Exclude<keyof T, K>]: T[P];
};
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

**实现：**

```ts
type Record<K, T> = {
    [P in K]: T;
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

**实现：**

```ts
type Extract<T, U> = T extends U ? T : never;
```

### Exclude<UnionType, ExcludedMembers\>

从`UnionType`联合类型中移除所有的`ExcludedMembers`的类型，即差集

```ts
type UserProps = "name" | "age" | "email";
type RequiredUserProps = "name" | "age";

type OptionalUserProps = Exclude<UserProps, RequiredUserProps>;

const optionalUserProps: OptionalUserProps = "email"; // "email"
```

**实现：**

```ts
type Exclude<T, U> = T extends U ? never : T;
```

#### NonNullable<Type\>

从`Type`中排除了所有的null、undefined的类型。

```ts
type T0 = NonNullable<string | number | undefined>; // string | number

type T1 = NonNullable<string[] | null | undefined>; // string[]
```

**实现：**

```ts
type NonNullable<T> = T & {}; // 泛型参数T和{}的交集就默认排除了`null` 和 `undefined`
```

### Parameters<Type\>

提取函数的参数类型

```ts
const addHandler = (x: number, y: number) => x + y;

type Add = typeof addHandler; // (x: number, y: number) => number;

type AddParams = Parameters<Add>; // [number， number]
```

**实现：**

```ts
type Parameters<T> = T extends (...args: infer Args) => any ? Args : never;
```

### ReturnType<Type\>

提取函数的返回值类型

```ts
const addHandler = (x: number, y: number) => x + y;

type Add = typeof addHandler; // (x: number, y: number) => number;

type AddParams = ReturnType<Add>; // number
```

**实现：**

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
```
