const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    return res.status(200).json({
        statusCode: 200,
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`)
})