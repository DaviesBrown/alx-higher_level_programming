#!/usr/bin/python3
"""
my github
"""
import requests
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    header = {
    'Accept': 'application/vnd.github+json',
    'Authorization': f'Bearer {password}',
    'X-GitHub-Api-Version': 2022-11-28,
    }
    url = f'https://api.github.com/users/{username}'
    req = requests.get(url, headers=header)
    res = req.json()
    print(res['id'])
