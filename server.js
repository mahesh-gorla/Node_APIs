const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({
		Hi: 'Hey buddy'
	});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
