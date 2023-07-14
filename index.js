const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send(`
    <h1>Page 1</h1>
    <a href="/1">Go to glossary 1</a>
  `);
})
var glossary1 = require('./glossary1');
app.use('/1', glossary1);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})