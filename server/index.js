import express from 'express';
import { apiRouter } from './router/api.js';

const app = express();
const port = 5020;

app.use('/api', apiRouter);

app.all('*', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Ne ten pataikei :P',
    });
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('Turizmo serveris: http://localhost:' + port);
});