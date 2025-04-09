//Crie um menu para executar os exercícios feitos anteriormente. As opções do menu serão as seguintes:

/*[1] Somar dois números;

[2] Subtrair dois números;

[3] Buscar quantidade números pares;

[4] Buscar quantidade números impares;

[5] Buscar quantidade números primos;

[6] Sair.*/

let opcao = 0;
console.log("Menu Calculadora Interativa");
do {
  console.log(
    "[1] Soma\n[2] Subtração\n[3] Buscar quantidade números pares\n[4] Buscar quantidade números impares\n[5] Buscar quantidade números primos\n[6] Sair"
  );
  opcao = prompt("Escolha a opção desejada: ");

  switch (opcao) {
    case "1":
      soma();
      break;
    case "2":
      subtracao();
      break;
    case "3":
      buscaQuantidadeNumerosPares();
      break;
    case "4":
      buscaQuantidadeNumerosImpares();
      break;
    case "5":
      buscaQuantidadeNumerosPrimos();
  }
} while (opcao != 6);

function soma() {
  let num1 = parseInt(prompt("Digite o primeiro numero da soma(+): "));
  let num2 = parseInt(prompt("Digite o segundo numero da soma(+): "));

  console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

function subtracao() {
  let num1 = parseInt(prompt("Digite o primeiro numero da Subtração(-): "));
  let num2 = parseInt(prompt("Digite o segundo numero da Subtração(-): "));

  console.log(num1 + "-" + num2 + "=" + (num1 - num2));
}

function buscaQuantidadeNumerosPrimos() {
  let numPrimo = parseInt(
    prompt("Digite o número para verificar quantos primos existem até ele: ")
  );
  let quantidadeNumeroPrimos = 0;

  for (let contagem = 2; contagem <= numPrimo; contagem++) {
    let ehPrimo = true;

    for (let i = 2; i * i <= contagem; i++) {
      if (contagem % i === 0) {
        ehPrimo = false;
        break;
      }
    }

    if (ehPrimo) {
      quantidadeNumeroPrimos++;
    }
  }

  console.log(
    "Considerando o número " +
      numPrimo +
      ", temos " +
      quantidadeNumeroPrimos +
      " números primos."
  );
}

function buscaQuantidadeNumerosPares() {
  let num = parseInt(
    prompt("Digite o número para verificar quantos pares existem até ele: ")
  );
  let quantidadePares = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      quantidadePares++;
    }
  }

  console.log(
    "Considerando o número " +
      num +
      ", temos " +
      quantidadePares +
      " números pares."
  );
}

function buscaQuantidadeNumerosImpares() {
  let num = parseInt(
    prompt("Digite o número para verificar quantos ímpares existem até ele: ")
  );
  let quantidadeImpares = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      quantidadeImpares++;
    }
  }

  console.log(
    "Considerando o número " +
      num +
      ", temos " +
      quantidadeImpares +
      " números ímpares."
  );
}
