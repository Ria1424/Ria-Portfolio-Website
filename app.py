from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Basic routing for all portfolio sections
@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/experience')
def experience():
    return render_template('experience.html', active_page='experience')

@app.route('/projects')
def projects():
    return render_template('projects.html', active_page='projects')

@app.route('/skills')
def skills():
    return render_template('skills.html', active_page='skills')

@app.route('/publications')
def publications():
    return render_template('publications.html', active_page='publications')

@app.route('/resume')
def resume():
    return render_template('resume.html', active_page='resume')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
