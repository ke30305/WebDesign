#! /bin/sh

BASEDIR=$(dirname "$0")
cd $BASEDIR/..

# 判斷 php 的路徑
[ -f "/usr/bin/php5" ] && php="/usr/bin/php5" || php="php"

# 取得目前的 branch name
branch=$(git branch | grep \* | cut -d ' ' -f2)

# 取得目前的 commit hash
current_hash=$(git rev-parse --short HEAD)

# 檢查是不是有還沒 push 的 commit
has_not_push_commit=$(git cherry -v origin/$branch)
if [ "$has_not_push_commit" != "" ]; then
    echo 
    echo "[Update Error]: Git Has Not Push Commit, Update Is Abort!!!"
    echo "No Push Git Commits:"
    echo $has_not_push_commit
    exit
fi

# 把目前所有異動加到 git (請使用  git stash apply 取出異動)
git stash save "WIP: `date +"%Y%m%d_%T"`"

# 更新到最新版
git fetch origin  $branch

# 檢查 git fetch 是否成功
if [ "$?" != "0" ]; then
    echo 
    echo "[Git Fetch Error]: Please Use Sudo Or Check Network!"
    exit
fi

# 檢查這次的 git 異動是否有衝突
has_conflict=$(git diff ..origin/$branch | grep '+<<<<<<< HEAD')
if [ "$has_conflict" != "" ]; then
    echo
    echo "[Update Error]: Git Has Conflict File, Update Is Abort!!!"
    exit
fi

# 更新到最新版
git reset --hard origin/$branch

# 取得更新後的 commit hash
update_hash=$(git rev-parse --short HEAD)

# 發送更新記錄(slack + log)
# $php index.php tools/slack_sender onlineNotify $branch $current_hash $update_hash 

