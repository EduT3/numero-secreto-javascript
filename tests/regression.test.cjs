const test = require('node:test');
const assert = require('node:assert/strict');
const { context, element } = require('./dom.cjs');

test('unsupported speech works with typed guesses and invalid guesses have no hint', () => {
 const t = context(); t.load('app/sortearNumero.js'); t.load('app/reconhecimentoDeVoz.js'); t.load('app/validacao.js');
 assert.equal(t.get('ouvir').hidden, true);
 for (const guess of ['', 'abc', '1.5', '101']) { t.ctx.guess = guess; t.run('jogar(guess)'); assert.match(t.get('chute').textContent, /número inteiro/); assert.doesNotMatch(t.get('chute').textContent, /é maior|é menor/); }
 t.run('jogar(numeroSecreto)'); assert.match(t.get('chute').textContent, /Você acertou/); assert.equal(t.get('jogar-novamente').hidden, false);
});
