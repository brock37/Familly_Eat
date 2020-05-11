const express = require('express');
const app = express();
const cors =require('cors')

const mealRouter = require('./routes/meal')

app.use(express.json());
app.use(cors());

app.use('/meal', mealRouter);

app.listen(8000, () => {
	console.log('Exemple app listening on port 8000');
});
