insert INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 31);

insert INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 40);

insert INTO cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (SELECT id from estados WHERE sigla = 'PE'));

insert INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (SELECT id from estados WHERE sigla = 'CE'));