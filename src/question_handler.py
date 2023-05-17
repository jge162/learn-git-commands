from fastapi import FastAPI
from typing import Dict
from pydantic import BaseModel

app = FastAPI()

class Question(BaseModel):
    question: str

def read_data() -> Dict[str, Dict[str, str]]:
    """
    Read data from a file and return a dictionary containing the parsed data.

    Returns:
        Dict[str, Dict[str, str]]: A dictionary containing the parsed data.
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

@app.post('/api/question')
def answer_question(question: Question):
    data = read_data()
    response = data.get(question.question, {'definition': 'Not Found', 'practical_use': 'Not Found'})
    return response
