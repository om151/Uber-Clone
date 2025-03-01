# API Documentation

## Endpoints

### POST /users/register

#### Description

Registers a new user.

#### Request Body

- `fullname` (object)
  - `firstname` (string): Required, minimum length of 3 characters.
  - `lastname` (string): Optional, minimum length of 3 characters.
- `email` (string): Required, must be a valid email.
- `password` (string): Required, minimum length of 6 characters.

#### Responses

- `201 Created`

  - Body: JSON object containing the authentication token and user details.

  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- `400 Bad Request`
  - Body: JSON object containing validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### POST /users/login

#### Description

Logs in an existing user.

#### Request Body

- `email` (string): Required, must be a valid email.
- `password` (string): Required, minimum length of 6 characters.

#### Responses

- `200 OK`

  - Body: JSON object containing the authentication token and user details.

  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

- `400 Bad Request`

  - Body: JSON object containing validation errors.

  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

- `401 Unauthorized`
  - Body: JSON object containing an error message.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
