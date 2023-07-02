#!/usr/bin/python3
"""
search api
"""
import requests
import sys

if __name__ == '__main__':
    letter = sys.argv[1] if len(sys.argv) > 1 else ''
    url = 'http://0.0.0.0:5000/search_user'
    response = requests.post(url, data={'q': letter})
    response_json = response.json()
    if response.status_code == 200:
        if isinstance(response_json, dict) and \
                'id' in response_json and 'name' in response_json:
            print(f"[{response_json['id']}] {response_json['name']}")
        elif isinstance(response_json, list) and len(response_json) > 0:
            for user in response_json:
                print(f"[{user['id']}] {user['name']}")
        else:
            print("No result")
    elif response.status_code == 404:
        print("No result")
    else:
        print(f"Error code: {response.status_code}")
