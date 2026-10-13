# Número secreto

Jogo educacional de adivinhação entre 1 e 100, com entrada digitada e reconhecimento de voz opcional.

## Tecnologias

HTML, CSS e JavaScript. Sem framework de interface.

## Executar

Na raiz do repositório, com Python 3 instalado:

```sh
python -m http.server 8000
```

Abra http://localhost:8000/. O microfone requer permissão e navegador compatível, normalmente em localhost ou HTTPS.

## Recursos e melhorias

- Palpites digitados funcionam sem suporte a SpeechRecognition.
- Voz só começa ao clicar e não reinicia o microfone automaticamente.
- Entradas vazias, decimais e fora do intervalo não produzem dicas contraditórias.
- Vitória interrompe a escuta e oferece reinício.

## Testes

Com Node.js 18 ou superior, execute na raiz:

```sh
node --test tests/*.test.cjs
```

Os testes de regressão usam o test runner nativo, DOM e serviços simulados, sem instalar dependências. Cobrem fluxos específicos de lógica, não substituem testes visuais, de acessibilidade ou integração em navegador real.

## Escopo e limitações

Reconhecimento de voz depende do navegador e pode utilizar serviços do fornecedor. Não há garantia de processamento local de áudio. Testes automatizados não exercitam microfone real.

## Contexto

Projeto de estudos de Eduardo (EduT3). A proposta e os recursos originais foram preservados; as melhorias priorizam correção, uso por teclado, adaptação de layout e documentação.

### Links registrados na versão original

- https://numero-secreto-javascript.vercel.app/

Esses links foram preservados como referência e não representam publicação desta revisão.
