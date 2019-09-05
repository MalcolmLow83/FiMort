CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
);

CREATE TABLE IF NOT EXISTS banks (
	id SERIAL PRIMARY KEY,
	name TEXT,
	name1 TEXT,
	photo_url TEXT
);

CREATE TABLE IF NOT EXISTS ref_rates (
	id SERIAL PRIMARY KEY,
	name TEXT,
	rate FLOAT,
	bank_id INTEGER
);

CREATE TABLE IF NOT EXISTS packages (
	id SERIAL PRIMARY KEY,
	name TEXT,
	new_refi TEXT,
	float_fixed TEXT,
	hdb_pvt TEXT,
	buc_completed TEXT,
	lock_in BOOLEAN,
	min_loan INTEGER,
	rate_1 INTEGER,
	operator_1 TEXT,
	spread_1 FLOAT,
	rate_2 INTEGER,
	operator_2 TEXT,
	spread_2 FLOAT,
	rate_3 INTEGER,
	operator_3 TEXT,
	spread_3 FLOAT,
	remarks TEXT,
	bank_id INTEGER
);
