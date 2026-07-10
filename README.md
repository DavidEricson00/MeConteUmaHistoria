# Me Conte uma História

Me Conte uma História é um jogo educativo interativo e visual que apresenta lendas populares do folclore brasileiro de forma lúdica, divertida e acessível para o público infantil.

## 📖 Sobre

Este projeto é um jogo educativo para web desenvolvido em **HTML, CSS e JavaScript**. O objetivo principal é introduzir clássicos do folclore nacional para as crianças por meio de uma experiência imersiva no estilo *point-and-click* (apontar e clicar).

Ao iniciar, o jogador se depara com um mapa interativo onde pode selecionar diferentes pontos geográficos. Cada localidade inicia uma narrativa diferente, contada por meio de cenas ilustradas sequenciais e um balão de diálogo intuitivo.

## ✨ Funcionalidades

- **Mapa interativo**: Explore diferentes regiões e escolha qual lenda você quer ouvir.
- **Histórias ilustradas**: Cada cena conta com imagens temáticas que mudam à medida que a narrativa avança.
- **Sistema de diálogos**: Textos claros e com estilos personalizados.
- **Navegação simplificada**: Avance os diálogos clicando no botão visual, pressionando a tecla `Espaço` ou a tecla `Enter`.
- **Interface responsiva**: Estilização e fontes personalizadas que se adaptam a diferentes tamanhos de tela.
- **Execução imediata**: Não requer configurações complexas ou servidores robustos, rodando diretamente no navegador.

## 🧙 Lendas disponíveis

- **Cabeça de Cuia**: Acompanhe a história do menino Crispim, que morava nas margens do Rio Parnaíba. Após desobedecer e maltratar sua mãe, ele recebe uma terrível maldição que o transforma em uma criatura com a cabeça em formato de cuia gigante.
- **Papa-Figo**: Descubra a lenda urbana do misterioso velho com o saco que ronda os interiores de Pernambuco à procura de crianças desobedientes, contada pela perspectiva de uma senhora que relembra sua juventude.
- **Pedra da Glória**: Explore o mistério sagrado por trás de uma rocha em uma cachoeira lendária, onde rituais antigos se misturam a cantos de sereias indígenas capazes de encantar quem passar por perto.

## 🛠 Tecnologias utilizadas

- **HTML5**: Estruturação semântica de todas as páginas de histórias e do mapa.
- **CSS3**: Estilos customizados, efeitos hover de feedback visual, transições e regras de responsividade para dispositivos móveis.
- **JavaScript (ES6)**: Motor lógico simples e desacoplado (`story.js`) que gerencia a transição de cenas, carregamento de imagens dinâmicas e o fluxo dos diálogos de forma automatizada.

## 🚀 Como executar

O projeto é totalmente estático, o que significa que não possui dependências ou processos de instalação/compilação complexos.

1. Baixe os arquivos do projeto ou clone este repositório:
   ```bash
   git clone https://github.com/lightpotat0/Tell_me_a_History.git
   ```
2. Navegue até a pasta raiz do projeto.
3. Dê um duplo clique ou abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Firefox, Microsoft Edge, Safari, etc.).

## 📁 Estrutura do projeto

- `assets/`: Arquivos compartilhados que definem o visual e comportamento do jogo.
  - `css/`: Estilos do mapa principal (`index.css`) e o padrão global das histórias (`global.css`).
  - `fonts/`: Fonte temática `hello-pumpkin` utilizada no projeto.
  - `images/`: Imagens do layout (mapa, botões de avanço, balões de texto, backgrounds e ícones).
  - `js/`: Lógica central do motor de diálogos (`story.js`).
- `cuia/`: Páginas HTML e conjunto de cenas ilustradas pertencentes à lenda do Cabeça de Cuia.
- `gloria/`: Páginas HTML e conjunto de cenas ilustradas pertencentes à lenda da Pedra da Glória.
- `papafigo/`: Páginas HTML e conjunto de cenas ilustradas pertencentes à lenda do Folclore Papa-Figo.
- `index.html`: Portal principal do jogo contendo o mapa e os pontos de interação.

## 🖼️ Capturas de tela

<img alt="image" src="https://i.imgur.com/D9zIUZr.png" />

<img alt="image" src="https://i.imgur.com/nXiFBYl.png" />

## 💡 Objetivo

O projeto nasceu do desejo de revitalizar a rica cultura oral e folclórica do Brasil. Utilizando um formato interativo e dinâmico, "Me Conte uma História" busca despertar o interesse de crianças e jovens pela mitologia e história regional, promovendo o aprendizado fora do formato convencional de livros de texto.

## 📄 Licença

Este projeto não possui uma licença definida até o momento.
