CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
INSERT INTO usuarios(nome,email,idade) VALUES (
    'Juca',
    'Juca@email.com', 
    28
);

SELECT * FROM usuarios WHERE idade =28;
SELECT * FROM usuarios WHERE idade >= 18;
SELECT * FROM usuarios WHERE nome = 'Juca';

DELETE FROM usuarios WHERE nome = 'Juca';

UPDATE usuarios SET nome = 'Kucas', email="kuka@email.com" WHERE nome = "Lucas";