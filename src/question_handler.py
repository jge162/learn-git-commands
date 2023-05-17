"""
This module defines a Flask web application that provides an API for 
answering questions. It reads data from a text file and returns the 
definition and practical use of a term, given the term as a question.
"""

from flask import Flask, request, jsonify

app = Flask(__name__)

def read_data() -> dict:
    """
    Read data from a file and return a dictionary containing the parsed data.

    Returns:
        dict: A dictionary containing the parsed data.
    """
    data = {}
    with open('data.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for i in range(0, len(lines), 3):
            term = lines[i].strip()
            definition = lines[i + 1].strip()
            practical_use = lines[i + 2].strip()
            data[term] = {'definition': definition, 'practical_use': practical_use}
    return data

@app.route('/api/question', methods=['POST'])
def answer_question():
    """
    Accepts a POST request with a 'question' in the JSON body and responds with 
    the definition and practical use of the question term. 
    Returns: dict: A dictionary containing the definition and practical use of 
    the question term. If the term is not found, it returns 'Not Found'.
    """
    question = request.json['question']
    data = read_data()
    response = data.get(question, {'definition': 'Not Found', 'practical_use': 'Not Found'})
    return jsonify(response)

if __name__ == '__main__':
    app.run()
