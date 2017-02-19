document.write((5 * '10') + '<br>');
document.write((5 > '10') + '<br>');
document.write((11 > '10') + '<br>');

document.write((10 == 10) + '<br>');

document.write((10 == '10') + '<br>'); //JS tenta converter a string sendo numero pra numero
document.write((10 === '10') + '<br>');

document.write((10 !== '10') + '<br>');//true, é extritamente diferente
document.write((10 !== 10) + '<br>'); // false, eles sao extritamente iguais


document.write((5 > 10) && (5 < 10) + '<br>'); // so retorna verdade se os dois valores forem verdadeiros, entao false.
document.write((5 > 10) && (5 < 10) && (10 === 10) + '<br>'); //se um valor no meio for false entao o resultado é falso

document.write((5 > 10) || (5 < 10) + '<br>'); // basta que um seja verdadeiro para que o resultado seja verdadeiro


document.write(!(5 > 10) + '<br>'); // com operador de negacao o falso vira verdadeiro. Negacao nega o resultado !
document.write(!!(5 > 10) + '<br>'); // usando duas vezes o operador de negacao ele mostra o resultado verdadeiro

//Operador Ternário
document.write((1 > 2 ? 'é maior' : 'é menor') + '<br>');
/* Vai testar se é verdadeiro ou falso:
- Se falso: Executa o que tiver depois dos dois pontos
- Se verdadeiro:  Executao que estiver logo depois do ponto de interrogação.
*/
