import * as express from "express";
import * as path from 'path'

export const register = ( app: express.Application ) => {


	app.get( "/", ( req: any, res ) => {
		res.render( "index" );
	});


	app.get( "/proxima", ( req: any, res ) => {
		res.render( "proxima" );
	} );


};