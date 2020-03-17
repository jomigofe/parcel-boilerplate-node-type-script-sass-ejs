import * as dotenv from "dotenv";
import express from "express";
import * as path from "path";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const scheme = process.env.HOST_SCHEME;
const domain = process.env.HOST_DOMAIN;
const port = process.env.HOST_PORT;

const app = express();

app.use( express.json() );

// Configure Express to use EJS
app.set( "views", "dist/views" );
app.set( "view engine", "ejs" );

app.use(express.static('dist/public'));

// Configure routes
routes.register( app );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at ${ scheme }://${ domain }:${ port }` );
} );
