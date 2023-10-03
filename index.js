const express = require('express');
const Vibrant = require('node-vibrant');
const cors = require('cors'); // Import the cors package

const app = express();
const port = process.env.4000;

// Middleware to enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Define the endpoint to get the dominant color
app.post('/getDominantColor', async (req, res) => {
  try {
    const imageUrl = req.body.imageUrl;

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const palette = await Vibrant.from(imageUrl).getPalette();
    const dominantColor = palette.Vibrant.getHex();

    res.json({ dominantColor });
  } catch (error) {
    
    res.status(500).json({ error: error});
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
