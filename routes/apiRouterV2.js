const express = require('express');
const apiRouterV2 = express.Router();
const knex = require('knex')(require('../knexfile').development);

// GET todos os produtos
apiRouterV2.get('/produtos', (req, res) => {
  knex('produtos')
    .select('*')
    .then(produtos => res.status(200).json(produtos))
    .catch(err => res.status(500).json({ message: `Erro ao obter produtos: ${err.message}` }));
});

// GET produto por ID
apiRouterV2.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  knex('produtos')
    .where({ id })
    .first()
    .then(produto => {
      if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
      res.status(200).json(produto);
    })
    .catch(err => res.status(500).json({ message: `Erro ao obter produto: ${err.message}` }));
});

// POST novo produto
apiRouterV2.post('/produtos', (req, res) => {
  const produto = req.body;
  knex('produtos')
    .insert(produto)
    .returning('id')
    .then(ids => res.status(201).json({ message: 'Produto inserido com sucesso', data: { id: ids[0] } }))
    .catch(err => res.status(500).json({ message: `Erro ao inserir produto: ${err.message}` }));
});

// PUT atualizar produto
apiRouterV2.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = req.body;
  knex('produtos')
    .where({ id })
    .update(produto)
    .then(count => {
      if (count === 0) return res.status(404).json({ message: 'Produto não encontrado' });
      res.status(200).json({ message: 'Produto alterado com sucesso' });
    })
    .catch(err => res.status(500).json({ message: `Erro ao atualizar produto: ${err.message}` }));
});

// DELETE produto
apiRouterV2.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  knex('produtos')
    .where({ id })
    .del()
    .then(count => {
      if (count === 0) return res.status(404).json({ message: 'Produto não encontrado' });
      res.status(200).json({ message: 'Produto excluído com sucesso' });
    })
    .catch(err => res.status(500).json({ message: `Erro ao excluir produto: ${err.message}` }));
});

module.exports = apiRouterV2;
