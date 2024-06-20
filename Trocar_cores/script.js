// Declarando um array de cores
let array_cores = ['red', 'green', 'blue', 'orange', 'purple', 'orange', 'pink', 'aqua', 'aquamarine', 'violet', 'blueviolet', 'brown', 'cyan', 'chocolate', 'darkblue'];

// Usando a função para no inicializar da página já renderizar uma cor aleatória
mudar_cor(array_cores);

// Definindo o botão
let button = document.querySelector('.button');

// Adicionando um evento no botão
button.addEventListener('click', (e) => {

    // Tirando o comportamento padrão do evento
    e.preventDefault();

    // Chamando função de mudar cores
    mudar_cor(array_cores);

});

// Função de mudar cores -- Parametro array de cores
function mudar_cor(cores){

    // Definindo uma cor específica
    let cor = cores[gerar_numero_aleatorio(cores.length)];

    // Mostrando o nome da cor na tela
    document.querySelector('#text_background').innerHTML = `Cor de Fundo: ${cor.toUpperCase()}`;

    // Mudando a cor do body pela cor aleatória selecionada
    document.querySelector('body').style.background = cor;

}

// Função para gerar numero aleátorio para obter cor aleátoria no index do array
function gerar_numero_aleatorio(num){

    // Inicializando número aleatório
    let numero = Math.round(Math.random() * num);

    // Retornando número aleatório
    return numero;

}