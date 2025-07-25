document.addEventListener('DOMContentLoaded', () => {
  const produtos = {
    Cirre01: {
      nome: 'Tecido Cirrê - Vinho',
      imagem: 'img/tecido/cirre01.jpeg',
      modelo: 'img/modelos/Legging Vinho.png',
      desc: 'Tecido com acabamento brilhoso e toque macio. Sua coloração em vinho metalizado garante um visual sofisticado e moderno. Ideal para peças fitness que buscam impacto visual e conforto ao mesmo tempo. Composição: 90% Poliamida, 10% Elastano.'
    },
    Cirre02: {
      nome: 'Tecido Cirrê - Azul',
      imagem: 'img/tecido/cirre02.jpeg',
      desc: 'Tecido com brilho intenso e textura sedosa. O tom azul vibrante oferece personalidade à peça, enquanto sua elasticidade proporciona ajuste perfeito ao corpo. Perfeito para leggings e croppeds com estilo. Composição: 90% Poliamida, 10% Elastano.'
    },
    Cirre03: {
      nome: 'Tecido Cirrê',
      imagem: 'img/tecido/cirre03.jpeg',
      desc: 'Visual elegante com brilho discreto em tom grafite. Possui toque suave e ótima elasticidade, ideal para looks fitness noturnos ou peças com proposta mais sóbria e refinada. Composição: 90% Poliamida, 10% Elastano.'
    },
    Suplex01: {
      nome: 'Suplex - Cinza Mescla',
      imagem: 'img/tecido/suplex01.jpeg',
      desc: 'Tecido suplex em tom mescla cinza, com visual moderno e textura suave. Ideal para peças básicas com um toque urbano. Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Suplex02: {
      nome: 'Suplex - Rosa Cliclete',
      imagem: 'img/tecido/suplex02.jpeg',
      desc: 'Tecido suplex em rosa vibrante, perfeito para quem busca peças alegres e femininas. Confortável e com excelente elasticidade. Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Suplex03: {
      nome: 'Suplex - Verde Água',
      imagem: 'img/tecido/suplex03.jpeg',
      desc: 'Leve, refrescante e cheio de estilo, esse suplex verde mint é ideal para looks fitness que se destacam com suavidade. Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Suplex04: {
      nome: 'Suplex - Preto',
      imagem: 'img/tecido/suplex04.jpeg',
      desc: 'Tecido suplex preto, versátil e atemporal. Perfeito para produções sofisticadas ou básicas, com compressão e conforto.Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Suplex05: {
      nome: 'Suplex - Cinza',
      imagem: 'img/tecido/suplex05.jpeg',
      desc: 'Moderno e discreto, o suplex chumbo mescla oferece um visual esportivo com muito conforto e resistência. Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Suplex06: {
      nome: 'Suplex - Azul Marinho',
      imagem: 'img/tecido/suplex06.jpeg',
      desc: 'Elegante e profundo, o suplex azul marinho garante um visual sofisticado para treinos ou uso diário. Alta elasticidade e ótimo caimento. Composição: 87% Poliamida, 13% Elastano | Gramatura: 360g'
    },
    Jacquard01: {
      nome: 'Jacquard - Vinho',
      imagem: 'img/tecido/jacquard01.jpeg',
      desc: 'Tecido encorpado e elegante, com textura em relevo que garante sofisticação e excelente caimento. Ideal para peças com mais estrutura e presença. Composição: 87% Poliamida, 13% Elastano | Gramatura: 320g',
    },
    Jacquard02: {
      nome: 'Jacquard - Verde Escuro',
      imagem: 'img/tecido/jacquard02.jpeg',
      desc: 'Possui relevo ondulado que traz modernidade e charme. O toque é macio e firme, perfeito para modelagens que valorizam o corpo com conforto. Composição: 87% Poliamida, 13% Elastano | Gramatura: 320g',
    },
    Jacquard03: {
      nome: 'Jacquard - Rosa',
      imagem: 'img/tecido/jacquard03.jpeg',
      desc: 'Delicado e com leve brilho, esse tecido une estilo e elasticidade. Seu relevo elegante oferece um visual sofisticado para qualquer peça fitness ou casual. Composição: 87% Poliamida, 13% Elastano | Gramatura: 320g',
    },
    Jacquard04: {
      nome: 'Jacquard - Goiaba',
      imagem: 'img/tecido/jacquard04.jpeg',
      desc: 'Colorido e com textura sutil em alto-relevo, proporciona um visual autêntico e moderno. Ideal para quem busca estilo com conforto e sustentação | Gramatura: 320g',
    },
    Glamour: {
      nome: 'Glamour - Bordô',
      imagem: 'img/tecido/glamour.jpeg',
      desc: 'Tecido nobre e sofisticado, com brilho acetinado que destaca o visual com elegância. Possui excelente elasticidade e firmeza, ideal para peças que valorizam o corpo com um toque luxuoso. Indicado para looks impactantes, confortáveis e cheios de estilo. Composição: 90% Poliamida, 10% Elastano | Gramatura: 320g',
    },
    Estampado01: {
      nome: 'Estampado Florido Roxo',
      imagem: 'img/tecido/estampado01.jpeg',
      desc: 'Estampa vibrante e moderna com pinceladas neon e traços abstratos. Um tecido que transmite energia e atitude, perfeito para looks ousados de treino ou lifestyle. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado02: {
      nome: 'Estampado Colorido',
      imagem: 'img/tecido/estampado02.jpeg',
      desc: 'Visual tribal contemporâneo com mistura de cores intensas e formas orgânicas. Um tecido que se destaca pela originalidade e versatilidade em peças fitness. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado03: {
      nome: 'Estampado Bolinha',
      imagem: 'img/tecido/estampado03.jpeg',
      desc: 'Design gráfico com traços geométricos e camadas de cores neon. Esse tecido une estilo urbano e esportivo, ideal para quem ama roupas com identidade visual forte. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado04: {
      nome: 'Estampado Verde Água',
      imagem: 'img/tecido/estampado04.jpeg',
      desc: 'Estampa vibrante com efeito "pele de cobra" multicolorida. Ideal para looks fitness ousados, cheios de personalidade e autenticidade. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado05: {
      nome: 'Estampado Étnica Tropical',
      imagem: 'img/tecido/estampado05.jpeg',
      desc: 'Mistura de folhas e listras estilizadas em tons frios. Um tecido com aparência tropical e sofisticada, perfeito para roupas fitness com frescor e estilo. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado06: {
      nome: 'Estampado Abstrato Neon',
      imagem: 'img/tecido/estampado06.jpeg',
      desc: 'Estampa geométrica com sobreposição de elementos florais e tribais. Um mix moderno que une força e delicadeza em peças marcantes. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado07: {
      nome: 'Estampado Espiral Cósmica',
      imagem: 'img/tecido/estampado07.jpeg',
      desc: 'Um mix selvagem e urbano. As listras zebradas com detalhes tribais e cores neon criam um visual impactante e moderno. Ideal para quem quer se destacar com estilo. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado08: {
      nome: 'Estampado Selva Neon',
      imagem: 'img/tecido/estampado08.jpeg',
      desc: 'Cores hipnotizantes com movimento e intensidade. Esse tecido traz uma vibe retrô e energética, ideal para looks criativos e cheios de personalidade. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado09: {
      nome: 'Estampado Etnopop',
      imagem: 'img/tecido/estampado09.jpeg',
      desc: 'Com efeito visual vibrante e textura marcante, esse tecido imprime ousadia e atitude. Perfeito para peças fitness que combinam estilo e funcionalidade. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
    Estampado10: {
      nome: 'Estampado Impacto Neon',
      imagem: 'img/tecido/estampado10.jpeg',
      desc: 'Geometria e contraste em um só tecido. A base preta e branca com detalhes florais cria um equilíbrio entre ousadia e sofisticação. Composição: 87% Poliamida, 13% Elastano – 320g',
    },
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

  const modeloEl = document.getElementById('produto-modelo');
  if (modeloEl && dados.modelo) {
    modeloEl.src = dados.modelo;
    modeloEl.alt = `Modelo com ${dados.nome}`;
    modeloEl.style.display = 'block';
  } else if (modeloEl) {
    modeloEl.style.display = 'none';
  }

  document.getElementById('btn-add-carrinho').addEventListener('click', () => {
    adicionarAoCarrinho(dados);
    mostrarToast();
  });
}

  //imagem da modelo
  const imgModeloEl = document.getElementById('produto-modelo');
  if (imgModeloEl) {
    imgModeloEl.src = dados.imagemModelo || dados.imagem;
    imgModeloEl.alt = dados.nome + ' - Modelo';
  }

  document.getElementById('btn-add-carrinho').addEventListener('click', () => {
    adicionarAoCarrinho(dados);
    mostrarToast();
  });
}

  // === Página de Carrinho ===
  if (document.getElementById('lista-carrinho')) {
    carregarCarrinho();
  }

  // === CPF/CNPJ Toggle ===
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

  // === Atualiza contador ao carregar ===
  atualizarContadorCarrinho();
});

// === Funções Globais ===

function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
  atualizarContadorCarrinho();
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
    col.className = 'col-12 col-sm-6 col-md-4';
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

function atualizarContadorCarrinho() {
  const contadorEl = document.getElementById('contador-carrinho');
  if (contadorEl) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    contadorEl.textContent = `(${carrinho.length})`;
  }
}

document.querySelectorAll('.produto-img').forEach(img => {
  const original = img.src;
  const hover = img.dataset.hover;

  if (hover) {
    img.addEventListener('mouseenter', () => {
      img.src = hover;
    });

    img.addEventListener('mouseleave', () => {
      img.src = original;
    });
  }
});
