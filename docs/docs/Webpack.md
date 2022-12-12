# Webpack

## 优化

### 开发优化

1. 测试

### 构建优化

1. 测试

## 实现一个简易的Webpack

```js
/**
 * 1. 读取入口文件转化为ast
 * 2. 遍历ast收集依赖
 * 3. 将es6-ast转为es5-code
 * 4. 构建依赖关系图
 * 5. 生成浏览器最终运行代码
 */

const fs = require('fs') /** 读取文件 */
const path = require('path') /** 读取路径 */
const babel = require('@babel/core') /** 转换es6-ast为es5-code */
const parser = require('@babel/parser') /** 转换源代码为ast */
const traverse = require('@babel/traverse').default /** 遍历ast */

/** ID依赖标识 */
let ID = 0
function createAsset(filename) {
	/** 获取入口文件内容 */
	const content = fs.readFileSync(filename, 'utf8')
	/** 将源代码转化为ast */
	const ast = parser.parse(content, {
		sourceType: 'module' /** 表示要解析的是ES模块 */
	})
	/** 遍历ast, 收集依赖 */
	const dependencies = []
	traverse(ast, {
		ImportDeclaration: ({ node }) => {
			/**
			 * node.source.value为遇到import语句时，导入的相对路径
			 * ./info.js
			 * ./consts.js
			 */
			dependencies.push(node.source.value)
		}
	})
	/** es6-ast转化为es5-code */
	const { code } = babel.transformFromAstSync(ast, null, {
		presets: ['@babel/preset-env']
	})

	let id = ID++

	return {
		id, // 当前模块的id
		filename, // 当前模块的名称
		code, // 当前模块的es5-code
		dependencies // 当前模块的依赖
	}
}

function createGraph(entry) {
	/** 生成当前模块的信息对象 */
	const mainAsset = createAsset(entry)
	const queue = [mainAsset]
	/** 查找依赖, 构建依赖图 */
	for (const asset of queue) {
		/** 获取文件夹路径 */
		const dirname = path.dirname(asset.filename)
		/** 存放id与依赖模块的映射关系 */
		asset.mapping = {}
		asset.dependencies.forEach((relativePath) => {
			/** 文件夹路径拼接当前文件下的依赖相对路径，改为绝对路径 */
			const absolutePath = path.join(dirname, relativePath)
			const child = createAsset(absolutePath)
			asset.mapping[relativePath] = child.id
			queue.push(child)
		})
	}
	return queue
}

/**
 * 打包, 生成最终代码
 * require接收参数为id, 在导出require时需要重写函数, 将外界接收的relativePath转化为id
 */
function bundle(graph) {
	let modules = ''
	/**
	 * 将modules构建成如下结构, 方便解构取值
	 *  0: [
	 *       function (require, module, exports) {
	 *         "use strict";
	 *
	 *         var _info = _interopRequireDefault(require("./info.js"));
	 *         function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	 *         console.log(_info["default"]);
	 *       },
	 *       {"./info.js":1}
	 *     ]
	 */
	graph.forEach((module) => {
		modules += `
    ${module.id}: [
      function (require, module, exports) {
        ${module.code}
      },
      ${JSON.stringify(module.mapping)}
    ],
    `
	})
	const result = `
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function loaclRequire(relativePath) {
          return require(mapping[relativePath]);
        };
        const module = {
          exports: {}
        };
        fn(loaclRequire, module, module.exports);
        return module.exports;
      };
      require(0);
    })({${modules}})
  `
	return result
}

const graph = createGraph('./src/index.js')

const result = bundle(graph)
/** 将打印结果放到谷歌浏览器控制台输出试试吧 */
console.log(result) /** Hei xiaoli */

```
