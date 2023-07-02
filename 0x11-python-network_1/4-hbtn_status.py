#!/usr/bin/python3
"""
checks status of hbtn
"""
import requests
if __name__ == '__main__':
    r = requests.get('https://alx-intranet.hbtn.io/status')
    if r.ok:
        data = r.text
        print("Body response:")
        print("\t- type: {}".format(type(data)))
        print("\t- content: {}".format(data))
