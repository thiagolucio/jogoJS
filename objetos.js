let caneta = {
    cor: 'preto',
    marca: 'BIC'
};
document.write(caneta.marca + '<br>');
document.write(caneta.cor + '<br>');

//outra forma de declarar
let caneta1 = {};
caneta1.cor =  'azul';
caneta1.marca =  'COMPACTOR';

document.write(caneta1.marca + '<br>');
document.write(caneta1.cor + '<br>');

//outra forma
let caneta2 =  {};
let propriedade = 'marca';
caneta2[propriedade] = 'FABERCASTEL';
document.write(caneta2.marca + '<br>');

//outra forma
let caneta3 =  {};
caneta3['cor da caneta'] = 'vermeia';
document.write(caneta3['cor da caneta'] + '<br>');

//return
let caneta4 = {
    cor: 'rosaPink',
    minhaCor: function() {
        return 'A cor da Caneta 4 é: ' + this.cor;
    }
};
document.write(caneta4.minhaCor());
