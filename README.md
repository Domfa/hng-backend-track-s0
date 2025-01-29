
# HNG12 Backend Task: Public API to Retrieve Basic Information

This is a simple public API that returns basic information including the registered email, the current datetime in ISO 8601 format, and the GitHub URL of the project repository.

## Technology Stack

- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Deployment**: Hosted on a publicly accessible endpoint
- **CORS Handling**: Cross-Origin Resource Sharing (CORS) is enabled

## API Specification

### Endpoint

- `GET /api/v1`

### Response Format (200 OK)

```json
{
  "email": "jjoshuadomfa@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Domfa/hng-backend-track-s0.git"
}
```

### Example Usage

- To retrieve the information, send a GET request to the endpoint.
  Example response:

```json
{
  "email": "jjoshuadomfa@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Domfa/hng-backend-track-s0.git"
}
```

## Running the Project Locally

### Prerequisites
- Node.js installed on your local machine

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/Domfa/hng-backend-track-s0.git
   ```

2. Navigate to the project directory
   ```bash
   cd hng-backend-track-s0
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Run the project
   ```bash
   npm start
   ```

5. The API should be running on `http://localhost:5000`

## Deployment

The API is deployed on Render, and you can access it at https://hng-backend-track-s0.onrender.com/api/v1.

## References

- [Node.js Developers](https://hng.tech/hire/nodejs-developers)
