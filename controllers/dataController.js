const express = require( 'express' );
const router = express.Router();
const data = require( '../models/data' );

// SECTION Routes
// TODO: Create your routes here
router.get( '/', function( req, res ){
    // TODO: Implement route logic
    // !! Don't forget to send a response
   
    data.all( 
        function( data ){
            console.table( data );
            // !! This requires Express to have a view engine set
            res.render( 'index', {data: data} );
        }
     );
} );

router.post( '/api/data/', function( req, res ){
    // TODO: Implement route logic
    // !! Don't forget to send a response
    console.log( req.body );
    data.create(
        [ 'text' ],
        [ req.body.text ],
        function(result){
            res.redirect( '/' );
        }
    );
} );

router.put( '/api/data/:id', function( req, res ){
    // TODO: Implement route logic
    // !! Don't forget to send a response
    const condition = `id = ${ req.params.id }`;

    data.update(
        {
            selected: req.body.selected
        },
        condition,
        function(result){
            if ( result.changedRows ===0 ) {
                res.status (404).end();
            } else {
                res.status(200).end();
            }
        }
    )
} );
// !SECTION Routes

module.exports = router;
