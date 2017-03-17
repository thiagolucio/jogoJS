//a funcao calcula o quadrado pra qualquer numero
function quadrado(num) {
    return num * num;
}
document.write(quadrado(3) + '<br>');//pode ser colocado qualquer numero no lugar do 3 pra calcular o quadrado

//exemplo de soma de dois valores sempre
function soma (num1, num2) {
    return num1 + num2;
}
document.write(soma(8, 12) + '<br>');

//expressao de funcao
let divisao = function (n1, n2) {
    return n1 / n2;
}
document.write(divisao(38, 2) + '<br>');

//arrow function ou funcao de seta
let quadradoArrow = num => { // se for colocar mais de um valor segue a mesma regra de funcao normal (num, num2)
    return num * num;
}
document.write(quadrado(2) + '<br>');
