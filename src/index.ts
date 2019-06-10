import express from 'express';
import {SERVER_PORT} from './config';

const app = express();

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
    res.send( 'Hello world!' );
} );

// start the Express server
app.listen(SERVER_PORT, () => {
    console.log( `server started at http://localhost:${ SERVER_PORT }` );
} );