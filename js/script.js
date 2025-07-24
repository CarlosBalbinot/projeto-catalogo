document.addEventListener('DOMContentLoaded', () => {
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

  // === Página de Produto ===
  if (document.getElementById('btn-add-carrinho')) {
    const params = new URLSearchParams(window.location.search);
    const chave = params.get('produto');
    const dados = produtos[chave] || produtos.Jaguar;

    document.getElementById('produto-nome').innerText = dados.nome;
    document.getElementById('produto-desc').innerText = dados.desc;
    const imgEl = document.getElementById('produto-imagem');
    imgEl.src = dados.imagem;
    imgEl.alt = dados.nome;

    document.getElementById('btn-add-carrinho').addEventListener('click', () => {
      adicionarAoCarrinho(dados);
      mostrarToast();
    });
  }

  // === Página de Carrinho ===
  const listaCarrinhoEl = document.getElementById('lista-carrinho');
  if (listaCarrinhoEl) {
    carregarCarrinho();
  }

  // === CPF/CNPJ ===
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

// === Funções ===

function adicionarAoCarrinho(produto) {
  const item = {
    nome: produto.nome,
    imagem: produto.imagem,
    desc: produto.desc
  };

  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removerDoCarrinho(index) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const lista = document.getElementById('lista-carrinho');
  const inputProdutos = document.getElementById('input-produtos');

  lista.innerHTML = '';

  if (carrinho.length === 0) {
    lista.innerHTML = '<p class="text-center">Nenhum produto no carrinho.</p>';
    if (inputProdutos) inputProdutos.value = '';
    return;
  }

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
          <button class="btn btn-sm btn-outline-danger" onclick="removerDoCarrinho(${index})">Remover</button>
        </div>
      </div>`;
    lista.appendChild(col);
    resumo += `${index + 1}. ${item.nome} - ${item.desc}\n`;
  });

  if (inputProdutos) inputProdutos.value = resumo;
}

function mostrarToast() {
  const toast = document.getElementById('toast-confirma');
  if (toast) {
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  }
}

// Atualiza o contador de itens no ícone do carrinho
function atualizarContadorCarrinho() {
  const contadorEl = document.getElementById('contador-carrinho');
  if (contadorEl) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    contadorEl.textContent = `(${carrinho.length})`;
  }
}
atualizarContadorCarrinho();SSS