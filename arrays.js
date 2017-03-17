let lista = ['leite', 'agua', 'banana'];
document.write(lista  + '<br>');
document.write(lista.length + '<br>');
document.write(lista[1] + '<br>');

lista[1] = 'panela'; //alterando o item da posicao 1
document.write(lista[1] + '<br>');

//excluir item da lista do array

//elimina primeiro item da lista
lista.shift(); //remove "leite"
document.write(lista  + '<br>');

//elimina ultimo item da lista
lista.pop(); //remove "banana"
document.write(lista  + '<br>');
//fica só panela

//INSERIR UM NOVO VALOR NO ARRAY

lista.unshift('pedra'); //insere na PRIMEIRA posicao do array
document.write(lista  + '<br>');


lista.push('cascalho'); //insere na posicao FINAL do array
document.write(lista  + '<br>');

//remover um item especifico do array
lista.splice(1,1);//vai remover panela - 1,1 = item 1, apenas 1 item
document.write(lista  + '<br>');


//WHILE --- LOOPS
let i = 0;
while (i <= 10) {
    document.write(i + '<br>');
    i++;
}

//Usando o for
for (let i = 0; i < 10; i++) {
    document.write(i + '<br>');
}

//Varrendo o Array
for (let i = 0; i < lista.length; i++) {
    document.write(lista[i] + '<br>');
}

//USO DO IF...

if (3 === 3) {
    document.write('é igual...<br>');
}else {
    document.write('é diferente...<br>');
}
//Exemplo com idade
//let idade = 17;
if (idade > 18) {
    document.write('maior de idade');
} else {
    document.write('menor de idade!');
}

//Exemplo mais complexo com mais de duas opçoes

//let idade = 22;
if (idade === 22) {
    document.write('Voce tem 22 anos!');
} else if (idade >= 18) {
    document.write('maior de Idade!');
} else {
    document.write('menor de idade!');
}

//manipulando for
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; //para na terceira posicao ou elemento
        //caso quisesse que ele pulasse o terceiro elemento entao usaria o "continue;"
    }
    document.write(i + '<br>');
}

//switch
let idade = 22;
switch (idade) {
    case 17:
        document.write('tem 17 anos!'+'<br>');
        break;
    case 18:
        document.write('tem 18 anos!'+'<br>');
        break;
    case 22:
        document.write('tem 22 anos!'+'<br>');
        break;
    default:
    document.write('Você não digitou idade nenhuma'+'<br>');
    break;
}
