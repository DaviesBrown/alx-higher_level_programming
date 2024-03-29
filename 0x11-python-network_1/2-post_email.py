#!/usr/bin/python3
"""
uses sys and urllib to get email data
"""
import urllib.parse
import urllib.request
import sys

if __name__ == '__main__':
    if len(sys.argv) > 2:
        url = sys.argv[1]
        email = sys.argv[2]

        data = urllib.parse.urlencode({'email': email}).encode('utf-8')
        req = urllib.request.Request(url, data=data, method='POST')

        with urllib.request.urlopen(req) as response:
            body = response.read().decode('utf-8')

        print(body)
