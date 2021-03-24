/* TABELA E CAMPOS DO DOADOR */
CREATE TABLE doador(
    cpf_doador VARCHAR(11) NOT NULL,
    nome_doador CHAR(60),
    celular_doador VARCHAR(11),
    cep_doador VARCHAR(8),
    email_doador VARCHAR(40),
    PRIMARY KEY (cpf_doador)
);
/* TABELA E CAMPOS ALUNO */
CREATE TABLE aluno(
    ra_aluno VARCHAR(8) NOT NULL,
    lista_material VARCHAR(255),
    celular_responsavel VARCHAR(11),
    nm_escola_aluno VARCHAR(60),
    nm_aluno VARCHAR(60),
    email_responsavel VARCHAR(40),
    PRIMARY KEY (ra_aluno)
);
/* TABELA E CAMPOS ESCOLA */
CREATE TABLE escola(
    endereco VARCHAR(60) NOT NULL,
    nome_escola VARCHAR(60),
    tipo_ensino VARCHAR(60),
    PRIMARY KEY (endereco)
);