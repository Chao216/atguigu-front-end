#!/bin/bash

time=`date +%y-%m-%d@%H:%M:%S`

git add *
git commit -m "pushed on $time"
git push origin dev
