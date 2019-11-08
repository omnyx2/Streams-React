const express = require('express');
const app = express();
const port = 8000;

app.get('/kakaotalk-auto/login', (req, res) => res.send('hello world'));
app.listen(port, () => console.log(`Example applisenting on  port ${port}`));
