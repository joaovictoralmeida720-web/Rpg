const personagens = [

    {
        nome: "Precy Campbey",
        arquetipo: "Nerd",
        idade: "xx",
        descricao: "Percy é um garoto jovem e amigável(o que não significa que ele seja exatamente uma boa pessoa). Ele é estudioso e pensativo, sempre carregando seus livros e uma cartela de cigarros novinhos. Diferenciando-se do habitual para essa viagem parece estranhamente empenhado para querer aproveitar e explorar o ambiente ao redor.",
        imagem: "imagens/precy.png",
        imagem2: "imagens/precy2.png"
    },

    {
        nome: "Jennifer Devenport",
        arquetipo: "Esbelta",
        idade: "xx",
        descricao: "Jennifer Davenport é um estrondo por si só, rainha do baile, viciada em redes sociais e em colecionar memórias, sabe que é intensa e admira isso nela, quer viver como se não houvesse amanhã. Rica de berço, seu dinheiro é quase uma parte de si, adora aventuras caras, luxuosas e irresponsáveis, especialmente quando ao lado dos seus servos, ou melhor, seus amigos.",
        imagem: "imagens/jennifer.png",
        imagem2: "imagens/jennifer2.png"
    },

    {
        nome: "Ellen Carter",
        arquetipo: "Heróina",
        idade: "xx",
        descricao: "Ellen Carter é uma garota curiosa, um pouco até demais, tanto que, por causa disso, ela meio que se meteu em um acidente envolvendo sua perna... Mas isso é história para outra hora. Ellen adora fazer amizades, sempre sendo vista como alguém gentil. Quando é pelos amigos, Ellen dá sempre um passo à frente, sempre se preocupando com as pessoas ao redor.",
        imagem: "imagens/ellen.png",
        imagem2: "imagens/ellen2.png"
    },

    {
        nome: "Hana Mizuno",
        arquetipo: "Inocente",
        idade: "xx",
        descricao: "Hana Mizuno é uma garota japonesa que já faz 2 anos que se mudou para o Canadá. Ela é a clássica garota legal e amigável com a maioria das pessoas, além de ser muito curiosa. Sua estação favorita com certeza é inverno. Ela ama animais e adora guardar memórias em sua pequena Polaroid. Algumas vezes, pode ser bem lerda, mas tem um grande coração com certeza.",
        imagem: "imagens/hana.png",
        imagem2: "imagens/hana2.png"
    },

    {
        nome: "Slever Trevor",
        arquetipo: "Cético",
        idade: "xx",
        descricao: "Selever sempre foi o tipo de pessoa que leva tudo pro lado racional. Histórias de fantasmas, maldições e assassinos mascarados nunca passaram de exageros para assustar os outros. Enquanto seus amigos entravam em pânico com qualquer barulho estranho, ele era o primeiro a procurar uma explicação racional. Ignorante, observador e um tanto convencido em seu proprio dilema, costuma achar que consegue pensar melhor sob pressão do que as pessoas ao seu redor. Talvez tenha sido arrastado pra essa viagem, mas do mesmo jeito que não está animado, também não está ansioso, afinal, o que poderia dar errado?",
        imagem: "imagens/slever.png",
        imagem2: "imagens/slever2.png"
    },

    {
        nome: "Elian Morean",
        arquetipo: "Atleta",
        idade: "xx",
        descricao: "Elian Moreau é um atleta de alto nível e ex-competidor internacional de judô. Disciplinado, esforçado e altruísta, possui uma forte mentalidade e toma boas decisões mesmo sob pressão, mas não é dos mais inteligentes fora das lutas. Após uma grave lesão no joelho, abandonou as competições mesmo após se recuperar, mas continuou treinando, embora sua teimosia frequentemente o coloque em situações complicadas.",
        imagem: "imagens/elian.png",
        imagem2: "imagens/elian2.png"
    },

    {
        nome: "Adam Miler",
        arquetipo: "Valentão",
        idade: "20",
        descricao: "Adam é o tipo de pessoa que nunca admite estar com medo. Confiante, provocador e impulsivo, ele sempre tenta assumir o controle das situações e proteger sua imagem de “durão”",
        imagem: "imagens/Adam.png",
        imagem2: "imagens/Adam2.png"
    },

    {
        nome: "Jeorgina William",
        arquetipo: "Relaxada",
        idade: "21",
        descricao: "Jeorgina é provavelmente a pessoa mais tranquila do grupo. Enquanto todos começam a entrar em pânico, ela tenta manter a cabeça no lugar e levar as coisas com bom humor.",
        imagem: "imagens/Jeorgina.png",
        imagem2: "imagens/Jeorgina2.png"
    },

    {
        nome: "Miguel Rodrigues ",
        arquetipo: "Herói ",
        idade: "22",
        descricao: "Miguel é aquele que não consegue simplesmente assistir alguém se colocando em perigo. Corajoso, protetor e disposto a assumir riscos pelos outros, ele naturalmente acaba ocupando o papel de líder quando as coisas começam a dar errado, Mesmo sabendo que pode se machucar.",
        imagem: "imagens/Miguel.png",
        imagem2: "imagens/Miguel2.png"
    },

    {
        nome: "Gabi Gonzaga",
        arquetipo: "Nerd",
        idade: "19",
        descricao: "Gabi Gonzaga é reservada, observadora e tem aquele jeito naturalmente sombrio que faz parecer que ela já esperava que alguma coisa desse errado. Gótica e pouco impressionada com as brincadeiras dos outros, prefere ficar na dela, observando tudo em silêncio antes de falar.",
        imagem: "imagens/Gabi.png",
        imagem2: "imagens/Gabi2.png"
    },

    {
        nome: "Linda Smith",
        arquetipo: "Cética ",
        idade: "20",
        descricao: "Linda não acredita em histórias assustadoras, lendas ou qualquer explicação sobrenatural. Para ela, todo acontecimento possui uma causa lógica, mesmo que ainda não seja conhecida.",
        imagem: "imagens/linda.png",
        imagem2: "imagens/linda2.png"
    },

    {
        nome: "Val Thompson",
        arquetipo: "Relaxado",
        idade: "21",
        descricao: "Val Thompson é um garoto brincalhão, extrovertido e cheio de confiança. Adora provocar os amigos, fazer piadas nos momentos errados e agir como se nada fosse capaz de assustá-lo.",
        imagem: "imagens/val.png",
        imagem2: "imagens/val2.png"
    },

];


