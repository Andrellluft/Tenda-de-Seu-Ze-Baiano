function toggleMenu() {
  const menu = document.getElementById("menu-navegacao");
  menu.classList.toggle("ativo");
}

const links = document.querySelectorAll("#menu-navegacao a");
links.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu-navegacao").classList.remove("ativo");
  });
});

// Para destacar o link da página atual no menu de navegação

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".cabecalho nav a");
  const urlAtual = window.location.href.toLowerCase();

  links.forEach(link => {
    const linkHref = link.href.toLowerCase();
    if (urlAtual.includes(linkHref)) {
      link.classList.add("ativo");
    }
  });
});

// Variável para armazenar o usuário logado
let nomeUsuarioLogado = '';
let isLogin = true;

function toggleForm() {
  const title = document.getElementById('form-title');
  const button = document.querySelector('button');
  const toggleText = document.querySelector('.toggle');

  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = 'Entre na Tenda';
    button.innerText = 'Entrar';
    toggleText.innerText = 'Ainda não tem como Entrar? Cadastre-se';
  } else {
    title.innerText = 'Cadastre-se na Tenda!';
    button.innerText = 'Cadastrar-se';
    toggleText.innerText = 'Já tem como Entrar? Entre';
  }
}

// NOVA FUNÇÃO: Adiciona link do usuário no menu
function adicionarLinkUsuario(nomeUsuario) {
  const menu = document.getElementById("menu-navegacao");

  const novoLink = document.createElement("a");
  novoLink.href = `${nomeUsuario}.html`;
  novoLink.textContent = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1);
  menu.appendChild(novoLink);

  // Garante que o menu feche ao clicar no novo link
  novoLink.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });


  // Atualiza o destaque do link se for a página atual
  const urlAtual = window.location.href.toLowerCase();
  if (urlAtual.includes(novoLink.href.toLowerCase())) {
    novoLink.classList.add("ativo");
  }
}

// Função para logar o usuário e adicionar o link no menu
function loginUsuario(usuario) {
  nomeUsuarioLogado = usuario.toLowerCase(); // exemplo: "lino"
  localStorage.setItem("usuarioLogado", nomeUsuarioLogado); // salva o login
  adicionarLinkUsuario(nomeUsuarioLogado);
}

