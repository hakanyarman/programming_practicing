import pymysql 
pymysql.install_as_MySQLdb()

from flask import  Flask,request,render_template,session,redirect,url_for
# import mysql.connector

from flask_mysqldb import MySQL

app = Flask(__name__) 
app.secret_key = "super secret key "

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'first_database'


mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('indexsql.html')

@app.route('/home')
def home():
     return render_template('home.html',username= session['username'])

@app.route('/login', methods=['GET','POST'])
def login():
     msg=''
     if request.method == 'POST':
          username = request.form['username']
          password = request.form['password']
          cur = mysql.connection.cursor() 
          cur.execute("SELECT * FROM authentication WHERE username=%s AND password=%s", (username, password))
          record = cur.fetchone()
          if record:
               session['loggedin'] = True
               session['username'] = record[1]
               return redirect(url_for('home'))
          else: 
               msg= 'incorrect username or password. try again'
     return render_template('indexsql.html',msg = msg)                   


@app.route('/logout')
def logout():
     session.pop('loggedin',None)
     session.pop('username',None)
     return redirect(url_for('login'))        
     
     


# @app.route('/login', methods= ['POST'])
# def login():
#     # Get the user's input from the form
#     username = request.form['username']
#     password = request.form['password']
    
#     # Query the database to check if the username and password match
#     cur = mysql.connection.cursor() 
#     cur.execute("SELECT * FROM authentication WHERE username=%s AND password=%s", (username, password))
#     user = cur.fetchone()
#     cur.close()
    
#     if user is None:
#         # If the user doesn't exist or the password is incorrect, show an error message
#         return render_template('login.html', message='Username or password is incorrect.')
#     else:
#         # If the user exists and the password is correct, show a success message
#         return render_template('login.html', message='You are logged in!')




if __name__ == "__main__":
    app.run(debug=True)