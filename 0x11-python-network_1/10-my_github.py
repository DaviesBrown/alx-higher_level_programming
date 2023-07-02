#!/usr/bin/python3
"""
my github
"""
import requests
import sys

if __name__ == '__main__':
    if len(sys.argv) > 2:
        username = sys.argv[1]
        password = sys.argv[2]
        url = f'https://api.github.com/users/{username}'
        req = requests.get(url)
        res = req.json()
        print(res['id'])
