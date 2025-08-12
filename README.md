# AI-Powered E-Commerce site

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

  

2. **Install dependencies**
   
    npm install

4. **Configure environment variables**

   MONGO_URI=<your-mongodb-connection-string>
   
   OPENAI_API_KEY=<your-openai-api-key>
   
6. **Start the server**
   
   npm start

7. **Tools & Libraries Used**
   
  Node.js & Express - Backend server framework
  
  MongoDB - Database to store products and user data
  
  Cloudinary - Image storage and management
  
  OpenAI API - AI-powered language features
  

8. **Notable Assumptions**

   MongoDB is already set up and accessible.
   OpenAI Key is provided

Additional libraries for routing, controllers, and middleware as needed

