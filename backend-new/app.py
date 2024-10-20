from flask import Flask, jsonify
from pymongo import MongoClient
import os
from flask_cors import CORS

app = Flask(__name__)


@app.route("/api/message", methods=["GET"])
def get_message():
    # message = messages_collection.find_one({}, {"_id": 0, "text": 1})
    return jsonify("Hello from Backend (5001)")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
