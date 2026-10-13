let jogoEncerrado = false;
function verificaSeOChutePossuiUmValorValido(chute) {
  const texto = String(chute).trim();
  const numero = Number(texto);
  if (!texto || !Number.isInteger(numero) || numero < menorValor || numero > maiorValor) {
    elementoChute.textContent += `Informe um número inteiro entre ${menorValor} e ${maiorValor}.`;
    return;
  }
  if (numero === numeroSecreto) {
    jogoEncerrado = true;
    recognition?.abort();
    elementoChute.textContent = `Você acertou! O número secreto era ${numeroSecreto}.`;
    document.getElementById("palpite").disabled = true;
    document.getElementById("enviar-palpite").disabled = true;
    botaoVoz.disabled = true;
    const reiniciar = document.getElementById("jogar-novamente");
    reiniciar.hidden = false;
    reiniciar.focus();
  } else {
    elementoChute.textContent += numero < numeroSecreto ? "O número secreto é maior." : "O número secreto é menor.";
  }
}
document.getElementById("jogar-novamente").addEventListener("click", () => window.location.reload());
