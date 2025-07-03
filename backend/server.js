const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Backend is listening at Port: ${PORT}`);
});