/* Copyright (c) Year Author, *** License */
'use strict';

// Enter the name of the datastore.
// This will be the name registered with seneca.
var name = '';


/**
  * params:
  * options - The datasource
  */
module.exports = function(options) {
  var seneca = this,
      desc;


/**
  * Configure the store - create a new store specific connection object
  *
  * params:
  * spec - store specific configuration
  * cb - callback
  */
  function configure(spec,cb) {
    // This method will be called when the store is initialised.
    // Use this method to set up your connection to the datastore
    console.log('configure function invoked');
  }


/**
  * Create a collection name
  *
  * The underlying database needs to have a name for the
  * table or collection associated with the database.
  * The convention is to join the base and name with an underscore, '_'

  * params
  * entity - The Seneca entity
  */
function createCollectionName(entity){
  var canon = entity.canon$({object:true}),
      colName = (canon.base ? canon.base + '_' : '') + canon.name;

  return colName;
}


/**
  * The simple db store interface returned to seneca
  */
  var store = {
    // This object is where you will implement the seneca datastore interface 
    name: name,

  /**
    * Close the connection
    *
    * params
    * args - optional close command arguments
    * cb - callback
    */
    close: function(args,cb) {
      console.log('Close function invoked');
      if(err) return cb(new Error('Close Error'));

      cb(null);
    },

  /**
    * Save the data as specified in the ent attribute of the args object
    *
    * params
    * args - Save command arguments.
    * cb - callback
    */
    save: function(args,cb) {
      // args.ent
      console.log('Save function invoked');
    },

  /**
    * Load first matching item based on matching property values
    * in the q attribute of the args object.
    *
    * params
    * args - Load command arguments.
    * cb - callback
    */
    load: function(args,cb) {
      // args.ent;
      // args.q;
      console.log('load function invoked');
    },

  /**
    * Return a list of objects based on the supplied query, if no query is supplied
    * then all items are selected
    *
    * params
    * args - List command arguments.
    * cb - callback
    */
    list: function(args,cb) {
      // args.ent;
      // args.q
      console.log('list function invoked');
    },

  /**
    * Remove item(s) based on matching property values
    * in the q attribute of the args object.
    *
    * params
    * args - Remove command arguments.
    * cb - callback
    */
    remove: function(args,cb) {
      // args.ent;
      // args.q
      console.log('Remove function invoked');
    },


  /**
    * Return the underlying native connection object
    *
    * params
    * cb - callback
    */
    native: function(cb) {
      console.log('Remove function invoked');
    }

  };


/**
  * Initialization
  */

  // Register the store interface with seneca.
  var meta = seneca.store.init(seneca,options,store);
  desc = meta.desc;

  // The 'init:<name>' pattern gets called for each plugin 
  seneca.add({init:store.name,tag:meta.tag},function(args,done){
    // Call the configure function to set-up the database connection
    configure(options,function(err){
      if( err ) return seneca.die('store',err,{store:store.name,desc:desc});
      return done();
    });
  });


  return {name:store.name,tag:meta.tag};
};