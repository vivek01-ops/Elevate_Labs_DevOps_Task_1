const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello, Elevate Labs, this is my fist DevOps task!'));
app.listen(port, () => console.log(`App listening on port ${port}`));
