# Simple Dashboard App

**Overview:**

This is a simple web app that displays transaction data and allows to search by id, sender name, receiver name and cause with api call to an external server.

**Features:**

* View transaction details in a paginated table.
* Search transactions by ID, sender name, receiver name, or cause.
* Developed with Vite and React, for performance and ease of use.

**Installation:**
To install the app, you need to have Node.js and npm installed on your machine. Then, follow these steps:
1. Clone this repository.
2. Run `npm install` in the project directory (`cd dashboard`) to install required packages.
3. Create a `.env` file in the project root (`cd dashboard`) and add your API credentials (replace placeholders with your actual values):
VITE_API_KEY=your_api_key 
VITE_API_SECRET=your_api_secret
4. Run `npm run dev` to launch the development server.
5. Open http://localhost:5173 in your web browser to start using the app.

**Usage:**

* View transaction data in the table and use pagination buttons to navigate through large datasets.
* Enter keywords in the search bar to search transactions based on ID, sender name, receiver name, or cause.

**Assumptions:**

* It is assumed the user of this dashboard is "Anteneh Gebeyaw" in order to show incoming and outgoing transations in each table row.


