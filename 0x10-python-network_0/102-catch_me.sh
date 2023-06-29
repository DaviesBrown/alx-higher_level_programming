#!/bin/bash
# This script makes a request to 0.0.0.0:5000/catch_me using curl, causing the server to respond with "You got me!" in the body of the response.
curl -s -L -X PUT -d "user_id=98" -H "Origin: HolbertonSchool" 0.0.0.0:5000/catch_me --output /dev/null
