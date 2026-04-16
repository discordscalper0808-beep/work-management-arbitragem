-- Database schema for Supabase

CREATE TABLE procedimentos (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE punter (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE casas (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    url VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transacoes (
    id SERIAL PRIMARY KEY,
    punter_id INT REFERENCES punter(id),
    casa_id INT REFERENCES casas(id),
    valor DECIMAL(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);