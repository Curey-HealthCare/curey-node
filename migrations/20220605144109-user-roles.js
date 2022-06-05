'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('user_roles', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', nullable: false },
    created_at: { type: 'timestamp', nullable: true },
    updated_at: { type: 'timestamp', nullable: true },
    deleted_at: { type: 'timestamp', nullable: true },
  }, callback);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
