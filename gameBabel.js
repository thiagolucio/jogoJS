//criando o canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
// document.getElementsByTagName('body')[0].appendChild(canvas);
document.body.appendChild(canvas);


//imagem de fundo
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = 'images/palco.jpg';

//Imagem do Heroi
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = 'images/heroi.png';

//Imagem do vilao
let monsterReady = false;
const monsterImage = new Image();
mosterImage.onload = function() {
    monsterReady = true;
};
monsterImage.src = 'images/vilao.png';

//Objetos do jogo

const hero = {
    speed: 256 //velocidade em pixels por segundo do heroi
};
const monster = {};
let monsterCaught = 0; //criando um monstro pra contabilizar quantos monstros o heroi pega

//Controle de teclado
const keysDown = {}; //vai receber o valor true quando a tecla for apertada
window.addEventListener('Keydown', function(e) {
    keysDown[e.keyCode] = true; //quando a tecla (qualquer uma) for pressionada, registra o evento.
}, false);

window.addEventListener('Keyup', function(e) {
    delete keysDown[e.keyCode]; //deleta o valor da tecla apertada (interrompe por assim dizer) na constante KeysDown
}, true);

//Reseta o jogo quando o jogador pega o monstros
const reset = function() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    //Posiciona o monstro randomicamente na tecla
    monster.x = 64 + (Math.random() * (canvas.width - 64)); //o monstro vai sair do ponto 64 + um valor randomico com uma distante das bordas laterais de 64px
    monster.y = 64 + (Math.random() * (canvas.height - 64)); //o monstro vai sair do ponto 64 + um valor randomico com uma distante das bordas superior e inferior de 64px
};

//Atualizar os objetos do jogo
const update = function(modifier) {
    if (38 in keysDown) { //Pressione a seta para cima com codigo keyEvent = 38
        hero.y -= hero.speed * modifier; // o sinal de menos antes do igual ou receber é uma forma de reducao de codigo que é igual a hero.y = hero.y - hero.speed * modifier
    }
    if (40 in keysDown) { //Pressione a seta para baixo com codigo keyEvent = 40
        hero.y += hero.speed * modifier; // o sinal de menos antes do igual ou receber é uma forma de reducao de codigo que é igual a hero.y = hero.y - hero.speed * modifier
    }
    if (37 in keysDown) { //Pressione a seta para esquerda com codigo keyEvent = 37
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { //Pressione a seta para direita com codigo keyEvent = 39
        hero.x += hero.speed * modifier;
    }
    //Verificar se os personagens se encontaram.
    if (
        hero.x <= (monster.x + 64) &&
        monster.x <= (hero.x + 64) &&
        hero.y <= (monster.y + 64) &&
        monster.y <= (hero.y + 64)
    ) {
        ++monsterCaught;
        reset();
    }
};
//Renderizando tudo
const render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0); //posicionando o fundo em 0 left e 0 top
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y); //se a funcao que carrega imagem do heroi carregou imagem então coloque a imagem na posicao pre-definida
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y); //se a funcao que carrega imagem do monstro carregou imagem então coloque a imagem na posicao aleatoria pre-definida
    }
    //inserindo estilo da tela do jogo...
    ctx.fillStyle = 'rgb(250,250,250)'; //inserindo cor branca no fundo
    ctx.font = '24px Helvetica';
    ctx.textAlign = 'left';
    ctx.fillText('Monstros pegos: ' + monsterCaught, 32, 32); //posicionando o texto de monstros pegos na tela com o contador
};

//Controlador do loop do jogo
const main = function() {
    const now = Date.now();
    const delta = now - then;

    update(delta / 1000);
    render();
    then = now;
    //executa isso o mais rapidamente possivel requestAnimationFrame
    requestAnimationFrame(main);
};
//Suporte cross-browser para requestAnimationFrame
const w = window;
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
//Que comece o jogo
let then = Date.now();
reset();
main();