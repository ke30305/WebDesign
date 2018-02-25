#! /bin/sh

BASEDIR=$(dirname "$0")
cd $BASEDIR

hook_file="/tmp/update.hook"

if [ -f $hook_file ]; then
    ./update.sh 
    rm -rf $hook_file
else
    echo "no update."
fi

