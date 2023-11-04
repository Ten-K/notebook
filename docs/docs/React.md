# 基础Hooks

## useState状态钩子

### 异步更新

```javascript
import React, { useState } from 'react';

export default function App() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1)
    console.log(count) // 0 修改count值后, count不会立即更新
  }

  useEffect(()=>{
    console.log(count); // 1 可结合useEffect获取最新值
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>
        Click me
      </button>
    </div>
  );
}
```

### 合并后更新

```javascript
import { useState } from 'react';

export default function App() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  function add() {
    // 连续执行setCount(count + 1), 预期页面count值为3, 但实际count值为1
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // 将setCount的参数改为函数的形式, setCount执行时会将上一次count的最新值作为函数的参数进行传递
    setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>
        Click me
      </button>
    </div>
  );
}
```

### 不可变数据(解决方案：[immer](https://immerjs.github.io/immer/zh-CN/))

如果要更新对象类型的数据，并触发组件的重新渲染。必须使用新对象覆盖旧的对象。因为 `react` 更新时判断对象的引用是否发生改变。

```javascript
import { useState } from "react";

export default function App() {
	// 声明一个叫 "count" 的 state 变量
	const [useInfo, setUseInfo] = useState({
		name: "jack",
		age: 18
	});
	function changeName() {
    // 错误写法，直接使用原对象不会触发重新渲染
		// useInfo.name = "jojo";
		// setUseInfo(useInfo);
    
    // 使用新对象替换 useInfo
		setUseInfo({...useInfo, name: "jojo"});
	}

	return (
		<div>
			<h1>{useInfo.name}</h1>
			<h1>{useInfo.age}</h1>
			<button onClick={changeName}>修改信息</button>
		</div>
	);
}
```

## useEffect副作用钩子

> effect 的执行时机
> 与 componentDidMount、componentDidUpdate 不同的是，在浏览器渲染完成后执行，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
> 如果完全不传递依赖数组，则 Effect 会在组件的 每次单独渲染（和重新渲染）之后 运行。
> 返回一个函数用于组件销毁时执行

```javascript
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe(); // 取消订阅
    };
  },
  [props.source],
);
```

## useContext共享钩子

```javascript
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

## useReducer状态管理钩子

当状态更新逻辑复杂时，可以考虑使用`useReducer`。`useReducer`可以同时更新多个状态，而且能把对状态的修改从组件中独立出来。
相比于`useState`，`useReducer`可以更好的描述"如何更新状态"。例如: 组件负责发出行为，`useReducer`负责更新状态。
好处是: 让代码逻辑更清晰，代码行为更易预测。

可借助[use-immer](https://github.com/immerjs/use-immer)简化操作，直接修改原对象，具体操作自行了解。

```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

## useLayoutEffect

| hooks名称 | 执行时机 | 执行过程 |
| ------ | ----------- | ------ |
| useEffect | 在浏览器重新绘制屏幕**之后**执行 | 异步执行，不会阻塞浏览器绘制 |
| useLayoutEffect | 在浏览器重新绘制屏幕**之前**执行 | 同步执行，阻塞浏览器绘制 |

```javascript
import { useState, useEffect } from "react";

function RandomNum() {
	const [num, setNum] = useState(Math.random() * 200);
	useEffect(() => {
		if (num === 0) {
			setNum(Math.random() * 100);
		}
	}, [num]);
	return (
		<>
			<h3>num的值：{num}</h3>
			<button onClick={() => setNum(0)}>重置</button>
		</>
	);
}

export default RandomNum;

```

点击重置按钮时，`num`会先渲染成0，然后再渲染成随机数，中间会出现一个闪烁的情况。
将 `useEffect` 改成 `useLayoutEffect` 就会再0渲染在页面之前修改成随机数，从而杜绝闪烁的情况。

## useCallback

- 用于缓存函数，避免子组件不必要的reRender

> 首先，假如我们不使用useCallback，在父组件中创建了一个名为handleClick的事件处理函数，根据需求我们需要把这个handleClick传给子组件，当父组件中的一些state变化后（这些state跟子组件没有关系），父组件会reRender，然后会重新创建名为handleClick函数实例，并传给子组件，这时即使用React.memo把子组件包裹起来，子组件也会重新渲染，因为props已经变化了，但这个渲染是无意义的
> 如何优化呢？这时候就可以用useCallback了，我们用useCallback把函数包起来之后，在父组件中只有当deps变化的时候，才会创建新的handleClick实例，子组件才会跟着reRender（注意，必须要用React.memo把子组件包起来才有用，否则子组件还是会reRender。React.memo是类似于class组件中的Pure.Component的作用）

