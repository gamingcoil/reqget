const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000

app.use(cors());

app.get('/api/profile_data', async (req, res) => {
  try {
    const response = await axios.get('https://stips.co.il/api?name=profile.page_data&api_params=%7B%22userid%22:389111%7D');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
