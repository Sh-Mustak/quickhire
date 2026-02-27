# QuickHire Backend API

A RESTful API backend for the QuickHire job board application built with Node.js, Express, and MongoDB.

## Features

- **Complete Job Management**
  - Browse all job listings with filtering and search
  - Get detailed job information
  - Admin capabilities to create and delete jobs

- **Application Management**
  - Submit job applications with validation
  - Track application status
  - Admin capabilities to manage applications

- **Advanced Filtering & Search**
  - Filter jobs by category, location
  - Full-text search across job titles, descriptions, and companies
  - Get applications by job ID

- **Input Validation**
  - Email format validation
  - URL validation for resume links
  - Required field validation
  - Category enum validation

- **Error Handling**
  - Proper HTTP status codes (400, 404, 409, 500)
  - Detailed error messages
  - Validation error reporting

- **CORS Support**
  - Enabled for frontend integration
  - Configurable origin

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Validation:** express-validator
- **CORS:** cors middleware

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sh-Mustak/quickhire.git
   cd quickhire/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```
   MONGO_URI=mongodb://localhost:27017/quickhire
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=*
   ```

4. **Start the server**
   ```bash
   # Production
   npm start

   # Development (with auto-reload)
   npm run dev
   ```

The server will run on `http://localhost:5000`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/quickhire` |
| `PORT` | Port number for the server | `5000` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `CORS_ORIGIN` | Allowed origin for CORS | `*` |

## Database Schema

### Job Model

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  category: String (enum: Technology, Finance, Healthcare, Education, Sales, Marketing, Other) (required),
  company: String (required),
  location: String (required),
  salary: Number (optional),
  createdAt: Date (default: current date)
}
```

### Application Model

```javascript
{
  _id: ObjectId,
  job: ObjectId (reference to Job) (required),
  applicantName: String (required, min 2 chars),
  applicantEmail: String (required, valid email format),
  resumeUrl: String (optional, must be valid URL),
  coverLetter: String (optional),
  createdAt: Date (default: current date)
}
```

## API Endpoints

### Health Check

**Get Server Status**
```
GET /health
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Server is running"
}
```

---

## Jobs API

### Get All Jobs

**Endpoint:**
```
GET /api/jobs
```

**Query Parameters:**
- `category` (optional): Filter by job category
- `location` (optional): Filter by location (case-insensitive)
- `search` (optional): Search in title, description, and company (case-insensitive)

**Example Requests:**
```bash
# Get all jobs
curl http://localhost:5000/api/jobs

# Filter by category
curl http://localhost:5000/api/jobs?category=Technology

# Filter by location
curl http://localhost:5000/api/jobs?location=New York

# Search jobs
curl http://localhost:5000/api/jobs?search=developer

# Combine filters
curl http://localhost:5000/api/jobs?category=Technology&location=New York&search=senior
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Senior Developer",
      "description": "Looking for experienced developer...",
      "category": "Technology",
      "company": "Tech Corp",
      "location": "New York",
      "salary": 120000,
      "createdAt": "2024-02-28T10:30:00.000Z"
    }
  ]
}
```

---

### Get Single Job

**Endpoint:**
```
GET /api/jobs/:id
```

**Example Request:**
```bash
curl http://localhost:5000/api/jobs/507f1f77bcf86cd799439011
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Senior Developer",
    "description": "Looking for experienced developer...",
    "category": "Technology",
    "company": "Tech Corp",
    "location": "New York",
    "salary": 120000,
    "createdAt": "2024-02-28T10:30:00.000Z"
  }
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Job not found"
}
```

---

### Create Job

**Endpoint:**
```
POST /api/jobs
```

**Request Body:**
```json
{
  "title": "Senior Developer",
  "description": "Looking for experienced developer with 5+ years experience",
  "category": "Technology",
  "company": "Tech Corp",
  "location": "New York",
  "salary": 120000
}
```

**Validation Rules:**
- `title` - Required, non-empty string
- `description` - Required, non-empty string
- `category` - Required, must be one of: Technology, Finance, Healthcare, Education, Sales, Marketing, Other
- `company` - Required, non-empty string
- `location` - Required, non-empty string
- `salary` - Optional, numeric value

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Senior Developer",
    "description": "Looking for experienced developer...",
    "category": "Technology",
    "company": "Tech Corp",
    "location": "New York",
    "salary": 120000
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Senior Developer",
    "description": "Looking for experienced developer...",
    "category": "Technology",
    "company": "Tech Corp",
    "location": "New York",
    "salary": 120000,
    "createdAt": "2024-02-28T10:30:00.000Z"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "error": ["Job title is required", "Job category is required"]
}
```

---

### Delete Job

**Endpoint:**
```
DELETE /api/jobs/:id
```

**Example Request:**
```bash
curl -X DELETE http://localhost:5000/api/jobs/507f1f77bcf86cd799439011
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Senior Developer",
    "description": "Looking for experienced developer...",
    "category": "Technology",
    "company": "Tech Corp",
    "location": "New York",
    "salary": 120000,
    "createdAt": "2024-02-28T10:30:00.000Z"
  },
  "message": "Job deleted successfully"
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Job not found"
}
```

---

## Applications API

### Get All Applications

**Endpoint:**
```
GET /api/applications
```

**Query Parameters:**
- `jobId` (optional): Filter applications by job ID

**Example Requests:**
```bash
# Get all applications
curl http://localhost:5000/api/applications

