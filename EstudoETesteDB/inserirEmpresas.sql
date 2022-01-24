INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);


ALTER table empresas MODIFY cnpj varchar(14)

select * FROM empresas

select * FROM empresas_unidades

INSERT into empresas_unidades
    (empresa_id, cidade_id, sede)
VALUEs
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);