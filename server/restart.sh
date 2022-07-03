#!/bin/bash

set -eu

pkill -2 hows-the-volume
while pgrep -u $UID -x hows-the-volume >/dev/null; do sleep 1; done
cp ./target/release/hows-the-volume-server ~/htv-server/hows-the-volume-server
cp -r ./assets ~/htv-server/
cd ~/htv-server
nohup ./hows-the-volume-server > /dev/null 2>&1 &