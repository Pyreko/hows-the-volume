#!/bin/bash

pkill -2 hows-the-volume
cp ./target/release/hows-the-volume-server ~/htv-server/hows-the-volume-server
cd ~/htv-server
nohup ./hows-the-volume-server &