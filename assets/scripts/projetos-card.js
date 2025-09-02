function criaDados() {
    const dataCards = [
        {
            "id": 1,
            "nome": "Organo",
            "capa": "assets/images/projetos-card/organo.png",
            "descricao": "Organo é um aplicativo desenvolvido com ReactJS. Trata-se de um app que cadastra e gerencia equipes de colaboradores em uma determinada empresa.",
            "repositorio": "https://github.com/Peixoto1990/organo",
            "tecnologias": [
                {
                    "nome": "HTML 5",
                    "icone": "assets/images/icons/html-5.png"
                },
                {
                    "nome": "CSS 3",
                    "icone": "assets/images/icons/css-3.png"
                },
                {
                    "nome": "Javascript",
                    "icone": "assets/images/icons/js.png"
                },
                {
                    "nome": "ReactJS",
                    "icone": "assets/images/icons/react.png"
                }
            ],
            "funcionalidades": [
                "Cadastrar novos colaboradores",
                "Excluir colaboradores",
                "Cadastrar novos times"
            ],
            "video": "assets/videos/organo-video.webm"
        },
        {
            "id": 2,
            "nome": "Pokedex",
            "capa": "assets/images/projetos-card/pokedex.png",
            "descricao": "Pokedex é um aplicativo web que consome dados da PokéAPI e os exibe de forma intuitiva e dinâmica na interface. O objetivo é apresentar informações sobre os Pokémon de maneira acessível e visualmente organizada.",
            "repositorio": "https://github.com/Peixoto1990/js-developer-pokedex",
            "tecnologias": [
                {
                    "nome": "HTML 5",
                    "icone": "assets/images/icons/html-5.png"
                },
                {
                    "nome": "CSS 3",
                    "icone": "assets/images/icons/css-3.png"
                },
                {
                    "nome": "Javascript",
                    "icone": "assets/images/icons/js.png"
                }
            ],
            "funcionalidades": [
                "Buscar informações sobre Pokemons",
                "Construir o card dos Pokemons",
                "Exibir modal com informações detalhadas"
            ],
            "video": "assets/videos/pokedex-video.webm"
        },
        {
            "id": 3,
            "nome": "Snake Game",
            "capa": "assets/images/projetos-card/snake.png",
            "descricao": "Snake é um jogo web desenvolvido com elementos HTML para construir o corpo da cobra e propriedades CSS para criar o movimento. Trata-se da clássica cobrinha, recriada com tecnologias modernas para o navegador.",
            "repositorio": "https://github.com/Peixoto1990/snake",
            "tecnologias": [
                {
                    "nome": "HTML 5",
                    "icone": "assets/images/icons/html-5.png"
                },
                {
                    "nome": "CSS 3",
                    "icone": "assets/images/icons/css-3.png"
                },
                {
                    "nome": "Javascript",
                    "icone": "assets/images/icons/js.png"
                }
            ],
            "funcionalidades": [
                "Construir o corpo de cobra",
                "Verificar colisões com o corpo",
                "Gerenciar pontos"
            ],
            "video": "assets/videos/snake-video.webm"
        }
    ]

    return dataCards;
}

function criaCard(data) {
    return `
        <li class="projetos-lista__item">
                    <div class="projetos-lista__item--imagem">
                        <img src=${data.capa} alt="Capa do projeto ${data.nome}">
                    </div>
                    <div class="projetos-lista__item--conteudo">
                        <h3>${data.nome}</h3>
                        <p>
                            ${data.descricao}
                        </p>
                        <ol class="projetos-lista__item--conteudo__lista-funcionalidades">
                            <h4>Funcionalidades</h4>
                            ${data.funcionalidades.map((funcionalidade) => `<li>${funcionalidade}</li>`).join("")}
                        </ol>
                        <ul class="projetos-lista__item--conteudo__lista-imagens">
                            ${data.tecnologias.map((tecnologia) => `<li><img src=${tecnologia.icone} alt=${tecnologia.nome} /></li>`).join("")}
                        </ul>
                        <div class="projetos-lista__item--conteudo--botoes">
                            <button class="button" type="button" onclick=modalCard("${data.video}")>Prévia Projeto</button>
                            <a class="button" href=${data.repositorio} target="_blank">Repositório</a>
                        </div>
                    </div>
                </li>
    `
}

function modalCard(video) {
    const modalHTML = `
        <div id="modal-card--projetos">
        <button id="modal-card--projetos__btn">x</button>
        <div class="modal-card--projetos__video">
            <video autoplay src=${video} muted loop></video>
        </div>
        </div>
    `

    document.getElementById("container-modal-projetos-card").innerHTML = modalHTML;

    const botaoModalCard = document.querySelectorAll("#modal-card--projetos__btn");

    botaoModalCard.forEach((botao) => {
        botao.addEventListener("click", (ev) => {
            ev.target.parentElement.remove();
        })
    })
}

function defineCards(dataCards) {
    const listaProjetos = document.getElementById("projetos-lista");
    const htmlElementCards = dataCards.map((data) => {
        return criaCard(data);
    }).join("");

    listaProjetos.innerHTML += htmlElementCards;
}

defineCards(criaDados());
