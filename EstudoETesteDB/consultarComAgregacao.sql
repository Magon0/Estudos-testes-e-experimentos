select 
    regiao as 'Região'
    sum(população) as Total
from estados
GROUP by regiao
ORDER by total desc;