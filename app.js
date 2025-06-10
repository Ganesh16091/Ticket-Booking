const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Wanderu Clone Travel Booking App!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
