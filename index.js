const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const { table } = require('table');
  const data = [
    ['Header 1', 'Header 2'],
    ['Row 1, Cell 1', 'Row 1, Cell 2'],
    ['Row 2, Cell 1', 'Row 2, Cell 2']
  ];

  const output = table(data);

  res.send(`<pre>${output}</pre>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})