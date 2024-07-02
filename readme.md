# 3D Printing Materials Backend

This project is a Node.js backend that utilizes MongoDB to manage information about various 3D printing materials. The functionality includes storage and retrieval of images associated with each material.

## Table of Contents

- [Setup](#setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Get All Materials](#get-all-materials)
  - [Get Material by ID](#get-material-by-id)
  - [Create Material](#create-material)
  - [Update Material](#update-material)
  - [Delete Material](#delete-material)

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    cd yourrepository
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Create an `uploads` folder in the root directory to store uploaded images.

## Running the Server

Start the server with the following command:
```bash
node app.js
```

## API Endpoints

### Register User

**Endpoint:**
```bash
POST /api/users/register



