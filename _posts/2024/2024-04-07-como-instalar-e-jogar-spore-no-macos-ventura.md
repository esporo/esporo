---
layout: post
category: Guia Galáctico
title: Como instalar e jogar Spore no macOS Ventura
author: gaboo
tags:
- Spore
- tutoriais
- plataforma
date: 2024-04-07 18:58 -0300
---
Embora **Spore** não esteja disponível no Mac desde a versão Catalina, que removeu suporte a programas de 32 bit do sistema operacional, o jogo esteve disponível desde então a partir do projeto [Porting Kit](https://portingkit.com). Infelizmente, essa versão apresenta vários problemas gráficos nos terrenos do planeta.

Recentemente, eu consegui instalar o Spore no macOS Ventura (em um Mac usando o processador M1) usando o D9VK, um projeto que traduz a biblioteca do Direct3D 9 (usado pelo jogo) para o Vulkan — e, então, usando o Wineskin para "empacotar" o jogo e as bibliotecas de tradução necessárias em um aplicativo para o macOS. Vou ensinar vocês a fazerem isso.

**O que você vai precisar:**

- O _Spore_ comprado através do [GOG](https://www.gog.com/en/game/spore_collection) ou da [EA/Origin](https://www.ea.com/pt-br/games/spore/spore).
- O aplicativo [Wineskin Winery](https://github.com/Gcenx/WineskinServer/)

## 1. Instalando e configurando o Winery

O Wineskin Winery é um programa desenvolvido por [Gcenx] que “empacota” o Wine, uma biblioteca que traduz instruções Windows para sistemas UNIX (como o macOS e o Linux) em um aplicativo do Mac, junto com alguns recursos extras que facilitam a instalação de dependências.

Primeiro, você precisa instalar o Homebrew, um gerenciador de pacotes para o macOS. Eu vou dar as instruções abaixo, mas você pode lê-las e conhecer mais sobre o projeto no [site oficial](https://brew.sh).

Para instalar o Homebrew, abra o aplicativo Terminal e cole o comando abaixo:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

O script vai pedir permissão para você, então você precisa digitar a senha do seu usuário. Depois da instalação, você será instruído a adicionar o `brew` em seu `$PATH`. Para isso, execute esse comando:

```bash
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile    
```

Com isso, o Homebrew estará configurado no seu Mac. Agora, feche o Terminal e abra-o de novo para "ativá-lo". Agora podemos instalar o Wineskin Winery com o comando abaixo:

```bash
brew install --cask --no-quarantine gcenx/wine/wineskin
```

Você verá o Wineskin Winery aparecer no seu Launchpad e na pasta de aplicativos. Você pode abrí-lo, e verá uma tela semelhante a essa:

![Captura de tela do aplicativo Winery]({% link uploads/2024/04/winery.png %})

Talvez você não tenha uma engine nem um wrapper listado. Isso é normal.

Clique em **Install (ou Update) Wrapper** para criar um wrapper (precisa ser, no mínimo, `Wineskin-3.0`).

Clique no símbolo de **+**. Escolha `WS12WineCX64Bit23.7.1-2` (ou qualquer versão `WineCX` mais recente).

Agora, selecione a _engine_ que você selecionou na lista, e clique em **Create New Blank Wrapper**. Digite o nome do aplicativo que você quer dar (pode ser `SPORE.app` ou qualquer outro) e confirme.

O Winery vai criar seu aplicativo. Aguarde o processo ser concluído e, então, clique em **View Wrapper in Finder**. O Finder vai abrir com o seu aplicativo (se você quiser, pode visitar `{Sua Pasta de Usuário} → Applications → Wineskin`, e seu aplicativo estará lá).

Clique no aplicativo duas vezes para abrir.

## 2. Configurando o Wineskin

O Wineskin apresentará quatro botões:

![Captura de tela do Wineskin com quatro botões]({% link uploads/2024/04/wineskin.png %})

Clique em `Winetricks`.

![Captura de tela do aplicativo Winetricks]({% link uploads/2024/04/winetricks.png %})

Uma janela com uma barra de busca e uma lista com várias bibliotecas vão exibir. Busque e selecione as seguintes bibliotecas:

- `corefonts`
- `d3dcompiler_43`
- `d3dcompiler_47`
- `d3dx9`
- `d9vk`
- `dxvk`

**Importante:** se você optar por instalar o _Spore_ através do Origin/EA app, busque e selecione `origin`.

Clique em `Run` e aguarde o download e a implementação das bibliotecas no seu pacote do Wine.

Quando terminado, feche a janela. O Wineskin abrirá novamente com as quatro opções.

## 3. Instalando o Spore

As instruções nessa etapa divergem dependendo de onde você vai instalar o jogo.

**Se você for instalar pela GOG:**

1. Vá para [sua biblioteca de jogos](https://www.gog.com/account) e procure por `SPORE Collection`. Clique na seta ao lado do jogo, e escolha a opção _View Downloads_.
2. Em _Download Offline Backup Game Installers_, faça o download das três partes do instalador. Aguarde o download de todas elas acabar.
3. Volte para o Wineskin e selecione a opção `Install Software`.
4. Clique em `Choose Setup Executable` e navegue até sua pasta de Downloads.
5. Selecione o arquivo executável, `setup_spore_3.1.0.22_(10834).exe`.
6. Siga os passos da instalação e aguarde ela concluir.
7. Quando a instalação terminar, feche o instalador. **Não inicie o jogo ainda.**
8. O Wineskin vai pedir para você selecionar o arquivo executável do jogo. Selecione `language_setup.exe`.
9. A janela de configurações avançadas vai ser exibida. Clique em `Test Run`.
10. O seletor de idiomas vai ser exibido. Selecione _Português (Brasil)_ e clique em `Salvar alterações`.
11. A janela de configurações avançadas do Wineskin vai ser exibida novamente.
13. Um alerta perguntando se você quer ver os logs da execução. Você pode responder que não.
14. Na aba _Configuration_, clique em `Browse`.
15. Uma janela com os conteúdos do pacote do Wine será exibido. Navegue para `Shared Support → prefix → drive_c → Program Files (x86) → GOG Games → SPORE Collection → SporebinEP1` e selecione `Sporebin.exe`

**Se você for instalar pela Origin:**

1. No Wineskin, clique em `Advanced`.
2. Na aba _Configuration_, clique em `Browse`.
3. Uma janela com os conteúdos do pacote do Wine será exibido. Navegue para `Shared Support → prefix → drive_c → Program Files (x86) → Origin` e selecione `Origin.exe`
4. Clique em `Test Run`
5. O Origin vai iniciar. Entre com sua conta da EA e instale os seus jogos.
6. Prefira instalar na seguinte ordem:
    1. Spore
    2. Spore: Pacote de Partes Medonhas e Fofinhas
    3. Spore: Aventuras Galácticas
7. Deixe o instalador do Origin terminar de configurar tudo.
8. Quando a instalação do último jogo acontecer (seja Spore ou Aventuras Galácticas), clique na capa dele com o botão direito e selecione `Propriedades`.
9. Desmarque a opção `Origin no Jogo` e feche a janela. Depois, encerre o Origin.
10. A janela de configurações avançadas do Wineskin vai ser exibida novamente.
11. Um alerta perguntando se você quer ver os logs da execução. Você pode responder que não e encerrar o Wineskin.

## 4. Melhorando os gráficos

Antes de iniciar o Spore, vamos adicionar suporte a efeitos gráficos avançados à GPU dos processadores da Apple.

Baixe o [`spore_graphics_fix.zip`]({% link uploads/2024/04/spore-graphics-fix-2048.zip %}) e descompacte-o.

Procure seu aplicativo gerado pelo Winery no Finder. Ele geralmente está em `{Pasta de Usuário} → Applications → Wineskin`. 

Clique com o botão secundário no aplicativo e escolha _Mostrar conteúdo do pacote_.

Navegue para `SharedSupport → prefix → drive_c → Program Files (x86)`.

Se você instalou o jogo pela GOG, continue em `GOG Games → SPORE Collection`. Se você instalou pela Origin, continue em `Origin Games → Spore`.

Abra uma nova aba do Finder, vá na sua pasta de Downloads e copie os dois arquivos descompactados, `ConfigManager.txt` e `Properties.txt`.

Na aba com a pasta de instalação do Spore, navegue para `Data → Config` e cole os dois arquivos, substituindo os originais.

Faça o mesmo para `DataEP1 → Config` (no GOG) ou na pasta `Data → Config` da instalação do Aventuras Galácticas (na Origin).

Pronto, seu jogo estará com efeitos gráficos avançados ativado.

Agora é só voltar executar o Spore pelo Launchpad e se divertir! Recursos como a Sporepédia e a página Meu Spore estão disponíveis se você fizer login com sua conta EA.

![Spore executando no macOS Ventura]({% link uploads/2024/04/spore-ventura.png %})
