# 3D Printing Materials Backend

This project is a Node.js backend that utilizes MongoDB to manage information about various 3D printing materials. The functionality includes storage and retrieval of images associated with each material.

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
POST /api/users/register

**Request Body:**
```
{
    "username": "yourusername",
    "password": "yourpassword"
}
```
**Response:**
```
{
    "message": "User registered successfully"
}
```
### Login User

**Endpoint:**
POST /api/users/login

**Request Body:**
```
{
    "username": "yourusername",
    "password": "yourpassword"
}
```
**Response:**
```
{
    "token": "your_jwt_token"
}
```
### Get All Materials

**Endpoint:**
GET /api/materials

**Response:**
```
[
    {
        "_id": "60d0fe4f5311236168a109ca",
        "name": "PLA",
        "technology": "FDM",
        "colors": ["Red", "Blue", "Green"],
        "pricePerGram": 0.03
    },
    ...
]
```

### Get Material by ID

**Endpoint:**
GET /api/materials/:id

**Response:**
```
{
    "_id": "60d0fe4f5311236168a109ca",
    "name": "PLA",
    "technology": "FDM",
    "colors": ["Red", "Blue", "Green"],
    "pricePerGram": 0.03,
    "imageUrl": "uploads/image-1624723725069.jpg"
}
```

### Create Material

**Endpoint:**
POST /api/materials

**Headers:**
Authorization: Bearer your_jwt_token

**Request Body:**
Form-data with fields:
- name: Name of the material (String)
- technology: Printing technology (String)
- colors: Available colors (Array of Strings)
- pricePerGram: Price per gram (Number)
- imageUrl: URL of the image (String)

**Response:**
```
{
    "message": "Material created successfully",
    "material": {
        "_id": "60d0fe4f5311236168a109ca",
        "name": "PLA",
        "technology": "FDM",
        "colors": ["Red", "Blue", "Green"],
        "pricePerGram": 0.03,
        "imageUrl": "uploads/image-1624723725069.jpg"
    }
}
```

### Update Material

**Endpoint:**
PUT /api/materials/:id

**Headers:**
Authorization: Bearer your_jwt_token

**Request Body:**
Form-data with fields:
- name: Name of the material (String)
- technology: Printing technology (String)
- colors: Available colors (Array of Strings)
- pricePerGram: Price per gram (Number)
- imageUrl: URL of the image (String, optional)

**Response:**
```
{
    "message": "Material updated successfully",
    "material": {
        "_id": "60d0fe4f5311236168a109ca",
        "name": "PLA",
        "technology": "FDM",
        "colors": ["Red", "Blue", "Green"],
        "pricePerGram": 0.03,
        "imageUrl": "uploads/image-1624723725069.jpg"
    }
}
```

### Delete Material

**Endpoint:**
DELETE /api/materials/:id

**Headers:**
Authorization: Bearer your_jwt_token

**Response:**
```
{
    "message": "Material deleted successfully"
}
```
## License

This project is licensed under the MIT License.

