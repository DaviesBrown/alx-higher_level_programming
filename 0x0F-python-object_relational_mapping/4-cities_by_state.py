#!/usr/bin/python3
"""Script that lists all states from the database hbtn_0e_0_usa"""

import sys
import MySQLdb


if __name__ == "__main__":
    # Get command line arguments
    mysql_username = sys.argv[1]
    """ mysql_password = sys.argv[2]
    db_name = sys.argv[3]
    state_name = sys.argv[4] """

    # Connect to MySQL database
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=mysql_username,
        passwd="brown_ian77",
        db="hbtn_0e_4_usa",
    )

    # Create a cursor object
    cur = db.cursor()

    # Execute a parameterized query
    query = "SELECT cities.id, cities.name, states.name FROM cities LEFT JOIN states ON cities.state_id = states.id  ORDER BY cities.id ASC"
    cur.execute(query)

    # Fetch all the rows and display them
    rows = cur.fetchall()
    for row in rows:
        print(row)

    # Close cursor and database
    cur.close()
    db.close()
