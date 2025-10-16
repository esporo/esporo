---
layout: "post"
title: "Spore vai usar arquivos XML para salvar arquivos"
date: "2008-05-27 16:31"
category: Galáxia Spore
tags:
  - Spore
  - SimCity
  - Maxis
  - Todd Jones
---
Se você jogou SimCity Sociedades você pode ter percebido que o jogo usa arquivos XML para criar e salvar conteúdo. Parece que Spore vai usar o mesmo processo. Isso vai manter os arquivos de Spore relativamente pequenos, e o jogo vai lê-los e expandi-los para arquivos bem maiores.

O [SpaceOddity](http://spaceoddityblog.planets.gamespy.com/) encontrou uma entrevista na [Newsweek](http://blog.newsweek.com/blogs/levelup/archive/2008/05/27/xml-and-games-part-ii-a-look-at-spore.aspx) com N'Gai Croal e o desenvolvedor de Spore, Todd Jones, que entra em detalhes sobre como será esse processo:

> **Você pode nos explicar, em termos leigos, como os vários tipos de conteúdo criado pelos usuários em Spore — criaturas, estruturas, veículos, naves, música, etc. — serão convertidas em arquivos pequenos que poderão ser compartilhados entre jogadores?**
>
> O conteúdo criado por usuários no Spore é compartilhado entre nossos jogadores através de arquivos pequenos que tem em torno de 20 KB em tamanho. Porém, o arquivo final que o jogo usará terá cerca de 1 MB, ou mais! Isso é possível porque o conteúdo pronto para o jogo será gerado através de um algoritmo baseado na informação contida nesses arquivos pequenos.
>
> Cada um desses arquivos pequenos é como uma receita que descreve como os objetos que vem no jogo serão combinados para criar algo novo. Esses objetos são como mãos, bocas, rodas, texturas ou até mesmo animações. Quando o jogo cria uma parte de conteúdo pronta para o jogo, as instruções nessa receita são seguidas e a geometria final, as texturas, animações, e sons são criados como resultado. Nós chamamos isso de “cozimento” porque, conceitualmente, nós pegamos materiais brutos que vem no jogo, combinamos eles, executamos eles através de vários processos de otimização e, depois de um tempo, algo interessante sai no outro lado.
>
> Por exemplo, quando um jogador está criando uma criatura no Criador de Criaturas, eles fazem coisas que podem ser traduzidas como “alongou a coluna em 10%”, “torceu a coluna para cima”, “colocou pernas na criatura”, “dobrou os joelhos para fora do tronco”, “pintou a pele com escamas roxas, com pequenas manchas”. As receitas que são compartilhadas entre os jogadores são uma série dessas ações. Quando nós precisamos ver a criatura no jogo, nós juntamos a pele da criatura seguindo essa receita, colocamos as partes, posamos a criatura, pintamos ela, essas coisas. Cada uma dessas etapas é geralmente feita automaticamente, no fundo do jogo, enquanto o jogador está jogando. Depois de alguns segundos, o conteúdo final está pronto e o jogo pode exibir o conteúdo no mundo. Isso é diferente da maioria dos jogos, que já trazem esses objetos prontos no DVD e os exibem diretamente no jogo, com pouca modificação. O fato que a gente monta eles sob demanda permite muito mais conteúdo do que o normal.
