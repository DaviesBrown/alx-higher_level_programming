#!/usr/bin/python3
import MySQLdb
import sys

if __name__ =='__main__':
    db = MySQLdb.connect(
        user=sys.argv[1],
        host="localhost",
        port=3306,
        passwd="brown_ian77",
        db="hbtn_0e_4_usa"
    )
    cur = db.cursor()
    state_name = sys.argv[2]
    query = "SELECT cities.name FROM cities LEFT JOIN states ON cities.state_id = states.id WHERE states.name=%s ORDER BY cities.id ASC"
    cur.execute(query, (state_name,))
    query_rows = cur.fetchall()
    list = [item for city in query_rows for item in city]
    print(", ".join(list))
            

    cur.close()
    db.close()