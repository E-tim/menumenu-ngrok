const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 2000;
app.use(cors()); // Use cors middleware


app.use(express.json());
app.get('/', (req, res)=> {
    res.send('I am working')
})
app.post('/print', async (req, res) => {
  try {
    const ngrokUrl = 'https://fbdb-197-210-53-46.ngrok-free.app';  // Replace with your Ngrok URL
    const response = await axios.post(`${ngrokUrl}/print`, req.body);

    res.status(200).send(response.data);
  } catch (error) {
    console.error('Print failed:', error);
    res.status(500).send('Failed to print receipt');
  }
});

app.listen(port, () => {
  console.log(`Cloud backend running at http://localhost:${port}`);
});