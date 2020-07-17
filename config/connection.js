const mysql = require( 'mysql' );

// SECTION MySQL Setup
// !! Sensitive information, use this only for development purposes, this
// !! should not be committed into a production application's repository
const connection = mysql.createConnection( {
    host: "localhost",
    // Default port for MySQL is 3306
    port: 3306,
    // Default user for MySQL is root
    // !! You should not use user "root" in production environments
    user: "root",
    password: "mysql",
    database: "avt_shuttle"
} );
// !SECTION MySQL Setup

// SECTION Database Connection
connection.connect( function( err ){
    if ( err ){
        console.error( 'ERROR: ', err );
        return;
    }
    console.log( `INFO: Database connection established with thread ID "${ connection.threadId }"` )
} );
// !SECTION Database Connection

module.exports = connection;
