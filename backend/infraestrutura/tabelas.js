class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarEscola()
        this.criarDonatario()
        this.criarDoador()
    }

    criarEscola(){
        const sql = `CREATE TABLE IF NOT EXISTS escola(
            id_escola int NOT NULL AUTO_INCREMENT,
            nome_escola VARCHAR(60),
            rede VARCHAR(60),
            cep VARCHAR(8),
            logradouro VARCHAR(50),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_escola))`

        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela escola criada com sucesso!')
            }
        })
    }

    criarDonatario(){
        const sql = `CREATE TABLE IF NOT EXISTS donatario(
            id_donatario int NOT NULL AUTO_INCREMENT,
            ra_donatario VARCHAR(8),
            nome_donatario VARCHAR(60),
            email_responsavel VARCHAR(40),
            telefone_responsavel VARCHAR(11),
            cep VARCHAR(8),
            logradouro VARCHAR(50),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            escola_donatario int,
            tipo_doacao VARCHAR(30),
            lista_material VARCHAR(255),
            data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_donatario),
            FOREIGN KEY (escola_donatario) REFERENCES escola(id_escola))`

        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela donatário criada com sucesso!')
            }
        })
    }

    criarDoador(){
        const sql = `CREATE TABLE IF NOT EXISTS doador(
            id_doador int NOT NULL AUTO_INCREMENT,
            cpf_doador VARCHAR(11) NOT NULL,
            nome_doador CHAR(60),
            telefone_doador VARCHAR(11),
            email_doador VARCHAR(40),
            donatario int,
            forma_doacao VARCHAR(50),
            data_doacao DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_doador),
            FOREIGN KEY (donatario) REFERENCES donatario(id_donatario))`
        
        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela doador criada com sucesso!')
            }
        })
    }

}

module.exports = new Tabelas
