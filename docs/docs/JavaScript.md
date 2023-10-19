# JavaScript

## 基础

### 基本（值）类型

- **String：** 串任意字符
- **Number：** 任意数字，NaN
- **Boolean：** true / false
- **Undefined：** undefined。undefined的字面意思就是未定义的值，这个值的语义是，希望表示一个变量最原始的状态，而非人为操作的结果。
- **Null：** null。null的字面意思是“空值”，这个值的语义是，希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态。在内存里的表示就是，栈中的变量没有指向堆中的内存对象。
- **Symbol：** 通过Symbol函数生成

### 对象（引用）类型

- **Object** 任意对象
- **Array** 一种特别的对象（数值下标，内部数据是有序的）
- **Function** 一种特别的对象（可执行）

### 判断类型

- typeof 返回对应的类型字符串。

```javascript
console.log(typeof 1); // "number"
console.log(typeof ""); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"
```

- instanceof 判断对象的具体类型，返回布尔值。

## 面试可能遇到的问题

1. **typeof 的原理**
原理：不同对象在底层都表示为二进制，在Js中二进制前三位存储其类型信息。
000：对象，  010浮点数，  100：字符串，  110布尔， 1整数
typeof null 的结果为object，
因为不同的对象在底层都表示为二进制，在js中二进制前三位都为0，会被判断为object类型，
null的二进制表示全为0，自然前三位也为0，
所以执行typeof null 时会返回 object

2. **instanceof 的原理**
原理：检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```javascript
/**
  * @description 判断对象是否属于某个构造函数
  * @prams left: 实例对象  right: 构造函数
  * @return boolean
*/
function instanceofMy(left, right) {
  const l = left.__proto__ // 获取实例对象的隐式原型
  const r = right.prototype // 获取构造函数的显式原型
  while(true) {
    // 说明到原型链顶端，还未找到，返回 false
    if(l === null) return false
    // 隐式原型与显式原型相等
    if(l === r) return true
    // 获取隐式原型的隐式原型，重新赋值给 l
    l = l.__proto__
  }
}
```
