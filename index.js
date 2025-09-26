const express = require('express');
const app = express();
const port = 6500;
const estudianteRoute = require('./routes/estudianteRoute.js');
const profesorRoute = require('./routes/profesorRoute.js');


app.get('/', (req, res) => {
  res.send('Hola Mundi!');
});

app.use('/estudiantes', estudianteRoute);
app.use('/profesores', profesorRoute);


app.listen(port, () => {console.log(`servidor actvivo: ${port}`)});