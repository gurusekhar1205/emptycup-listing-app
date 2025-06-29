# emptycup_listing_app

This project is a full stack web application that demonstrates both frontend and backend development skills using:

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python with Flask (REST API)

It simulates a designer listing platform, similar to a Figma design, with interactive features like shortlisting and filtering designers.

## Live Demo

[View the Live Site](https://gurusekhar1205.github.io/emptycup-listing-app/)


## Prerequisites

- [Python 3.8+](https://www.python.org/downloads/) (Must be added to PATH)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- Python Extension for VS Code

## Organize Project Folder

 emptycup-listing-app/
 ├── app.py             ← Your Flask backend
 ├── index.html         ← Your frontend
 ├── styles.css
 ├── script.js
 ├──logo-small.png           ← For images, icons, etc.



## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/gurusekhar1205/emptycup-listing-app.git
   cd emptycup-listing-app
   
2. **Install required Python packages**
 - `app.py` -uses Flask , install it:
   ```bash
   pip install flask
   
3. **Run the Backend Server**
- In the terminal,run:
   ```bash
   python app.py
   
4. **Preview the Application**
- The backend should serve your HTML, CSS, and JS files, or you can open the index.html if 
  it’s stand-alone.
   ```nginx
   Running on http://127.0.0.1:5000/
   ```
5. **API Endpoint**
- `GET /api/listings`-Returns JSON data for all designer listings.
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
  ]


6. **Finally Running the Frontend**
- Simply open `index.html` in a browser.
- The page loads the UI as per the Figma design.
- All core functionality (shortlist, filter) is handled via `script.js`.



