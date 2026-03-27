const express = require('express');
const apiRouterV1 = express.Router();

const produtos = [
  {"id": 1, "descrição": "Camiseta", "marca": "Nike", "preço": 49.99},
  {"id": 2, "descrição": "Calça Jeans", "marca": "Levi's", "preço": 89.99},
  {"id": 3, "descrição": "Tênis", "marca": "Adidas", "preço": 99.99},
  {"id": 4, "descrição": "Blusa de Moletom", "marca": "Puma", "preço": 59.99},
  {"id": 5, "descrição": "Bermuda", "marca": "Vans", "preço": 39.99},
  {"id": 6, "descrição": "Jaqueta", "marca": "The North Face", "preço": 149.99},
  {"id": 7, "descrição": "Vestido", "marca": "Zara", "preço": 79.99},
  {"id": 8, "descrição": "Sapato", "marca": "Gucci", "preço": 299.99},
  {"id": 9, "descrição": "Shorts", "marca": "H&M", "preço": 29.99},
  {"id": 10, "descrição": "Camisa", "marca": "Ralph Lauren", "preço": 109.99}
]

apiRouterV1.get('/produtos', function(req, res, next) {
  res.json(produtos)
});

apiRouterV1.get('/produtos/:id', function(req, res, next) {
  const id = req.params.id;
  const idInt = parseInt(id); // ou Number.parseInt(id)

  const idx = produtos.findIndex(o => o.id === idInt);
  if (idx > -1) {
    res.json(produtos[idx]);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});
 
apiRouterV1.post('/produtos', function(req, res, next) {
  let produto = req.body
  let newId = Math.max(...produtos.map(o => o.id)) + 1
  produto.id = newId
  produtos.push (produto)
 res.status(201).json({ message: `Produto inserido com sucesso`,
                        data: { id: newId}})
});

apiRouterV1.put('/produtos/:id', function(req, res, next) {
  let id = req.params.id;
  let produto = req.body;
  if (id) {
    let idInt = Number.parseInt(id);
    let idx = produtos.findIndex(o => o.id === idInt);
    if (idx > -1) {
      produtos[idx].descrição = produto.descrição;
      produtos[idx].marca = produto.marca;
      produtos[idx].preço = produto.preço;
      res.status(200).json({
        message: `Produto alterado com sucesso`,
        data: { produto: produtos[idx] }
      });
    } else {
      res.status(404).json({ message: `Produto não encontrado` });
    }
  } else {
    res.status(404).json({ message: `Produto não encontrado` });
  }
});

apiRouterV1.delete('/produtos/:id', function(req, res, next) {
  let id = req.params.id;
  if (id) {
    let idInt = Number.parseInt(id);
    let idx = produtos.findIndex(o => o.id === idInt);
    if (idx > -1) {
      produtos.splice(idx, 1);
      res.status(200).json({ message: `Produto excluído com sucesso` });
    } else {
      res.status(404).json({ message: `Produto não encontrado` });
    }
  } else {
    res.status(404).json({ message: `Produto não encontrado` });
  }
});


module.exports = apiRouterV1;
