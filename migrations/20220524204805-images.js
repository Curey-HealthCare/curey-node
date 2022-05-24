'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('images', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    path: 'string',
    size: {type: 'float', nullable: true},
    type: {type: 'string', nullable: true},
  }, callback);
};

exports.down = function(db) {
  return db.dropTable('images', callback);
};

exports._meta = {
  "version": 1
};