- 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
- 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。
- 可通过useRef获取父组件的最新状态

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

## useMemo

函数组件，每次state更新都会重新执行函数。使用 `useMemo` 可以缓存数据。不用每次执行函数都重新生成，可用于计算量较大的场景，缓存提高性能。

- 用于缓存数据
- 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

```javascript
import { useState, useMemo } from "react";

function MemoTest() {
	const [count, setCount] = useState(0);
	const [flag, setFlag] = useState(false);

	const Son = useMemo(() => {
		console.log("子组件渲染");
		return flag ? <div>上班累</div> : <div>上班真好</div>;
	}, [flag]);

	return (
		<>
			count: {count}
			flag:{JSON.stringify(flag)}
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setFlag(!flag)}>flag</button>
			{Son}
		</>
	);
}

export default MemoTest;
```

被`useMemo`包裹的Son值只要`flag`依赖项不改变就不会重新渲染

## useRef

- ref只有首次渲染才会初始化
- ref.current变化不会引起重新渲染

### 用来获取真实的DOM元素对象

```javascript
import { useRef } from "react";

function Ref() {
	const iptRef = useRef<HTMLInputElement>(null);
	function getFocus() {
		iptRef.current?.focus();
	}

	return (
		<div>
			<input ref={iptRef}></input>
			<button onClick={getFocus}>获取input元素</button>
		</div>
	);
}
export default Ref;
```

> 说明一下： 当我们需要获取元素对象的时候， 首先引入useRef， 其次调用useRef()方法接收它的返回值，我们需要获取哪个DOM元素就在哪个DOM元素上进行绑定，通过ref属性将useRef的返回值绑定到元素身上，这样useRef的返回值，通过useRef返回一个对象，对象内部有个current属性，这个属性就对应着我们需要的元素对象；

### 保存数据

```javascript
import { useRef, useEffect, useState } from "react";

function Ref() {
	const timerId = useRef<NodeJS.Timeout>();
	const [count, setCount] = useState(0);
	useEffect(() => {
		timerId.current = setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);
	const stop = () => {
		console.log(timerId);
		clearInterval(timerId.current);
	};
	return (
		<div>
			<div>{count}</div>
			<button onClick={stop}>停止</button>
		</div>
	);
}
export default Ref;
```

> 这里讲一下 ， 为什么不用let一个变量来保存数据， 因为再使用定时器更新状态数据时， 数值的每次变化都会引起组件的更新，每次更新都重新let一个变量，所以在进行解绑操作的时候，你的let变量为null，它并没有保存定时器，所以以上场景需要使用useRef进行保存数据，useRef不会因为组件的更新而丢失数据，虽然组件进行了更新，但是通过useRef保存的数据是不会丢失的，这里通过useRef中的current来进行保存也是官方要求的写法，所以如果你想要保存的数据不会因为组件的更新而丢失，就可以使用useRef来保存数据

## useImperativeHandle

- useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 [forwardRef](https://react.docschina.org/docs/react-api.html#reactforwardref) 一起使用：

```javascript
import React, { useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

const FancyInput = React.forwardRef((_, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />
});

const App = props => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button
        onClick={() => fancyInputRef.current.focus()}
      >父组件调用子组件的 focus</button>
    </div>
  )
}

ReactDOM.render(<App />, root);
```

## useTransition

[useTransition](https://beta.react.jscn.org/reference/react/useTransition#updating-an-input-in-a-transition-doesnt-work) 是一个帮助你在不阻塞 UI 的情况下更新状态的 React Hook。将正在渲染的更新标记为低优先级，优先渲染用户的操作。

## useDeferredValue

[useDeferredValue](https://beta.react.jscn.org/reference/react/useDeferredValue) 是一个 React Hook，可以让你延迟更新 UI 的某些部分。

```javascript
import React, { useState, useDeferredValue } from "react";

const Defer = () => {
	const [kw, setKw] = useState("");
	const deferredKw = useDeferredValue(kw);
	return (
		<>
			<input type="text" value={kw} onChange={(e) => setKw(e.target.value)} />
			<SearchResult query={deferredKw} />
		</>
	);
};

const SearchResult = React.memo((props: { query: string }) => {
	if (!props.query) return;
	const items = Array(20000)
		.fill(props.query)
		.map((item, i) => <p key={i}>{item}</p>);
	return items;
});

export default Defer;
```

结合`React.memo`，文本框输入时延迟加载，减少重新渲染
