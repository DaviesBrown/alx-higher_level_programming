#!/bin/bash
# post json 
curl -s -X POST -H "Content-Type: application/json" -d @"$1" "$2"