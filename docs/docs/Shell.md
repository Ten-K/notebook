# Shell

`Shell` 是一个非常便利的脚本程序，可谓Shell脚本写的好，双手不用劳。

以下是最简单的 **一键提交代码** 示例，新增 **push.sh** ：

```bash
#!/bin/bash

# 一键提交代码
# 使用方法 ./push.sh "提交信息"

echo "=== 正在拉取最新代码 ==="
# master 换成自己想拉取的远程分支
git pull origin master

git add .

# 读取命令行的第一个参数-commit信息，等号两边不能有空格，如：msg = "$1"
msg="$1"

# 判断第一个参数是否存在，不存在，填入默认信息
if [ ! -n "$msg" ]; then
  author=$(git config user.name)
  msg="git commit by $author"
fi

git commit -m "${msg}"

echo "=== 正在推送 ==="
# master 换成自己想推送的远程分支
git push origin master
echo "=== 推送成功 ==="

# 阻止Shell脚本自动退出
echo "按任意键继续"
read -n 1
echo "继续运行"

```

`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。
echo 命令用于向窗口输出文本。
