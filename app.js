const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('¡Tres tristes tigres comen trigo en un trigal!'));
app.get('/', (req, res) => res.send('Buen trabalenguas'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
