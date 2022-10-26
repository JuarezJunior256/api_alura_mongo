import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
        
    }

    static listarLivrosPorId = (req, res) => {
        const {id} = req.params;

        livros.findById(id)
            .populate("autor", "nome")
            .exec((err, livros) => {
            if (err) {
                res.status(400).sendo({msg: "erro ao buscar"})
            } else {
                res.status(200).json(livros)
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).sendo({msg: "erro ao cadastar"})
            } else {
                res.status(200).send(livro.toJSON())
            }
        })
    }

    static atualizarLivros = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({msg: "Atulizado"})
            } else {
                res.status(500).send({msg: "Erro ao atualizar"})
            }
        })
    }

    static excluirLivros = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({msg: "Excluido"})
            } else {
                res.status(500).send({msg: "Erro ao atualizar"})
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const {editora} = req.query;

        livros.find({'editora': editora}, {}, (err, livros) => {
            if (err) {
                res.status(500).send({msg: "Erro ao buscar livros"});
            }
            res.status(200).send(livros);
        })
    }
}

export default LivroController;