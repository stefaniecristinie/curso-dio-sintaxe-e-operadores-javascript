//Crie uma função que recebe dois números como parâmetros;
//Confira se os números são iguais;
//Confira se a soma dos números é maior que 10 ou menor que 20;
//Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
//Exemplo:
//Input: 1, 2
//Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

//function comparaNumeros(num1, num2) { 
//    const saoIguais = num1 === num2; 
//    const soma = num1 + num2;

//    if(!saoIguais) {// ! = ficam opostos - 1º não são iguais e 2º são iguais.
//        return "São iguais";
//    }

//   return "Não são iguais";

    //ou

//    return saoIguais ? "São Iguais" : "Não são iguais"; // Condicional (ternário).
//} 

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`; //$ = concatenação.
}

function criaPrimeiraFrase(num1, num2) {
	let saoIguais = '';//let = variável.

	if (num1 !== num2) {//valor e tipos diferentes.
		saoIguais = 'não';
	}

	return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;

	let resultado10 = 'menor';
	let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20= soma > 20;

	if (compara10) {
		resultado10 = 'maior';
	}

	if (compara20) {
		resultado20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultado10} do que 10 e ${resultado20} do que 20.`;
}

console.log(comparaNumeros(1, 2));