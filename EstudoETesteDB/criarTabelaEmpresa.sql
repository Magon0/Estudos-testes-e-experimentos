CREATE table if not EXISTS empresas(
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) not NULL,
    cnpj INT UNSIGNED,
    primary key (id),
    UNIQUE key (cnpj)
);

--cidades_empresas
CREATE TABLE IF NOT EXISTS empresas_unidades(
    empresa_id int UNSIGNED not NULL,
    cidade_id int UNSIGNED not NULL,
    sede TINYINT(1) not NULL,
    primary key (empresa_id, cidade_id)
);