# API Usage Guide

## Overview

This API provides a simple endpoint to retrieve the dominant color of an image using the Vibrant library. Follow the instructions below to integrate this API into your projects using Node.js and cURL.

## Endpoints

### Get Dominant Color

- **Endpoint**: `/getDominantColor`
- **Method**: POST
- **Request Body**: JSON
  - `imageUrl` (string): URL of the image for which you want to determine the dominant color.

## Usage

### Node.js

```javascript
const axios = require('axios');

const apiUrl = 'https://imageapi-ten.vercel.app/getDominantColor';
const imageUrl = 'https://example.com/image.jpg';

axios.post(apiUrl, { imageUrl })
  .then(response => {
    const dominantColor = response.data.dominantColor;
    console.log(`Dominant Color: ${dominantColor}`);
  })
  .catch(error => {
    console.error('Error:', error.message || error);
  });
```
### Python

```python
import requests

api_url = "https://imageapi-ten.vercel.app/getDominantColor"
image_url = "https://example.com/image.jpg"

response = requests.post(api_url, json={"imageUrl": image_url})
result = response.json()

dominant_color = result.get("dominantColor")
print(f"Dominant Color: {dominant_color}")
```
### Curl

```curl
curl -X POST -H "Content-Type: application/json" -d '{"imageUrl": "https://example.com/image.jpg"}' https://imageapi-ten.vercel.app/getDominantColor
```

# API Installation 

## Prerequisites

Ensure you have Node.js installed on your machine. If not, you can download it from [Node.js website](https://nodejs.org/).

## Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/markbosire/imageapi.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd repo
   ```
3. **Install Node.js modules:**
   ```bash
   npm install
   ```
4. **Run the App**
   ```bash
   node index.js
   ```
   

