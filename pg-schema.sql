CREATE DATABASE solid;

CREATE TABLE public.users (
	id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	cpf varchar NOT NULL,
	date_creation date NOT NULL
);

