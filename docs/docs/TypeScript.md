# TypeScript

## 基础

## 进阶

### 交叉类型

> 交叉类型是一种将多种类型组合为一种类型的方法。 这意味着你可以将给定的类型 A 与类型 B 或更多类型合并，并获得具有所有属性的单个类型。

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });
// Output: { color: "blue", radius: 42 }              
```

### 联合类型

> 联合类型是由两种或多种其他类型组成的类型，表示可能是这些类型中的任何一种的值。

```ts
type UnionType = string | number;

function showType(arg: UnionType) {
    console.log(arg);
}

showType('test');
// Output: test

showType(7);
// Output: 7
```

### 泛型

### 内置工具

#### Partial

#### Required

#### Readonly

#### Pick

#### Omit

#### Extract

#### Exclude

#### Record

#### NonNullable
