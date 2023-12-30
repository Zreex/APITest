const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        statusCode: 200,
        success: true
    })
})

app.listen(443, () => {
    console.log('App is running on port 443')
})