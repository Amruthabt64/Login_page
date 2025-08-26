from config import get_db_connector

class User:
    @staticmethod
    def authenticate(username, password):
        conn = get_db_connector()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM user WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()
        conn.close()
        return user
