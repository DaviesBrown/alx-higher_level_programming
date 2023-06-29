#!/bin/bash
# This script takes a URL as an argument, sends a GET request to the URL using curl, includes a custom header X-School-User-Id with the value 98, and displays the body of the response.
curl -s -H "X-School-User-Id: 98" "$1"
