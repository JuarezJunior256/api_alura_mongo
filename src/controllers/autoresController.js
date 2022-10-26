import autores from "../models/Autor.js";

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        }) 
    }

    static listarAutorPorId = (req, res) => {
        const {id} = req.params;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).sendo({msg: "erro ao buscar"})
            } else {
                res.status(200).json(autores)
            }
        }) 
    }

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err) {
                res.status(500).sendo({msg: "erro ao cadastar"})
            } else {
                res.status(200).send(autor.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({msg: "Atulizado"})
            } else {
                res.status(500).send({msg: "Erro ao atualizar"})
            }
        })
    }

    static excluirAutores = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({msg: "Excluido"})
            } else {
                res.status(500).send({msg: "Erro ao atualizar"})
            }
        })
    }
}

export default AutoresController;