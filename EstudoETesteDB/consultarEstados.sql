SELECT * FROM estados

SELECT sigla, nome as 'Nome dos Estados' FROM estados
where população >=10
order by população desc