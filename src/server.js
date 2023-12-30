const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        statusCode: 200,
        success: true
    })
})

app.listen(3000, () => {
    console.log('App is running!')
})