const Lista = require('../models/lista')

module.exports = app => {

    app.patch('/kit/:id/status', (req, res) => {
        const id = parseInt(req.params.id)

        Lista.altera(id, res) 
    })
}