const dataCards = [
    {
        "id": 0,
        "nome": "Organo",
        "capa": "assets/images/projetos-card/organo.png",
        "descricao": "Esse projeto é um teste de descrição",
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
            "teste",
            "teste",
            "teste"
        ],
        "video": "assets/videos/organo-video.webm"
    },
    {
        "id": 0,
        "nome": "Organo",
        "capa": "assets/images/projetos-card/organo.png",
        "descricao": "Esse projeto é um teste de descrição",
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
            "teste",
            "teste",
            "teste"
        ],
        "video": "assets/videos/organo-video.webm"
    }
]

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
                            ${data.funcionalidades.map((funcionalidade) => `<li>${funcionalidade}</li>`).join("")}
                        </ol>
                        <ul class="projetos-lista__item--conteudo__lista-imagens">
                            ${data.tecnologias.map((tecnologia) => `<li><img src=${tecnologia.icone} alt=${tecnologia.nome} /></li>`).join("")}
                        </ul>
                        <div class="projetos-lista__item--conteudo--botoes">
                            <button type="button" onclick=modalCard("${data.video}")>Prévia Projeto</button>
                            <a href=${data.repositorio} target="_blank">Repositório</a>
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

defineCards(dataCards);
