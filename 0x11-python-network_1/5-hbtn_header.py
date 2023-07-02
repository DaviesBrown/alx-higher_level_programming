#!/usr/bin/python3
"""
checks response header value
"""
import requests
import sys

if __name__ == '__main__':
    if len(sys.argv) > 1:
        url = sys.argv[1]
        req = requests.get(url)
        res = req.headers.get('X-Request-Id')
        print(res)
