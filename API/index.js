const express = require('express');
const app = express();

app.get('/' , (req,res) => {
	res.send('HelloWorld');
});

app.listen(8000, () => {
	console.log('Exmple app listenning on port 8000');
});
