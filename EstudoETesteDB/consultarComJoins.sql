select * from prefeitos;
select * from cidades;

select * from cidades c INNER JOIN prefeitos p on c.id = p.cidade_id;
select * from cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id;
select * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;

select * from cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id
union
select * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;