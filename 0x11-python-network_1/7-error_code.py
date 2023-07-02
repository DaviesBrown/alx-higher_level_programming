#!/usr/bin/python3
"""
error code
"""
import sys
import requests

if __name__ == '__main__':
    if len(sys.argv) > 1:
        url = sys.argv[1]
        r = requests.get(url)
        if r.status_code <= 400:
            print(r.text)
        else:
            print(f'Error code: {r.status_code}')