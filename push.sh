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