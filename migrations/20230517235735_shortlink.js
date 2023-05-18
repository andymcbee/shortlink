
exports.up = function(knex) {
    return knex.schema.createTable('shortlink', table => {
      table.specificType('id', 'char(36) primary key');
      table.timestamp('date_created').defaultTo(knex.fn.now())
      table.string('short_name', 32).notNullable().unique()
      table.string('websiteTarget', 100)
      table.bool('active').notNullable()
  
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('shortlink')
  };
  