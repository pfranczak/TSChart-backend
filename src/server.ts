import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const app = express();

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// start the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});

export default app;
