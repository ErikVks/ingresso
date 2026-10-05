# e-Ticket

Página de compra de ingressos para um show, em que o usuário escolhe o setor e a quantidade desejada e vê o estoque disponível diminuir a cada compra. Foi feito como exercício de prática de JavaScript proposto pela [Alura](https://www.alura.com.br).

O `index.html`, o `style.css`, o `_reset.css` e as imagens foram disponibilizados prontos pela Alura. Todo o `app.js` foi programado por mim do zero, e é nele que está a lógica de leitura do formulário, verificação do estoque e atualização das quantidades na tela. A proposta do exercício é essa: receber a interface já montada e resolver apenas o comportamento da página.

## Acesse o projeto

A aplicação está publicada em duas plataformas diferentes e pode ser acessada por qualquer um dos links abaixo, já que ambos exibem a mesma versão.

**Vercel:** [ingresso-pi-two.vercel.app](https://ingresso-pi-two.vercel.app)

**GitHub Pages:** [erikvks.github.io/ingresso](https://erikvks.github.io/ingresso/)

## Como funciona

A página apresenta um formulário com um menu suspenso para escolher entre cadeira inferior, cadeira superior e pista, além de um campo para a quantidade de ingressos. Logo abaixo fica a lista com o estoque disponível de cada setor, que começa em 100 para a pista, 200 para a cadeira superior e 400 para a cadeira inferior. Ao clicar em "Comprar", a aplicação verifica se há ingressos suficientes naquele setor. Se houver, a quantidade comprada é subtraída do estoque, o número na tela é atualizado e um aviso confirma a compra. Se não houver, um alerta informa que a quantidade está indisponível e nada é alterado.

## Estrutura de arquivos

```
ingresso/
├── index.html
├── styles/
│   ├── _reset.css
│   └── style.css
├── js/
│   └── app.js
└── assets/
    ├── PNG/
    ├── SVG/
    └── Ingresso.svg
```

## O que foi aprendido no JavaScript

### Estado guardado no próprio HTML

O estoque de cada setor não vive em uma variável do JavaScript, e sim no texto que já está escrito na página. O código lê esse número, faz a conta e escreve o resultado de volta no mesmo lugar. É uma abordagem interessante de entender, porque mostra que o DOM pode ser a fonte da informação, embora em projetos maiores seja mais seguro manter o estado em variáveis e usar a tela apenas para exibi-lo.

### Leitura e escrita de texto com textContent

A quantidade disponível é lida pela propriedade `textContent` do elemento que exibe o número e, depois do desconto, gravada de volta pela mesma propriedade. Como `textContent` sempre devolve texto, o valor precisa passar por `parseInt` antes de entrar em qualquer comparação ou subtração.

### Relacionar valores a elementos por meio de arrays

Esse é o ponto central do exercício. Cada opção do menu suspenso tem um valor curto, como "pista", enquanto o elemento que mostra o estoque tem um id diferente, como "qtd-pista". Para ligar um ao outro, o código mantém dois arrays na mesma ordem: um com os tipos de ingresso e outro com os ids correspondentes. Descobrindo a posição do tipo escolhido com `indexOf`, a mesma posição no segundo array entrega o id certo. Com isso, uma única função atende os três setores, sem precisar de uma cadeia de condicionais.

### Desestruturação de arrays

A função `obterValores` precisa devolver duas informações ao mesmo tempo, então retorna as duas dentro de um array. Quem chama recebe tudo com a sintaxe de desestruturação, atribuindo o tipo e a quantidade a variáveis separadas em uma única linha.

### Validação e saída antecipada

Antes de mexer no estoque, a função `comprar` confere com `isNaN` se o campo de quantidade foi preenchido com um número e se o valor é pelo menos um, encerrando com `return` quando não é o caso. A mesma ideia aparece na verificação de disponibilidade: se o estoque for insuficiente, a função avisa e sai, sem alterar nada. Esse padrão de interromper cedo evita aninhar vários `if` e deixa o caminho principal do código mais limpo.

### Comunicação com o usuário pelo alert

As mensagens de sucesso e de indisponibilidade usam `alert`, que abre uma caixa de diálogo do navegador. É o recurso mais direto para dar retorno ao usuário, ainda que em interfaces mais elaboradas o comum seja exibir a mensagem na própria página.

### Funções com responsabilidades separadas

O código foi dividido em três funções com propósitos distintos: uma lê o formulário, outra executa a lógica de estoque e a terceira apenas coordena as duas. Essa separação torna mais fácil localizar onde mexer quando algo precisa mudar.

### Operador de atribuição composta

O desconto no estoque usa `-=`, forma abreviada de subtrair um valor da própria variável e guardar o resultado nela mesma, equivalente a escrever a variável dos dois lados da atribuição.

## Como executar

Não é necessária nenhuma instalação. Basta clonar ou baixar o repositório e abrir o `index.html` no navegador, ou acessar um dos links de publicação acima.

```bash
git clone https://github.com/erikvks/ingresso.git
cd ingresso
```

## Tecnologias

HTML5 e CSS3 fornecidos pela Alura, JavaScript e Google Fonts (Inter e Chakra Petch).

## Créditos

Exercício proposto pela [Alura](https://www.alura.com.br), que disponibilizou o layout, o HTML, o CSS e as imagens. A implementação do JavaScript é minha, feita do zero.
