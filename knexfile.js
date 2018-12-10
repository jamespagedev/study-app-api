// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './db/db.sqlite3',
		},
		pool: {
			afterCreate: function(conn, cb) {
				conn.run('PRAGMA foreign_keys = ON', cb);
			},
		},
		useNullAsDefault: true,
		migrations: {
			directory: './db/migrations',
			tableName: 'dbmigrations',
		},
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './db/migrations',
			tableName: 'dbmigrations',
		},
	},
};