# Get applications for specific job
curl http://localhost:5000/api/applications?jobId=507f1f77bcf86cd799439011
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "507f191e810c19729de860ea",
      "job": {
        "_id": "507f1f77bcf86cd799439011",
        "title": "Senior Developer",
        "company": "Tech Corp",
        "location": "New York"
      },
      "applicantName": "John Doe",
      "applicantEmail": "john@example.com",
      "resumeUrl": "https://example.com/resume.pdf",
      "coverLetter": "I am interested in this position...",
      "createdAt": "2024-02-28T10:30:00.000Z"
    }
  ]
}
```

---

### Get Single Application

**Endpoint:**
```
GET /api/applications/:id
```

**Example Request:**
```bash
curl http://localhost:5000/api/applications/507f191e810c19729de860ea
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f191e810c19729de860ea",
    "job": {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Senior Developer",
      "company": "Tech Corp",
      "location": "New York"
    },
    "applicantName": "John Doe",
    "applicantEmail": "john@example.com",
    "resumeUrl": "https://example.com/resume.pdf",
    "coverLetter": "I am interested in this position...",
    "createdAt": "2024-02-28T10:30:00.000Z"
  }
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Application not found"
}
```

---

### Create Application

**Endpoint:**
```
POST /api/applications
```

**Request Body:**
```json
{
  "job": "507f1f77bcf86cd799439011",
  "applicantName": "John Doe",
  "applicantEmail": "john@example.com",
  "resumeUrl": "https://example.com/resume.pdf",
  "coverLetter": "I am interested in this position..."
}
```

**Validation Rules:**
- `job` - Required, valid MongoDB ObjectId
- `applicantName` - Required, minimum 2 characters
- `applicantEmail` - Required, valid email format
- `resumeUrl` - Optional, must be valid URL if provided
- `coverLetter` - Optional, any text

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "job": "507f1f77bcf86cd799439011",
    "applicantName": "John Doe",
    "applicantEmail": "john@example.com",
    "resumeUrl": "https://example.com/resume.pdf",
    "coverLetter": "I am interested in this position..."
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "507f191e810c19729de860ea",
    "job": {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Senior Developer",
      "company": "Tech Corp",
      "location": "New York"
    },
    "applicantName": "John Doe",
    "applicantEmail": "john@example.com",
    "resumeUrl": "https://example.com/resume.pdf",
    "coverLetter": "I am interested in this position...",
    "createdAt": "2024-02-28T10:30:00.000Z"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "error": [
    "Email is required",
    "Please provide a valid email",
    "Resume URL must be a valid URL"
  ]
}
```

---

### Delete Application

**Endpoint:**
```
DELETE /api/applications/:id
```

**Example Request:**
```bash
curl -X DELETE http://localhost:5000/api/applications/507f191e810c19729de860ea
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f191e810c19729de860ea",
    "job": "507f1f77bcf86cd799439011",
    "applicantName": "John Doe",
    "applicantEmail": "john@example.com",
    "resumeUrl": "https://example.com/resume.pdf",
    "coverLetter": "I am interested in this position...",
    "createdAt": "2024-02-28T10:30:00.000Z"
  },
  "message": "Application deleted successfully"
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Application not found"
}
```

---

## Error Responses

### 400 Bad Request
Invalid input or validation error

```json
{
  "success": false,
  "error": "Error message or array of errors"
}
```

### 404 Not Found
Resource not found

```json
{
  "success": false,
  "error": "Job not found"
}
```

### 409 Conflict
Duplicate field value

```json
{
  "success": false,
  "error": "Duplicate field value entered"
}
```

### 500 Server Error
Internal server error

```json
{
  "success": false,
  "error": "Server Error"
}
```

---

## Project Structure

```
server/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   ├── jobController.js      # Job business logic
│   └── applicationController.js  # Application business logic
├── middleware/
│   └── errorMiddleware.js    # Error handling middleware
├── models/
│   ├── Job.js                # Job schema
│   └── Application.js        # Application schema
├── routes/
│   ├── jobRoutes.js          # Job endpoints
│   └── applicationRoutes.js  # Application endpoints
├── server.js                 # Express app configuration
├── package.json              # Dependencies
├── .env.example              # Environment variables template
└── README.md                 # This file
```

---

## Testing with Postman/cURL

### Test Job Creation
```bash
curl -X POST http://localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Full Stack Developer",
    "description": "Build modern web applications",
    "category": "Technology",
    "company": "StartUp Inc",
    "location": "San Francisco",
    "salary": 150000
  }'
```

### Test Job Search
```bash
curl "http://localhost:5000/api/jobs?search=developer&category=Technology"
```

### Test Application Submission
```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "job": "INSERT_JOB_ID_HERE",
    "applicantName": "Jane Smith",
    "applicantEmail": "jane@example.com",
    "resumeUrl": "https://example.com/jane-resume.pdf",
    "coverLetter": "Excited to apply for this role!"
  }'
```

---

## Common Issues & Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running locally or your cloud MongoDB URI is correct
- Check `.env` file has correct `MONGO_URI`

### CORS Errors
- Update `CORS_ORIGIN` in `.env` to your frontend URL
- Default is `*` (allow all origins)

### Validation Errors
- Check all required fields are provided
- Ensure email format is valid (user@example.com)
- Resume URL must start with http:// or https://

### Port Already in Use
- Change `PORT` in `.env` to another port
- Or kill the process using the port

---

## Future Enhancements

- User authentication and authorization
- Pagination for job listings
- Job application status tracking
- Email notifications
- Admin dashboard
- Rate limiting

---

## License

This project is part of the QuickHire assignment.

---

## Support

For issues or questions, please open an issue on GitHub or contact the development team.
