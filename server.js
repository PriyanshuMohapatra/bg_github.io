const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'proj2.html'));
});
app.get('/work2.html', (req, res) => {
  res.sendFile(path.join(__dirname,'work2.html'));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
