#!/bin/bash

pkill -2 hows-the-volume
mkdir -p ~/htv-server
cp ./target/release/hows-the-volume-server ~/htv-server/hows-the-volume-server
nohup ~/htv-server/hows-the-volume-server &