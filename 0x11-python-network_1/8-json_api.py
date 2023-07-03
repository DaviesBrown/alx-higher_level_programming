#!/usr/bin/python3
"""
search api
"""
import sys
import requests

if __name__ == '__main__':
    letter = ''
    if len(sys.argv) > 1:
        letter = sys.argv[1]
    url = f'http://0.0.0.0:5000/search_user'
    data = {'q': letter}
    req = requests.post(url, data=data)
    try:
        res = req.json()
        if req.headers.get('content-type') == 'application/json' and res:
            print(f'[{res.id}] {res.name}')
        elif req.headers.get('content-type') == 'application/json' and not res:
            print('No result')
    except ValueError:
        print('Not a valid JSON')
