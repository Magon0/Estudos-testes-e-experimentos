UPDATE estados
set nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT nome FROM estados WHERE sigla = 'MA'

SELECT população, nome FROM estados WHERE sigla = 'PR';

UPDATE estados
SET nome = 'Paraná',
    população = 11.32
WHERE sigla = 'PR';