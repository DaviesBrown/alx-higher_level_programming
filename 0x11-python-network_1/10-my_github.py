#!/usr/bin/python3
"""
my github
"""
import requests
import sys
from requests.auth import HTTPBasicAuth

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    auth = HTTPBasicAuth(username, password)
    url = 'https://api.github.com/user'
    req = requests.get(url, auth=auth)
    res = req.json()
    print(res.get('id'))
