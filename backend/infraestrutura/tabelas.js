class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarEscola()
        this.criarDonatario()
        this.criarDoador()
        this.criarKit()
        this.criarListaMaterial()
        this.criarRelacaoKitLista()
        this.criarFaleConosco()
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
            avatar VARCHAR(200),
            email_responsavel VARCHAR(40),
            telefone_responsavel VARCHAR(11),
            cep VARCHAR(8),
            logradouro VARCHAR(50),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            escola_donatario int,
            segmento_ensino VARCHAR(30),
            serie_ensino VARCHAR(10),
            tipo_doacao VARCHAR(30),
            sonho_profissao TEXT,
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

    criarKit(){
        const sql = `CREATE TABLE IF NOT EXISTS kit(
            id_kit int NOT NULL AUTO_INCREMENT,
            nome VARCHAR(20),
            elementos TEXT,
            tipo_kit VARCHAR(20),
            PRIMARY KEY (id_kit))`
        
        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela kit criada com sucesso!')
            }
        })
    }

    criarListaMaterial(){
        const sql = `CREATE TABLE IF NOT EXISTS lista_material(
            id_lista int NOT NULL AUTO_INCREMENT,
            id_donatario int,
            data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_lista),
            FOREIGN KEY (id_donatario) REFERENCES donatario(id_donatario))`
        
        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela lista_material criada com sucesso!')
            }
        })
    }

    
    criarRelacaoKitLista(){
        const sql = `CREATE TABLE IF NOT EXISTS relacao_kit_lista(
            id int NOT NULL AUTO_INCREMENT,
            id_lista_material int,
            id_kit int,
            status_item VARCHAR(20),
            PRIMARY KEY (id),
            FOREIGN KEY (id_lista_material) REFERENCES lista_material(id_lista),
            FOREIGN KEY (id_kit) REFERENCES kit(id_kit))`
        
        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela relacao_kit_lista criada com sucesso!')
            }
        })
    }

    criarFaleConosco() {
        const sql = `CREATE TABLE IF NOT EXISTS fale_conosco(
            id int NOT NULL AUTO_INCREMENT,
            nome VARCHAR(50),
            email VARCHAR(30),
            assunto VARCHAR(30),
            mensagem TEXT,
            PRIMARY KEY (id))`
        
        this.conexao.query(sql,(error) => {
            if(error){
                console.log(error)
            }else{ 
                console.log('Tabela fale_conosco criada com sucesso!')
            }
        })
    }
   
}

module.exports = new Tabelas
