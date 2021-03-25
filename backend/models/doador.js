const conexao = require('../infraestrutura/conexao')

class Doador{

    adiciona(doador, res){
        
        const sql = `INSERT INTO doador SET ?`

        conexao.query(sql, doador, (error, results) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(201).json({'mensagem': `Cadastro foi criado com sucesso`})
            }
        })
    }

    lista(res){
        
        const sql = `SELECT * FROM doador`

        conexao.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }


}

module.exports = new Doador