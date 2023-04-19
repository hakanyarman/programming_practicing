import pymysql 
pymysql.install_as_MySQLdb()

from flask import  Flask,request,render_template
# import mysql.connector

from flask_mysqldb import MySQL

app = Flask(__name__) 

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'first_database'


mysql = MySQL(app)

@app.route('/')
def index():
      cur = mysql.connection.cursor() 
      cur.execute("SELECT * FROM authentication")
      fetchdata = cur.fetchall()
      cur.close()
      return render_template('home.html',data = fetchdata)



@app.route('/login', methods=['POST'])
def login():
    # Get the user's input from the form
    username = request.form['username']
    password = request.form['password']
    
    # Query the database to check if the username and password match
    cur = mysql.connection.cursor() 
    cur.execute("SELECT * FROM authentication WHERE username=%s AND password=%s", (username, password))
    user = cur.fetchone()
    cur.close()
    
    if user is None:
        # If the user doesn't exist or the password is incorrect, show an error message
        return render_template('login.html', message='Username or password is incorrect.')
    else:
        # If the user exists and the password is correct, show a success message
        return render_template('login.html', message='You are logged in!')




if __name__ == "__main__":
    app.run(debug=True)