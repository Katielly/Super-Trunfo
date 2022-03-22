var carta1 = {
    nome: "Thena",
    imagem:
      "https://epipoca.com.br/wp-content/uploads/2021/10/Angelina-Jolie-como-Thena-em-Eternos-Divulgacao.jpg",
    atributos: {
      ataque: 789,
      defesa: 650,
      magia: 460
    }
  };
  
  var carta2 = {
    nome: "Sersi",
    imagem:
      "https://ovicio.com.br/wp-content/uploads/2021/11/20211105-maxresdefault-555x555.jpg",
    atributos: {
      ataque: 873,
      defesa: 799,
      magia: 832
    }
  };
  
  var carta3 = {
    nome: "Druig",
    imagem:
      "https://epipoca.com.br/wp-content/uploads/2021/11/Barry-Keoghan-como-Druig-em-Eternos-Divulgacao.jpg",
    atributos: {
      ataque: 712,
      defesa: 951,
      magia: 700
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
  
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
  
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'> Venceu </p>";
    } else if (
      cartaMaquina.atributos[atributoSelecionado] >
      cartaJogador.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'> Perdeu </p>";
    } else {
      htmlResultado = "<p class='resultado-final'> Empatou </p>";
    }
  
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesText = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesText +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesText = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesText +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
  }
  