// janela modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", (e) => {
    e.stopPropagation(); // <-- Prevê interferência
    e.preventDefault();  // <-- Impede erro ao clicar se card tiver link

    const tipo = card.dataset.tipo;
    const nome = card.dataset.nome;
    const img = card.dataset.img;

    let extraHTML = '';

    switch (tipo) {
      case 'orixas':
        extraHTML = `
            <p><strong>Uso:</strong> ${card.dataset.uso}</p>
            <p><strong>Raridade:</strong> ${card.dataset.raridade}</p>
            <p><strong>Local:</strong> ${card.dataset.local}</p>
            <p><strong>Habilidades:</strong> ${card.dataset.habilidades}</p>
          `;
        break;

      case 'linhas_de_trabalhos':
        extraHTML = `
            <p><strong>Energia:</strong> ${card.dataset.energia}</p>
            <p><strong>Função Espiritual:</strong> ${card.dataset.funcao_espiritual}</p>
            <p><strong>Cores:</strong> ${card.dataset.cores}</p>
            <p><strong>Ponto de Força:</strong> ${card.dataset.ponto_de_forca}</p>
            <p><strong>Oferendas Típicas:</strong> ${card.dataset.oferendas}</p>
            <p><strong>Saudação:</strong> ${card.dataset.saudacao}</p>
            <p><strong>Dias da Semana:</strong> ${card.dataset.dias_da_semana}</p>
          `;
        break;

      case 'pontos':
        extraHTML = `
            <p><strong>Local:</strong> ${card.dataset.local}</p>
            <p><strong>Produtos:</strong> ${card.dataset.produtos}</p>
            <p><strong>Especialidade:</strong> ${card.dataset.especialidade}</p>
          `;
        break;

      case 'banhos':
        extraHTML = `
            <p><strong>Ataque:</strong> ${card.dataset.ataque}</p>
            <p><strong>Defesa:</strong> ${card.dataset.defesa}</p>
            <p><strong>Poder:</strong> ${card.dataset.poder}</p>
            <p><strong>Habilidades:</strong> ${card.dataset.habilidades}</p>
          `;
        break;

      case 'stefanie':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="xango.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="ossain.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="esmeralda-02.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="vo-cambinda.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="ereritinha.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="esmeralda.jpg"  class="icon top-icon"><img src="exu-das-matas.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'liliane':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="oxum.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="exu-ventania.jpg"  class="icon top-icon"><img src="navalha-do-cais.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'markos':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="ogum.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg" class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="obaluaie.jpg" class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg" class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg" class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg" class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg" class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="tranca-rua-das-almas.jpg" class="icon top-icon"><img src="pombagira-menina.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'andre':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="obaluaie.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="nana.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="pilao-deitado.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="pai-mane.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="exu-caveira.jpg"  class="icon top-icon"><img src="rosa-caveira.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'joao':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="exu.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="tranca-rua-das-7-encruzilhadas.jpg"  class="icon top-icon"><img src="sem-foto.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'benca':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="oxossi.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="mirim-caveirinha.jpg"  class="icon top-icon"><img src="sem-foto.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'lino':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="xango.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="exu-mare.jpg"  class="icon top-icon"><img src="sem-foto.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'gordo':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="ogum.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="oxum.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="tiriri.jpg"  class="icon top-icon"><img src="sem-foto.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'jennifer':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="iansa.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="oxossi.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="quiteria.jpg"  class="icon top-icon"><img src="exu-morcego.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'rodrigo':
        extraHTML = `
            <p class="icon-paragraph"><strong>Inicio na Tenda:</strong> ${card.dataset.tempo_de_casa}</p>
            <p class="icon-paragraph"><strong>Búzios:</strong> ${card.dataset.buzios}</p>
            <p class="icon-paragraph"><img src="oxalufa.jpg" class="icon top-icon"> <strong>Orixá de Frente:</strong> ${card.dataset.orixa_de_frente}</p>
            <p class="icon-paragraph"><img src="iemanja.jpg"  class="icon top-icon"> <strong>Orixá de Costas:</strong> ${card.dataset.orixa_de_costas}</p>
            <p class="icon-paragraph"><img src="nana.jpg"  class="icon top-icon"> <strong>Orixá de Enredo:</strong> ${card.dataset.orixa_de_enredo}</p>
            <p class="icon-paragraph"><img src="ze-baiano.jpg"  class="icon top-icon"> <strong>Mestre Juremeiro:</strong> ${card.dataset.mestre}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha dos Caboclos:</strong> ${card.dataset.cablocos}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Linha das Almas:</strong> ${card.dataset.almas}</p>
            <p class="icon-paragraph"><img src="sem-foto.jpg"  class="icon top-icon"> <strong>Ibejada:</strong> ${card.dataset.ibejada}</p>
            <p class="icon-paragraph"><img src="exu-veludo.jpg"  class="icon top-icon"><img src="sem-foto.jpg"  class="icon top-icon"><strong>Linhas de Esquerda:</strong> ${card.dataset.esquerda}</p>
            <p class="icon-paragraph"><strong>Obrigações:</strong> ${card.dataset.obrigacoes}</p>
          `;
        break;

      case 'ponto':
        extraHTML = `
            <p class="icon-paragraph"><strong>Nome Ponto:</strong> ${card.dataset.nomeponto}</p>
            <p class="icon-paragraph"><strong></strong>${card.dataset.pontotexto}</p>
          `;
        break;

      case 'banho':
        extraHTML = `
            <p class="icon-paragraph"><strong>Tipo de Banho:</strong> ${card.dataset.tipobanho}</p>
            <p class="icon-paragraph"><strong>Modo de Preparo:</strong>${card.dataset.preparo}</p>
            <p class="icon-paragraph"><strong></strong>${card.dataset.banho}</p>
          `;
        break;

      case 'guias':
        extraHTML = `
            <p class="icon-paragraph"><strong>Tipo de Banho:</strong> ${card.dataset.tipobanho}</p>
            <p class="icon-paragraph"><strong>Modo de Preparo:</strong>${card.dataset.preparo}</p>
            <p class="icon-paragraph"><strong></strong>${card.dataset.banho}</p>
          `;
        break;

      case 'conhecimentos':
        extraHTML = `
            <p class="icon-paragraph"><strong>Expilicação:</strong>${card.dataset.explicacao}</p>
            <p class="icon-paragraph"><strong></strong>${card.dataset.texto}</p>
          `;
        break;

      case 'odus':
        extraHTML = `
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.stefanie}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odustefanie}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.markos}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odumarkos}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.lino}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odulino}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.joao}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odujoao}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.joaozinho}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odujoaozinho}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.gordo}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odugordo}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.liliane}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.oduliliane}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.jennifer}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.odujennifer}</p>
            <p class="icon-paragraph"><strong>Filho:</strong>${card.dataset.andre}</p>
            <p class="icon-paragraph"><strong>Odu:</strong> ${card.dataset.oduandre}</p>
          `;
        break;

      default:
        extraHTML = `<p>Informações não disponíveis.</p>`;
    }

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${img}" alt="${nome}">
        <h2>${nome}</h2>
        ${extraHTML}
      `;

    document.getElementById("modal").style.display = "block";
  });
});

document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target.matches(".close") || e.target === modal) {
    modal.style.display = "none";
  }
});