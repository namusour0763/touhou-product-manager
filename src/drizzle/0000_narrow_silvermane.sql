CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"character" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"price" integer NOT NULL
);
