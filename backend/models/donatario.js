const conexao = require('../infraestrutura/conexao')

class Donatario{

    adiciona(donatario, res){
        
        const sql = `INSERT INTO donatario SET ?`

        conexao.query(sql, donatario, (error, results) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(201).json({'mensagem': `Cadastro foi criado com sucesso`})
            }
        })
    }

    lista(res){
        
        const sql = `SELECT * FROM donatario`

        conexao.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    buscaPorIdEscola(id, res){

        const sql = `SELECT d.nome_donatario, d.lista_material, e.nome_escola 
        FROM donatario AS d INNER JOIN escola AS e ON d.escola_donatario = e.id_escola
        WHERE e.id_escola = ${id}`

        conexao.query(sql, (error, results) => {
            const donatarios = results

            if(error){
                res.status(400).json(error)
            } else {
                res.status(200).json(donatarios)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM donatario WHERE id_donatario = ${id}`

        conexao.query(sql, (error, results) => {
            const donatario = results[0]

            if(error){
                res.status(400).json(error)
            } else {
                res.status(200).json(donatario)
            }
        })
    }
}

module.exports = new Donatario