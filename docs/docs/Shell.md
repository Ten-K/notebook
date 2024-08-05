# Shell

`Shell` 脚本（shell script），是一种为 shell 编写的脚本程序。
可以非常便利的减轻我们在开发过程中的一些重复性工作。

```bash
#!/bin/bash
echo "Hello World !"
```

`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。
`echo` 命令用于向窗口输出文本。
[Shell教程](https://www.runoob.com/linux/linux-shell.html)

## 定义变量

::: tip 注意
变量名和等号之间不能有空格
:::

```bash
# 定义字符串，推荐所有字符串都用双引号，单引号字符串中的变量是无效的
your_name="runoob.com"

# 定义数组，用括号来表示数组，数组元素用"空格"符号分割开。
array_name=(value0 value1 value2 value3)
```

## 使用变量

```bash
your_name="runoob.com"

echo $your_name
echo ${your_name}
```

花括号可加可不加，加花括号是为了帮助解释器识别变量的边界，比如以下情况：

```bash
your_name="runoob.com"
echo "I am good at ${your_name}Script"
```

如果不给your_name变量加花括号，写成echo "I am good at $your_nameScript"，解释器就会把$your_nameScript当成一个变量（其值为空），代码执行结果就不是我们期望的样子了。

推荐给所有变量加上花括号，这是个好的编程习惯。

## 传递参数

我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……

以下实例我们向脚本传递三个参数，并分别输出，其中 $0 为执行的文件名（包含文件路径）：

```bash
#!/bin/bash

echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";

```

执行脚本，输出结果如下所示：

```bash
./test.sh 1 2 3

# 执行的文件名：./test.sh
# 第一个参数为：1
# 第二个参数为：2
# 第三个参数为：3
```

## if 条件判断

if else 的 [...] 判断语句中大于使用 -gt，小于使用 -lt。

```bash
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi

# 输出结果：a 小于 b
```

如果使用 ((...)) 作为判断语句，大于和小于可以直接使用 > 和 <。

```bash
a=10
b=20
if (( $a == $b ))
then
   echo "a 等于 b"
elif (( $a > $b ))
then
   echo "a 大于 b"
elif (( $a < $b ))
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi

# 输出结果：a 小于 b
```

## for 循环

```bash
for loop in 1 2 3
do
    echo "The value is: ${loop}"
done

# 输出结果
# The value is: 1
# The value is: 2
# The value is: 3
```

## while 语句

以下是一个基本的 while 循环，测试条件是：如果 int 小于等于 5，那么条件返回真。int 从 1 开始，每次循环处理时，int 加 1。运行上述脚本，返回数字 1 到 5，然后终止。

```bash
#!/bin/bash
int=1
while(( $int<=3 ))
do
    echo $int
    let "int++"
done
# 输出结果
# 1
# 2
# 3
```

## case ... esac

```bash
#!/bin/sh

site="runoob"

case "$site" in
   "runoob") echo "菜鸟教程"
   ;;
   "google") echo "Google 搜索"
   ;;
   "taobao") echo "淘宝网"
   ;;
esac

# 输出结果：菜鸟教程
```

以上实例使用了 Bash let 命令，它用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量，具体可查阅：[Bash let](https://www.runoob.com/linux/linux-comm-let.html) 命令。

## 案例

如 `git` 提交代码，一般都要经过以下4步

```bash
  git add .
  git commit -m "xx"
  git pull origin main
  git push origin main
```

如果使用 `shell` 脚本，则只需要运行 `shell` 脚本即可

以下是最简单的 **一键提交代码** 示例，新增 **push.sh** ：

```bash
#!/bin/bash

# 当脚本中的任何一行执行失败就退出
set -e

git add .

# 读取命令行的第一个参数，等号两边不能有空格，如：msg = "$1"
# commit信息
msg="$1"

# 当前本地分支$(git rev-parse --abbrev-ref HEAD)
branch="$2"

# 判断第一个参数是否存在，不存在，填入默认信息
if [ ! -n "$msg" ]; then
  author=$(git config user.name)
  msg="git commit by ${author}"
fi

if [ ! -n "$branch" ]; then
  branch="$(git rev-parse --abbrev-ref HEAD)"
fi

echo "=== commit信息: $msg ==="
git commit -m "${msg}"

echo "=== 正在拉取最新代码 ==="
# main 换成自己想拉取的远程分支
git pull origin main

echo "=== 正在推送 ==="
# main 换成自己想推送的远程分支
git push origin "${branch}"
echo "=== 推送成功 ==="

# 阻止Shell脚本自动退出
echo "按任意键继续"
read -n 1
echo "继续运行"

```

**windows** 下执行

```bash
  # 不指定远程分支，默认推送至与当前本地分支同名的远程分支
  ./push.sh "提交信息"

  # 指定远程分支
  ./push.sh "提交信息" "远程分支"
```

## 参数说明

| 参数 | 说明 |
| ------ | ----------- |
| -eq | 等于则为真 |
| -ne | 不等于则为真 |
| -gt | 大于则为真 |
| -ge | 大于等于则为真 |
| -lt | 小于则为真 |
| -z 字符串 | 字符串的长度为零则为真 |
| -n 字符串 | 字符串的长度不为零则为真 |
| -e 文件名 | 如果文件存在则为真 |
| -r 文件名 | 如果文件存在且可读则为真 |
| -w 文件名 | 如果文件存在且可写则为真 |
| -x 文件名 | 如果文件存在且可执行则为真 |
| -s 文件名 | 如果文件存在且至少有一个字符则为真 |
| -d 文件名 | 如果文件存在且为目录则为真 |
| -f 文件名 | 如果文件存在且为普通文件则为真 |
| -c 文件名 | 如果文件存在且为字符型特殊文件则为真 |
| -b 文件名 | 如果文件存在且为块特殊文件则为真 |
