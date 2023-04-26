const express = require('express');
const app = express();

app.use(express.static('./Apps'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: './Apps'}),
);
app.listen(process.env.PORT || 8080, () => console.log(`App Started With Success`))
