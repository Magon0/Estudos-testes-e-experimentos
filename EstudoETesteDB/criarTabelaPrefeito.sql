create table if not exists prefeitos(
    id int UNSIGNED not NULL AUTO_INCREMENT,
    nome VARCHAR(255) not NULL,
    cidade_id int UNSIGNED,
    primary key (id),
    unique key (cidade_id),
    FOREIGN key (cidade_id) REFERENCES cidades (id)
)
