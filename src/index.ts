import express from 'express';
const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( env.SERVER_PORT, () => {
    console.log( `server started at http://localhost:${ port }` );
} );