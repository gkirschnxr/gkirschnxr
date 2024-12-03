alert("Bem vindo ao jogo do número secreto!");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log("resposta: " + numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute for diferente de...
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    console.log("Chute do usuario: " + chute);

// se chute for igual ao numero secreto:
    if (chute == numeroSecreto) {           
        // para colocar uma variavel no meio da mensagem tambem pode se utilizar crase ``
            console.log("usuario acertou");

    } else {
             console.log("usuario errou");

          if (chute > numeroSecreto) {
                alert (`O número secreto é menor que ${chute}`);

          } else {
                alert (`O número secreto é maior que ${chute}`);

            }
                tentativas++
      }
} 

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
    alert (`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}! Parabéns!`)

// if (tentativas > 1) {
//     alert(`Você descobriu o número secreto com ${tentativas} tentativas! Parabéns!`);

// } else {
//     alert(`Você descobriu o número secreto com ${tentativas} tentativa! Parabéns!`);

//   }