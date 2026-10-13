const elementoChute = document.getElementById("chute");
const botaoVoz = document.getElementById("ouvir");
const statusVoz = document.getElementById("status-voz");
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
if (SpeechRecognitionAPI) {
  recognition = new SpeechRecognitionAPI();
  recognition.lang = "pt-BR";
  recognition.addEventListener("result", evento => jogar(evento.results[0][0].transcript));
  recognition.addEventListener("end", () => { botaoVoz.disabled = jogoEncerrado; });
  recognition.addEventListener("error", () => { statusVoz.textContent = "Não foi possível ouvir. Confira a permissão do microfone ou digite seu palpite."; });
  botaoVoz.addEventListener("click", () => {
    try { recognition.start(); botaoVoz.disabled = true; statusVoz.textContent = "Ouvindo… diga um número."; }
    catch { botaoVoz.disabled = false; statusVoz.textContent = "Tente novamente ou digite seu palpite."; }
  });
} else {
  botaoVoz.hidden = true;
  statusVoz.textContent = "Seu navegador não oferece reconhecimento de voz. Você pode jogar digitando.";
}
function jogar(chute) {
  if (jogoEncerrado) return;
  elementoChute.textContent = `Seu palpite: ${chute}. `;
  verificaSeOChutePossuiUmValorValido(chute);
}
document.getElementById("form-palpite").addEventListener("submit", evento => {
  evento.preventDefault();
  jogar(document.getElementById("palpite").value);
});
window.addEventListener("pagehide", () => recognition?.abort());
