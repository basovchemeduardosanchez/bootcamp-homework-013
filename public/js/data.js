$( document ).ready( function(){
    // SECTION Select it Button Handler
    $( '.select-it' ).on( 'click', function( pEvent ){
        const id = $(this).data( 'id' );
        $.ajax(
            `/api/data/${id}`,
            {
                type: `PUT`,
                data: { selected: true }
            }
        )
            .done( function( pData, pTextStatus, pJqXhr ){
                // TODO: Implement logic to execute after the request has completed
                window.location.reload();
            } )
            .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
                throw pErrorThrown;
            } );
    } );
    // !SECTION Select it Button Handler
} );