// =========================
// ELEMENTOS DO HTML
// =========================

const conteudo = document.getElementById("conteudo");

const botaoInicio = document.getElementById("botaoInicio");

const botaoPersonagens = document.getElementById("botaoPersonagens");


// =========================
// EVENTOS
// =========================

botaoInicio.addEventListener("click", mostrarInicio);

botaoPersonagens.addEventListener("click", mostrarPersonagens);


// =========================
// PÁGINA INICIAL
// =========================

function mostrarInicio() {

    conteudo.innerHTML = `

        <section class="abertura">

            <h2>Bem-vindo</h2>

            <p>
                Uma breve introdução sobre o universo
                e os acontecimentos deste RPG.
            </p>

        </section>


        <section class="personagensInicio">

            <h2>Personagens</h2>

            <div class="personagensGrid" id="personagensInicioGrid">

            </div>

        </section>

    `;


    const lista =
        document.getElementById("personagensInicioGrid");


    personagens.forEach(function(personagem, indice) {

        lista.innerHTML += `

            <div
                class="personagemInicio"
                onclick="mostrarPersonagem(${indice})"
            >

                <div class="artesPersonagem">

                    <img
                        src="${personagem.imagem}"
                        alt="Arte de ${personagem.nome}"
                    >

                    <img
                        src="${personagem.imagem2}"
                        alt="Segunda arte de ${personagem.nome}"
                    >

                </div>


                <h3>
                    ${personagem.nome}
                </h3>


                <p>
                    ${personagem.arquetipo}
                </p>

            </div>

        `;

    });

}


// =========================
// MOSTRAR PERSONAGENS
// =========================

function mostrarPersonagens() {

    conteudo.innerHTML = `

        <h2>Personagens</h2>

        <p>
            Conheça os personagens deste mundo.
        </p>


        <div id="listaPersonagens"></div>

    `;


    const lista =
        document.getElementById("listaPersonagens");


    personagens.forEach(function(personagem, indice) {

        lista.innerHTML += `

            <div
                class="card"
                onclick="mostrarPersonagem(${indice})"
            >

                <h3>
                    ${personagem.nome}
                </h3>

                <p>
                    Arquétipo: ${personagem.arquetipo}
                </p>

            </div>

        `;

    });

}


// =========================
// FICHA DO PERSONAGEM
// =========================

function mostrarPersonagem(indice) {

    const personagem = personagens[indice];


    conteudo.innerHTML = `

        <div class="fichaPersonagem">

            <button onclick="mostrarPersonagens()">
                ← Voltar
            </button>


            <div class="perfil">

                <img
                    src="${personagem.imagem}"
                    alt="Imagem de ${personagem.nome}"
                >


                <div class="informacoes">

                    <h2>
                        ${personagem.nome}
                    </h2>


                    <p>
                        <strong>Arquétipo:</strong>
                        ${personagem.arquetipo}
                    </p>


                    <p>
                        <strong>Idade:</strong>
                        ${personagem.idade} anos
                    </p>

                </div>

            </div>


            <div class="descricao">

                <h3>Sobre</h3>

                <p>
                    ${personagem.descricao}
                </p>

            </div>

        </div>

    `;

}


// =========================
// ABRIR A PÁGINA INICIAL
// =========================

mostrarInicio();