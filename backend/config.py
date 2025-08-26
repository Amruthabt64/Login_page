import mysql.connector
def get_db_connector():
    return mysql.connector.connect(
        host="real-host",
        user="root",
        password="password",
        database="login_app"
    )
