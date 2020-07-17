const orm = require( '../config/orm' );

const data = {
    all: function( callback ){
        orm.all("data",callback);
    },
    create: function(columns,values, callback ){
        orm.create("data",columns,values,callback);
    },
    update: function( columnsValues,condition,callback ){
        orm.update("data",columnsValues,condition,callback);
    },
    delete: function( condition,callback ){
        orm.delete("data",condition,callback);
    }
};

module.exports = data;
