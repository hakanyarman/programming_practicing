
from flask import Flask,render_template
from flask import json

from random import randint
from flask import send_from_directory
from flask import Flask, request
import json
import numpy as np
import random



app = Flask(__name__)
#Python'da bir programı yürüttüğünüzde, Python yürütülebilir betikleri modüller olarak adlandırır. Modüller bir programda kullanılabilecek kod bloklarını içerirler. Modüllerin kendi ad alanları vardır ve modül içinde tanımlanan fonksiyonlar, sınıflar ve değişkenler bu ad alanında bulunur.

# Her modülün bir ismi vardır ve bu isim __name__ özelliğiyle temsil edilir. Eğer bir modül başka bir modül tarafından içe aktarılırsa, içe aktarılan modülün __name__ özelliği, içe aktarılan modülün adını alır. Ancak, bir modül doğrudan çalıştırıldığında, __name__ özelliği "__main__" olarak ayarlanır.

#Bu nedenle, __name__ özelliği, bir modülün nasıl çalıştırıldığını belirlemek için kullanılır. Bir modülün doğrudan çalıştırılması durumunda, genellikle bir if __name__ == "__main__": koşulu kullanarak, modülün ana kod bloğunu yürütürüz. Ancak, bir modül başka bir modül tarafından içe aktarılırsa, bu koşul sağlanmaz ve ana kod bloğu çalıştırılmaz.


# print(app)  =>  # <Flask 'main'>

# print(__name__) => # __main__ => o anda çalıştırılan dosyayı belirtir

# print(random.random())  => 0.020379877529716373
# print(random.__name__) => random => modul ün ismini yazdı 
#-----------------------------------------------------

# decore edilmek istenen function un üstüne @decorator_func_name yazarak kullanılır. kod tekrarını önler.
# burada app.route decorator function u hello_world functionu nu sarar ve parametre olarak hello_world func alır.
# içine aldığı fonksiyona bazı fonksiyonellikler de ekler
@app.route('/') # decorator function.
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

@app.route('/getData')
def getData():
    return json.dumps("abcde")


@app.route('/notes')
def notes():
    return render_template("notes.html")
    

if __name__ == '__main__':
 
    
    app.run(debug=True)