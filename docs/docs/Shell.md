# Shell

`Shell` 是一个非常便利的脚本程序。

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
  msg="git commit by $author"
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

`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。
`echo` 命令用于向窗口输出文本。
[Shell教程](https://www.runoob.com/linux/linux-shell.html)
