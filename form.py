from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    message = "Nasılsınız? "
    if request.method == 'POST':
        fname = request.form['fname']
        lname = request.form['lname']
        return f"Merhaba, {fname} {lname} ! " + message

    return render_template("form.html",message=message)
  

if __name__ == '__main__':
    app.run(debug=True)