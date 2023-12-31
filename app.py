from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/main')
def get_started():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)