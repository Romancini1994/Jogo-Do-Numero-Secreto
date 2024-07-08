alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = parseInt(Math.random()* 100 + 1);
console.log (numeroSecreto);
let chute
let tentativas = 1;

//enquanto chute nao for igual ao n.s
while (chute != numeroSecreto) {
  chute = prompt (" Escolha o numero entre 1 e 100");
  // se chute for igual ao numero secreto
  if (chute == numeroSecreto){
    break;
  } else {
    if (chute > numeroSecreto) {
      alert (`numero secreto e menor que ${chute}`);
    } else{
      alert(`numero secreto e maior que ${chute} `);
    }
    tentativas = tentativas +1;
    tentativas++
   }
}


let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
alert (`isso ai, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//if (tentativas >1) {
//  alert(`isso ai, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`); 
//} else {
//alert(`isso ai, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`); 
// }