from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

designers = [
    {
        "name": "Epic Designs",
        "stars": 3.5,
        "projects": 57,
        "years": 8,
        "price": "$$",
        "contacts": ["+91 - 984532853", "+91 - 984532854"]
    },
    {
        "name": "Studio-D3",
        "stars": 4.5,
        "projects": 43,
        "years": 6,
        "price": "$$$",
        "contacts": ["+91 - 984532853", "+91 - 984532854"]
    }
]

@app.route("/api/listings", methods=["GET"])
def get_listings():
    return jsonify(designers)

if __name__ == "__main__":
    app.run(debug=True)
