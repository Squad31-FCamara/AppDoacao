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
            endereco VARCHAR(60) NOT NULL,
            nome_escola VARCHAR(60),
            tipo_ensino VARCHAR(60),
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
            ra_donatario VARCHAR(8) NOT NULL,
            lista_material VARCHAR(255),
            celular_responsavel VARCHAR(11),
            escola_donatario int,
            nome_donatario VARCHAR(60),
            email_responsavel VARCHAR(40),
            PRIMARY KEY (id_donatario),
            FOREIGN KEY (escola_donatario) REFERENCES escola(id_escola));`

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
            celular_doador VARCHAR(11),
            cep_doador VARCHAR(8),
            email_doador VARCHAR(40),
            PRIMARY KEY (id_doador))`
        
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
