
from flask import Flask,render_template
from flask import json

from random import randint
from flask import send_from_directory
from flask import Flask, request
import json
import numpy as np




app = Flask(__name__)
@app.route('/')
def hello_world():
    return """<h1>
        console
        <script>
            console.log(2+5)  
        </script>
     </h1>"""

@app.route('/homepage')
def homepage():
    return render_template("homepage.html")



@app.route('/profile')
def profile():
    return render_template("profile.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")
 

@app.route('/abc')
def other():
    return render_template("index.html",data=randint(5,500))

@app.route('/topbar')
def topbar():
    return render_template("topbar.html")

"""
@app.route('/styles.css')
def other2():
    return render_template("styles.css",data=randint(5,500))
"""


@app.route('/form')
def form():
    return render_template("form.html")

@app.route('/form_submit',methods=['GET', 'POST'])
def form_submit():
    data = request.form['fname']
    print (data)
    return data

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory('static', path)

@app.route('/grid')
def grid():
    Pokemons =["Pikachu", "Charizard", "Squirtle", "Jigglypuff", 
           "Bulbasaur", "Gengar", "Charmander", "Mew", "Lugia", "Gyarados"]
    # return render_template("grid.html",data2=randint(0,100))
    return render_template("grid.html", len = len(Pokemons), Pokemons = Pokemons)

@app.route('/grid-sidebar')
def gridSideBar():
    return render_template("grid-sidebar.html")

@app.route('/table')
def table():
    randnums = np.random.randint(1,101,14)
    arr_as_list = randnums.tolist()
    return render_template("table.html",anArray = json.dumps(arr_as_list))


    

if __name__ == '__main__':
 
    
    app.run(debug=True)