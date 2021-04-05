# EducAção Solidária
<img src="logo.svg">

##Descrição do Projeto


As seguintes ferramentas foram usadas na construção do projeto:

HTML
CSS
Bootstrap 4
Javascript
Node.js
MySQL
Insomnia 
Git 
Github
NPM

:rocket Como executar o projeto

Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js e MySQL.


:compass Rodando a aplicação web 

# Crie no SGBD MySQL o schema 'hackFCamara'

CREATE SCHEMA `hackFCamara`;

# Clone este repositório

$ git clone https://github.com/Squad31-FCamara/AppDoacao

# Acesse a pasta do projeto no seu terminal/cmd
$ cd backend

# Instale as dependências
$ npm install

# Configure o arquivo de conexão com o banco de dados

$ cd infraestrutura
$ abra o arquivo conexao.js e insira as seguintes informações:

    host: ,
    port: ,
    user: ,
    password: ,
    database: 'hackFCamara'

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Inserções nas tabelas do banco de dados

Após executar o comando anterior, serão criadas as tabelas utilizadas no projeto. O próximo passo será realizar inserts de alguns dados. Para isso, execute os comandos listados no arquivo 'inserts.sql'.

# Abrir o arquivo index.html

O arquivo pode ser executado usando o Live Server do VSCode. No arquivo index.html, com botão direito do mouse clique na opção: abrir com Live Server.

Ou pode ser feita a instalação do browser-sync (npm install -g browser-sync). E após a instalação executar o seguinte comando: browser-sync -s -f . --directory. Abrirá no seu browser a pasta raiz desse projeto. Clique em: frontend -> v2 -> html -> index.html





