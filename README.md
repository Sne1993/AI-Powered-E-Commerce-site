# AI-Powered E-Commerce Product API

## Overview
This is a Node.js and Express-based backend API for managing e-commerce products, enhanced with AI-powered natural language search capabilities using OpenAI GPT-4o-mini.  
The API supports product CRUD, image uploads via Cloudinary, product reviews, and an advanced AI search that understands complex user queries and filters products accordingly.

---

## Features

- **CRUD Operations** for products (Create, Read, Update, Delete) with admin-level access  
- **Image upload and management** using Cloudinary 
- **Product reviews and ratings**, including creation, update, and deletion of reviews  
- **AI-driven product search** which interprets natural language queries (e.g., "men's clothing under $50 with good reviews")  
- **Fallback MongoDB dynamic query** if AI parsing fails, ensuring reliable search results  
- Pagination, filtering, and search utilities for efficient data retrieval  

---

## How to Run

### Prerequisites

- Node.js 
- MongoDB database
- Cloudinary account  
- OpenAI API key  

### Steps

1. **Clone the repository**

  bash
  git clone <your-repo-url>
  cd <your-repo-folder>

2. **Install dependencies**
  npm install

3. **Configure environment variables**
   MONGO_URI=<your-mongodb-connection-string>
   OPENAI_API_KEY=<your-openai-api-key>
   
4. **Start the server**
   npm start

