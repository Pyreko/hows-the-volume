#!/bin/bash

set -eu

find /home/pyreko/htv-server/ -mtime +7 -name "volume.log*" -print -exec /bin/rm {} \;