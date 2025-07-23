from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuration for the PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://ericm:PLAyer64002!!@localhost/students'

# Initialize the SQLAlchemy extension
db = SQLAlchemy(app)

 # class Student(db.Model):
 #     id = db.Column(db.Integer, primary_key=True)
 #     first_name = db.Column(db.String(50))
 #     last_name = db.Column(db.String(50))
 #     age = db.Column(db.Integer)
 #     grade = db.Column(db.String(1))
@app.route('/students/')
def get_students():
 return "hllo"
if __name__ == '__main__':
    app.run(debug=True)