#!/bin/bash

set -eu

find ~/yc-server/ -mtime +7 -name "volume.log*" -print -exec /bin/rm {} \;