#!/usr/bin/python3
"""
uses sys and urllib to get x-header-id
"""
import sys
import urllib.request

if __name__ == '__main__':
    if len(sys.argv) > 1:
        url = sys.argv[1]
        with urllib.request.urlopen(url) as response:
            body = response.getheader('X-Request-Id')
        print(body)
