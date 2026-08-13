async function carregarProdutos() {
  const resposta = await fetch('/api/v1/produtos');
  const produtos = await resposta.json();

  const tabela = document.getElementById('tabela-produtos');
  tabela.innerHTML = '';

  produtos.forEach(p => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${p.id}</td>
      <td>${p.descrição}</td>
      <td>${p.marca}</td>
      <td>R$ ${Number(p.preço).toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  });
}

window.onload = carregarProdutos;

// * conexão do botão "Adicionar" * //
document.getElementById('form-produto').addEventListener('submit', async function(e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const marca = document.getElementById('marca').value;
  const preco = parseFloat(document.getElementById('preco').value.replace(",", "."));


  await fetch('/api/v1/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ descricao, marca, preco })
  });

  this.reset();
  carregarProdutos();
});
