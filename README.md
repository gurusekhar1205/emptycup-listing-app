# emptycup-listing-app

This project is a full stack web application that demonstrates both frontend and backend development skills using:

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python with Flask (REST API)

It simulates a designer listing platform, similar to a Figma design, with interactive features like shortlisting and filtering designers.


## Prerequisites

- [Python 3.8+](https://www.python.org/downloads/) (Must be added to PATH)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- Python Extension for VS Code

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/gurusekhar1205/emptycup-listing-app.git
   cd emptycup-listing-app
   
2. **Install required Python packages**
`app.py` -uses Flask , install it:
   ```bash
   pip install flask
   
3. **Run the Backend Server**
-In the terminal,run:
   ```bash
   python app.py
   
4. **Preview the Application**
-The backend should serve your HTML, CSS, and JS files, or you can open the index.html if 
     it’s stand-alone.
   ```nginx
   Running on http://127.0.0.1:5000/
   ```
5. **API Endpoint**
`GET /api/listings`-Returns JSON data for all designer listings.
  **Example output**
  ```json 
  [
  {
    "name": "Epic Designs",
    "stars": 3.5,
    "projects": 57,
    "years": 8,
    "price": "$$",
    "contacts": ["+91 - 984532853", "+91 - 984532854"]
  },
  ...
]
 ```

6. **Finally Running the Frontend**
-Simply open index.html in a browser.
-The page loads the UI as per the Figma design.
-All core functionality (shortlist, filter) is handled via script.js.



