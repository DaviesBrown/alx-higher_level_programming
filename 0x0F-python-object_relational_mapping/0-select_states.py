#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == '__main__':
    conn = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1], passwd="brown_ian77", db="hbtn_0e_0_usa", charset="utf8")
    cur = conn.cursor()
    cur.execute('SELECT * FROM states ORDER BY id ASC')
    query_row = cur.fetchall()
    for row in query_row:
        print(row)
    cur.close()
    conn.close()