from flask import Flask

app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"



# username'den sonra girilen herhangi bir değerin name değişkenine atanmasını sağlar.
@app.route("/username/<name>/<int:age>") # kullanıcının farklı değerler girdiğinde aynı route a erişmesini sağlar.
def greet(name , age):
    return f"Hello,{name},you are {age} years old "
# burada f harfi string formatlama metodu olan f-string için kullanılır. böylece string içerisinde
# bir değişkeni süslü parantez içine alıp gösterebiliriz
# ör: 
# name = "Hakan"
# age = 21

# print(f"My name is {name} and I am {age} years old.") => My name is Hakan and I am 21 years old.

if __name__ == '__main__':
    app.run(debug=True)

