#!/usr/bin/python3
"""
check error code
"""
import sys
import urllib.request
if __name__ == '__main__':
    if len(sys.argv) > 1:
        url = sys.argv[1]
        try:
            with urllib.request.urlopen(url) as r:
                body = r.read().decode('utf-8')
            print(body)
        except urllib.error.HTTPError as e:
            print(f"Error code: {e.code}")
