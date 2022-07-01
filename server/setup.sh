#!/bin/bash

touch counts.sqlite
sqlite3 counts.sqlite < db_init.sql
