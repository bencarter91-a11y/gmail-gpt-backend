const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Gmail GPT Backend is running!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`✅ Server running on port ${process.env.PORT || 3000}`);
});
