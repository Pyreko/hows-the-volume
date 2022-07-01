#!/bin/bash

pkill hows-the-volume
nohup ./target/release/hows-the-volume-server > /dev/null 2>&1 &