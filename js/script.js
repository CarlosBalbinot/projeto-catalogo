document.addEventListener('DOMContentLoaded', () => {
  // 1) Dados dos produtos
  const produtos = {
    Jaguar: {
      nome: 'Tecido Jaguar',
      imagem: 'img/jaguar.jpeg',
      desc: 'Tecido com visual sofisticado e toque macio, ideal para roupas fitness de alta performance.'
    },
    Suplex: {
      nome: 'Tecido Suplex',
      imagem: 'img/suplex.jpeg',
      desc: 'Tecido suplex resistente e com ótima elasticidade, perfeito para leggings e tops de treino.'
    },
    Maxxi: {
      nome: 'Tecido Maxxi',
      imagem: 'img/maxxi.jpeg',
      desc: 'Tecido Maxxi com alta compressão e toque confortável para máxima performance.'
    }
  };

  // 2) Lógica da página de produto
  const btnAdd = document.getElementById('btn-add-carrinho');
  if (btnAdd) {
    const params = new URLSearchParams(window.location.search);
    const chave = params.get('produto');
    const dados = produtos[chave] || produtos.Jaguar;

    // Preenche infos
    document.getElementById('produto-nome').innerText = dados.nome;
    document.getElementById('produto-desc').innerText = dados.desc;
    const imgEl = document.getElementById('produto-imagem');
    imgEl.src = dados.imagem;
    imgEl.alt = dados.nome;

    // Evento adicionar ao carrinho
    btnAdd.addEventListener('click', () => adicionarAoCarrinho(dados));
  }

  // 3) Lógica da página de carrinho
  const listaCarrinhoEl = document.getElementById('lista-carrinho');
  if (listaCarrinhoEl) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const inputProdutosEl = document.getElementById('input-produtos');

    if (carrinho.length === 0) {
      listaCarrinhoEl.innerHTML = '<p class="text-center">Nenhum produto no carrinho.</p>';
    } else {
      let resumo = '';
      carrinho.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card h-100 rounded-4">
            <img src="${item.imagem}" class="card-img-top" alt="${item.nome}" style="height:300px; object-fit:cover;">
            <div class="card-body text-center">
              <h5 class="card-title">${item.nome}</h5>
              <p class="card-text small">${item.desc}</p>
            </div>
          </div>`;
        listaCarrinhoEl.appendChild(col);

        resumo += `${index + 1}. ${item.nome} - ${item.desc}\n`;
      });
      inputProdutosEl.value = resumo;
    }
  }

  // 4) Switch CPF/CNPJ (para modal e carrinho)
  const tipoPessoaEl = document.getElementById('tipoPessoa');
  if (tipoPessoaEl) {
    const campoCpfEl = document.getElementById('campoCpf');
    const campoCnpjEl = document.getElementById('campoCnpj');
    tipoPessoaEl.addEventListener('change', () => {
      campoCpfEl.classList.add('d-none');
      campoCnpjEl.classList.add('d-none');
      if (tipoPessoaEl.value === 'cpf') campoCpfEl.classList.remove('d-none');
      if (tipoPessoaEl.value === 'cnpj') campoCnpjEl.classList.remove('d-none');
    });
  }
});

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(produto) {
  const item = {
    nome: produto.nome,
    imagem: produto.imagem,
    desc: produto.desc
  };
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Produto adicionado ao carrinho!');
}
