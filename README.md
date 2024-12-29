# React Quote App

This is a simple React application that displays quotes fetched from a mock backend using **json-server**. The app allows users to view quotes by category and share them via WhatsApp. It also includes a 404 page for unknown routes.

## Overview

The app consists of the following components:

- **Homepage**: Displays a list of quote categories.
- **Category Page**: Displays a list of quotes filtered by the selected category.
- **Share Button**: Each quote has a WhatsApp share button to share the quote with others.
- **404 Page**: Displays a 404 error message when a user navigates to an invalid route.

The app uses **React** for the frontend and **json-server** to serve mock data (quotes and categories) from a local JSON file.

## Installation

Follow the steps below to set up and run the project.

### Prerequisites

Before you start, make sure you have the following installed:
- **Node.js** (LTS version recommended) – [Download Node.js](https://nodejs.org/)
- **npm** – comes with Node.js, no need to install separately

### Step 1: Clone the repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### Step 2: Install dependencies
To install the dependencies for the frontend (React app), run the following command inside the project directory:

```bash
npm install
```

### Step 3: Set up json-server
#### 1. Install json-server globally:

```bash
npm install -g json-server
```

#### 2. Create or use an existing db.json file: This file contains the mock data for quotes and categories. Here's a sample structure for json file:

```json
{
  "categories": [
    "inspirational",
    "life",
    "love",
    "success"
  ],
  "quotes": [
    {
      "id": 1,
      "content": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "category": "inspirational"
    },
    {
      "id": 2,
      "content": "Success is not the key to happiness. Happiness is the key to success.",
      "author": "Albert Schweitzer",
      "category": "success"
    },
    {
      "id": 3,
      "content": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon",
      "category": "life"
    },
    {
      "id": 4,
      "content": "Love yourself first and everything else falls into line.",
      "author": "Lucille Ball",
      "category": "love"
    }
  ]
}

```
#### 4. Run json-server:

Before starting the React frontend, you need to start the json-server to serve the mock data. Run the following command in the project directory:

```bash
json-server --watch db.json --port 5000
```

This will start the json-server on http://localhost:5000. You can view the mock API endpoints:

- Categories: http://localhost:5000/categories
- Quotes: http://localhost:5000/quotes
- Quotes by category: http://localhost:5000/quotes?category=category-name

### Step 4: Start the React application
Once json-server is running, open a new terminal window and start the React app:

```bash
npm run dev
```


"# QuotesApp" 
