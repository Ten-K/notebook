#!/bin/bash

# 一键提交代码
# 使用方法 ./push.sh "提交信息"

echo "=== 正在拉取最新代码 ==="
git pull origin main

git add .

# 读取命令行的第一个参数-commit信息
msg="$1"

# 判断第一个参数是否存在，不存在，填入默认信息
if [ ! -n "$msg" ]; then
  author=$(git config user.name)
  msg = "git commit by $author"
fi

git commit -m "${msg}"

echo "=== 正在推送 ==="
git push origin main
echo "=== 推送成功 ==="

# 阻止Shell脚本自动退出
echo "按任意键继续"
read -n 1
echo "继续运行"