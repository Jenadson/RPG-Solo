//seleção de elementos



//funções
function roll1d6(){
    var d6 = Math.floor(Math.random() * 5)+1 ;

    document.getElementById("show-roll").innerText = d6;

    
};

function rollIniciais() {
   
    const salasIniciais = Math.floor(Math.random() *5)+1;

    switch(salasIniciais){
        case 1:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio01.png' width='250'>";
            break;
        
        case 2:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio02.png' width='250'>";
            break;

        case 3:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio03.png' width='250'>";
            break;

        case 4:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio04.png' width='250'>";
            break;

        case 5:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio05.png' width='250'>";
            break;

        case 6:
            document.getElementById("show-img").innerHTML = "<img src='img/inicio06.png' width='250'>";
            break;
    }
}

function salas(){

    const salasDoGame = Math.floor(Math.random() *35) +1;

    switch(salasDoGame){
        case 1:
                document.getElementById("show-img").innerHTML = "<img src='img/sala11.png' width='250'>";
                break;

         case 2:
                document.getElementById("show-img").innerHTML = "<img src='img/sala12.png' width='250'>";
                break;
         case 3:
                document.getElementById("show-img").innerHTML = "<img src='img/sala13.png' width='250'>";
                break;
        case 4:
                document.getElementById("show-img").innerHTML = "<img src='img/sala14.png' width='250'>";
                break;
        case 5:
                document.getElementById("show-img").innerHTML = "<img src='img/sala15.png' width='250'>";
                break;
        case 6:
                document.getElementById("show-img").innerHTML = "<img src='img/sala16.png' width='250'>";
                break;
    
        case 7:
                document.getElementById("show-img").innerHTML = "<img src='img/sala21.png' width='250'>";
                break;
        case 8:
                document.getElementById("show-img").innerHTML = "<img src='img/sala22.png' width='250'>";
                break;
        case 9:
                document.getElementById("show-img").innerHTML = "<img src='img/sala23.png' width='250'>";
                break;
        case 10:
                document.getElementById("show-img").innerHTML = "<img src='img/sala24.png' width='250'>";
                break;
        case 11:
                document.getElementById("show-img").innerHTML = "<img src='img/sala25.png' width='250'>";
                break;

         case 12:
                document.getElementById("show-img").innerHTML = "<img src='img/sala26.png' width='250'>";
                break;
         case 13:
                document.getElementById("show-img").innerHTML = "<img src='img/sala31.png' width='250'>";
                break;
        case 14:
                document.getElementById("show-img").innerHTML = "<img src='img/sala32.png' width='250'>";
                break;
        case 15:
                document.getElementById("show-img").innerHTML = "<img src='img/sala33.png' width='250'>";
                break;
        case 16:
                document.getElementById("show-img").innerHTML = "<img src='img/sala34.png' width='250'>";
                break;
    
        case 17:
                document.getElementById("show-img").innerHTML = "<img src='img/sala35.png' width='250'>";
                break;
        case 18:
                document.getElementById("show-img").innerHTML = "<img src='img/sala36.png' width='250'>";
                break;
        case 19:
                document.getElementById("show-img").innerHTML = "<img src='img/sala41.png' width='250'>";
                break;
        case 20:
                document.getElementById("show-img").innerHTML = "<img src='img/sala42.png' width='250'>";
                break;
        case 21:
                document.getElementById("show-img").innerHTML = "<img src='img/sala43.png' width='250'>";
                break;
    
        case 22:
                document.getElementById("show-img").innerHTML = "<img src='img/sala44.png' width='250'>";
                break;
        case 23:
                document.getElementById("show-img").innerHTML = "<img src='img/sala45.png' width='250'>";
                break;
        case 24:
                document.getElementById("show-img").innerHTML = "<img src='img/sala46.png' width='250'>";
                break;
        case 25:
                document.getElementById("show-img").innerHTML = "<img src='img/sala51.png' width='250'>";
                break;
        case 26:
                document.getElementById("show-img").innerHTML = "<img src='img/sala52.png' width='250'>";
                break;
        
        case 27:
                document.getElementById("show-img").innerHTML = "<img src='img/sala53.png' width='250'>";
                break;
        case 28:
                document.getElementById("show-img").innerHTML = "<img src='img/sala54.png' width='250'>";
                break;
        case 29:
                document.getElementById("show-img").innerHTML = "<img src='img/sala55.png' width='250'>";
                break;
        case 30:
                document.getElementById("show-img").innerHTML = "<img src='img/sala56.png' width='250'>";
                break;
        case 31:
                document.getElementById("show-img").innerHTML = "<img src='img/sala61.png' width='250'>";
                break;
        
        case 32:
                document.getElementById("show-img").innerHTML = "<img src='img/sala62.png' width='250'>";
                break;
        case 33:
                document.getElementById("show-img").innerHTML = "<img src='img/sala63.png' width='250'>";
                break;
        case 34:
                document.getElementById("show-img").innerHTML = "<img src='img/sala64.png' width='250'>";
                break;
        case 35:
                document.getElementById("show-img").innerHTML = "<img src='img/sala65.png' width='250'>";
                break;
        case 36:
                document.getElementById("show-img").innerHTML = "<img src='img/sala66.png' width='250'>";
                break;

    }
}

function contSalas(){

        const inTheRoom = Math.floor(Math.random() *10)+1;

        switch(inTheRoom){
                case 1: document.getElementById("show-img").innerText = "Tesouro encontrado. Role na Tabela de Tesouros.";
                break;

                case 2: document.getElementById("show-img").innerText = "Tesouro protegido por armadilhas. Role para ver a Armadilhas e depois Role para o Tesouros. "; 
                break;

                case 3: document.getElementById("show-img"). innerText = "Se for um corredor, está vazio! Caso contrário, role para Eventos Especiais.";
                break;

                case 4: document.getElementById("show-img").innerText = "Vazio! Role para Recursos Especiais.";
                break;

                case 5: document.getElementById("show-img").innerText = "Role para Vermes.";
                break;

                case 6: document.getElementById("show-img").innerText = "Role para Capangas.";
                break;

                case 7: document.getElementById("show-img").innerText = "Se for um corredor, está vazio! Caso contrário, role para Capangas.";
                break;

                case 8: document.getElementById("show-img").innerText = "Vazio!";
                break;

                case 9: document.getElementById("show-img").innerText = "Se for um corredor, está vazio! Caso contrário, role para Monstros Bizarros.";
                break;

                case 10: document.getElementById("show-img").innerText = "Role para Chefões. Então role um d6. Adicione +1 para cada chefão ou monstro bizarro que você encontrou até agora no jogo. Se o seu total for 6+, ou se a masmorra foi completada, esse é o chefão final.";
                break;

                case 11: document.getElementById("show-img").innerText = "Vazio se for corredor. Caso contrário, a sala é o lar de um dragão pequeno. O pequeno dragão conta como um chefão e pode ser o chefão final.";
                break;

        }

}

function capangas(){

        const enemies = Math.floor(Math.random() *6)+1;

        switch(enemies){
                case 1: document.getElementById("show-img").innerText = "d6+2 para Esqueletos ou d6 para Zumbis (50% de chance para cada). Mortos-vivos, nível 3, sem tesouro. Arma de esmagamento atacam Esqueletos com +1.Flechas têm -1 contra esqueletos e zumbis. Esqueletos e zumbis nunca testam vontade. / Reações: Sempre lutam até a morte.";
                break;

                case 2: document.getElementById("show-img").innerText = "d6+3 Goblins. Nível 3, tesouro -1. Os goblins têm 1 chance em 6 de conseguirem agir de surpresa, agindo antes do grupo. Se eles agirem antes do grupo, role a reações abaixo. Anões atacam goblins com +1. / Reações (d6): 1 fogem se em menor número, 2-3 suborno (5 PO por goblin), 4-6 lutam.";
                break;

                case 3: document.getElementById("show-img").innerText = "d6 Hobgoblins. Nível 4, tesouro +1. / Reações (d6): 1 fugir se estiver em menor número, 2-3 suborno (10 PO por hobgoblin), 4-6 lutam até a morte.";
                break;

                case 4: document.getElementById("show-img").innerText = "d6+1 Orcs. Nível 4, tesouro normal. Orcs têm medo de magia e devem testar vontade cada vez que um ou mais são mortos por uma magia. Se uma magia fizer com que sua vida caia para menos de 50%, eles testarão vontade com -1. Eles nunca têm itens mágicos em seu tesouro: em vez disso, trate qualquer magia rolada como peças de ouro d6 x d6. Elfos atacam e lançam magias contra orcs com +1. / Reações (d6): 1-2 pedem suborno (10 PO por orc), 3-5 lutam, 6 lutam até a morte.";
                break;

                case 5: document.getElementById("show-img").innerText = "d3 Trolls. Nível 5, tesouro normal. Trolls se regeneram, a menos que sejam mortos por magia, ou a menos que um personagem use um ataque para cortar um troll já morto em pedaços. Se isso não acontecer, role um dado para cada troll morto no próximo turno. Com 5 ou 6, o troll vai voltar à vida e continuar a lutar. Halflings adicionam seu nível ao teste de Defesa contra trolls. / Reações (d6): 1-2 lutam, 3-6 lutam até a morte. Se um anão estiver presente no grupo, os trolls lutarão automaticamente até a morte.";
                break;

                case 6: document.getElementById("show-ing").innerText = "2d6 Povo Fungo. Nível 3, tesouro normal. Qualquer personagem que tome dano do povo fungo deve passar numa rolagem contra veneno de nível 3 ou perder 1 de vida. Halflings adicionam seu nível nessa rolagem. / Reações (d6): 1-2 pedem suborno (d6 PO por fungo), 3-6 lutam.";
                break;
        }

}

function tesouro(){
        
        document.getElementById("show-img").innerHTML = "<div style='font-size: 1.1rem;'><p>0 - Nenhum tesouro encontrado.</p><br> <p>1 - 1d6 peças de ouro.</p><br> <p>2 - 2d6 peças de ouro.</p><br> <p>3 - Um pergaminho com uma magia aleatória.</p><br> <p>4 - Uma gema que vale 2d6 x 5 peças de ouro.</p><br> <p>5 - Uma joia que vale 3d6 x 10 peças de ouro.</p><br> <p>6+ - Um item mágico aleatório da role para Tesouros Mágicos.</p><br></div>"; 
}

function armadilhas(){

        const trap = Math.floor(Math.random()*5)+1;

        switch(trap){
                case 1: document.getElementById("show-img").innerText = "Um dardo (nível 2) ataca uma personagem aleatória. Dardo: A personagem alvo deste ataque deve fazer uma jogada de Defesa ou perder 1 ponto de vida.";
                break;

                case 2: document.getElementById("show-img") .innerText = "O gás venenoso (nível 3) ataca todas as personagens. Gás venenoso: Todas as personagens devem fazer um teste de Defesa, ignorando o bônus dos escudos ou armadura, ou perderão 1 ponto de vida.";
                break;

                case 3: document.getElementById("show-img") .innerText = "Um alçapão (nível 4) se abre sob os pés da personagem que lidera a ordem de marcha. Alçapão: A personagem deve rolar d6 contra o nível da armadilha. Role -1 se tiver armadura leve, -2 se tiver armadura pesada e +1 se for um halfling ou elfo. Ladinos adicionam seu nível. Uma personagem que falhe no teste cai no alçapão, perdendo 1 ponto de vida. Além disso, será necessário pelo menos mais uma personagem para ajudá-la a sair do alçapão. Se você cair em um alçapão e não houver ninguém por perto, você morre.";
                break;

                case 4: document.getElementById("show-img") .innerText = "Armadilha para ursos (nível 4) atingindo a personagem que lidera a ordem de marcha. Armadilha de Urso: A personagem deve rolar d6 tentando superar o nível da armadilha. Elfos e halflings rolam com +1. Ladinos adicionam seu nível. Uma personagem que falhou no teste tem um pé preso na armadilha de urso. A personagem perde 1 ponto de vida e terá -1 nas jogadas de Ataque e Defesa até que a vida perdida seja recuperada e sua perna mancando seja curada. Uma personagem manca irá rolar -2 contra outras armadilhas para ursos ou alçapões.";
                break;

                case 5: document.getElementById("show-img") .innerText = "Lanças saem de uma parede (nível 5) acertando duas personagens aleatórias. Lanças: São ativadas pela primeira personagem que passa por elas e ataca dois membros aleatórios do grupo. Uma personagem que falhe no teste de Defesa perde 1 ponto de vida.";
                break;

                case 6: document.getElementById("show-img") .innerText = "Um bloco de pedra gigante (nível 5) cai sobre a última personagem na ordem da marcha. Pedra Gigante: Este ataque de nível 5 atinge a última personagem na ordem de marcha. A personagem deve fazer um teste de Defesa ou perder 2 pontos de vida. O bônus da armadura conta, mas o bônus de um escudo não.";
                break;

        }
}

function vermes(){

        const wormroll = Math.floor(Math.random()*5)+1;
        console.log(wormroll)
        switch (wormroll) {
                case 1:
                       document.getElementById("show-img").innerText = "3d6 Ratos. Nível 1, sem tesouro. Qualquer personagem ferida tem 1 chance em 6 de perder 1 ponto de vida adicional devido a um ferimento infectado. Reações (d6): 1-3 fogem, 4-6 lutam"; 
                        break;
                case 2:
                        document.getElementById("show-img").innerText = "3d6 Morcegos Vampiros. Nível 1, sem tesouro. Magias são lançadas com -1 por conta da distração causada por seus gritos. Apesar do nome Vampiro, essas NÃO são criaturas mortas-vivas.Reações (d6): 1-3 fogem, 4-6 lutam"; 
                        break;
                case 3:
                        document.getElementById("show-img").innerText = "2d6 Grupo de Goblins. Nível 3, tesouro -1, vontade -1. Anões os atacam com +1 Reações (d6): 1 fugir, 2-3 fogem se em menor número, 4 pedem suborno (5 PO por goblin), 5-6 lutam."; 
                        break;
                case 4:
                       document.getElementById("show-img").innerText = "d6 Centopeias Gigantes. Nível 3, sem tesouro. Qualquer personagem ferida por uma centopeia gigante deve passar num teste contra veneno de nível 2 ou perde 1 de vida adicional. Reações (d6): 1 fogem, 2-3 fogem se em menor número, 4-6 lutamr."; 
                       break;
                case 5:
                       document.getElementById("show-img").innerText = "d6 Sapos Vampiros. Nível 4, tesouro -1. Apesar do nome Vampiro, essas NÃO são criaturas mortas-vivas. Reações (d6): 1 fogem, 2-4 lutam, 5-6 lutam até a morte"; 
                       break;
                case 6:
                        document.getElementById("show-img").innerText = "2d6 Ratos Esqueléticos. Nível 3, morto-vivo, sem tesouro. Ataques com armas de esmagamento são +1 contra ratos esqueléticos, mas eles não podem ser atacados por arcos e fundas. Clérigos adicionam o seu nível quando os atacam porque são mortos-vivos. Reações (d6): 1-2 fogem, 3-6 lutam"; 
                        break;
                
        }
}

function chefes(){

        const bosses = Math.floor(Math.random()*5)+1;
        console.log(bosses);
        switch (bosses) {
                
                case 1:
                        document.getElementById("show-img").innerText = "Múmia. Mortos-vivos, nível 5, 4 pontos de vida, 2 ataques, tesouro +2. Qualquer personagem morta por uma múmia se torna outra múmia e deve ser combatida pelo grupo. As múmias são atacadas com +2 pela magia Bola de Fogo. As múmias nunca testam vontade.Reações: sempre lutam.";
                        break;
        
                case 2:
                        document.getElementById("show-img").innerText = "Orc Bruto. Nível 5, 5 pontos de vida, 2 ataques, tesouro +1, mas não pode ter nenhum item mágico, trate como 2d6 x d6 peças de ouro. Reações (d6): 1 pedem suborno (50 PO), 2-5 lutam, 6 lutam até a morte.";
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "Ogro. Nível 5, 6 pontos de vida, tesouro normal. Cada acerto de um ogro causa 2 pontos de vida de dano. Reações (d6): 1 pedem suborno (30 PO), 2-3 lutam, 4-6 lutam até a morte.";
                        break;

                case 4:
                        document.getElementById("show-img").innerText = "Medusa. Nível 4, 4 pontos de vida, tesouro +1. Todas as personagens no início da batalha devem passar num teste contra ataque visual de nível 4 ou serão transformados em pedra. Personagens petrificadas estão fora do jogo até que a magia Bênção seja lançada sobre elas. Ladinos adicionam metade de seu nível a esta rolagem. Reações (d6): 1 pedem suborno (6d6 PO), 2 missões, 3-5 lutam, 6 lutam até a morte.";
                        break;

                case 5:
                        document.getElementById("show-img").innerText = "Senhor do Caos. Nível 6, 4 pontos de vida, 3 ataques, 2 testes de tesouro com +1. Antes de começar a luta, role d6 para determinar se o Senhor do Caos tem algum poder especial: 1-3 sem poderes, 4 mau-olhado (personagens devem rolar 4+ ou ter -1 em todas as jogadas de defesa até que o Senhor do Caos seja morto), 5 drenagem de energia (qualquer personagem recebendo um ferimento do Senhor do Caos deve rolar 4+ ou perder 1 nível), 6 explosão de fogo do inferno (antes do combate, personagens devem rolar 6+ ou perder 2 pontos de vida; os clérigos adicionam ½ nível a este teste). Quando você mata um Senhor do Caos, role um dado; com 5 ou 6, uma personagem de sua escolha encontra uma pista. Reações (d6): 1 fogem se em menor número, 2 lutam, 3-6 lutam até a morte";
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "Dragão Pequeno. Nível 6, 5 pontos de vida, 2 ataques, 3 testes de tesouro +1. Em cada turno do dragão, role d6 para determinar o que ele faz. Com 1 ou 2, o dragão cospe fogo, causando a perda de 1 ponto de vida a todas as personagens que não conseguiram passar num teste contra o sopro do dragão de nível 6 (cada personagem adiciona ½ nível, arredondando para baixo). De 3 a 6, o Dragão não cospe fogo e morde 2 personagens aleatoriamente. Dragões pequenos nunca são considerados monstros aleatórios. Reações (d6): 1 dormindo (todas as personagens podem atacar com +2 em seu primeiro ataque), 2-3 pede suborno (todo o ouro do grupo, com um mínimo de 100 PO ou um item mágico), 4-5 luta, 6 missões.";
                        break;
        }

}

function especiais() {

        const special = Math.floor(Math.random()*5)+1;

        switch (special) {
                case 1:
                       document.getElementById("show-img").innerText = "Fonte: Todos os personagens feridos recuperam 1 de Vida na primeira vez que encontrarem a fonte em uma aventura. Outras fontes não têm efeito."; 
                        break;

                case 2:
                        document.getElementById("show-img").innerText = "Templo Sagrado: Uma personagem de sua escolha ganha +1 de Ataque contra monstros mortos-vivos ou demônios. Assim que mata um morto-vivo ou um demônio, o bônus desaparece."; 
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "Arsenal: Personagens podem mudar suas armas se quiserem, no limite das armas permitidas para o seu tipo de personagem. Por exemplo, um guerreiro que estava usando uma arma e um escudo pode descartar seu escudo e pegar a espada de duas mãos, ou trocar sua espada por uma maça."; 
                        break;

                case 4:
                       document.getElementById("show-img").innerText = "Altar Amaldiçoado: Quando você entrar na sala, um brilho misterioso emana do altar sinistro. Uma personagem aleatória é amaldiçoada e agora tem -1 nas suas rolagens de Defesa. Para quebrar a maldição, a personagem deve derrotar o monstro chefão sozinho, ou entrar no Templo Sagrado (ver 2, acima), ou ter uma magia de Benção usada nela por um clérigo."; 
                       break;
                        
                case 5:
                       document.getElementById("show-img").innerText = "Estátua: você pode deixar a estátua sozinha ou tocá-la. Se você tocá-la, role um d6. De 1-3, a estátua acorda e ataca o grupo (chefão de nível 4 com 6 pontos de vida, imune a todas às magias; se você derrotá-la, você encontra 3d6 x 10 PO dentro). De 4-6, a estátua quebra e você encontra 3d6 x 10 PO dentro"; 
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "Estátua: você pode deixar a estátua sozinha ou tocá-la. Se você tocá-la, role um d6. De 1-3, a estátua acorda e ataca o grupo (chefão de nível 4 com 6 pontos de vida, imune a todas às magias; se você derrotá-la, você encontra 3d6 x 10 PO dentro). De 4-6, a estátua quebra e você encontra 3d6 x 10 PO dentro"; 
                        break;
                
        }

}

function eventos(){

        const event = Math.floor(Math.random()*5)+1;

        switch (event) {
                case 1:
                        document.getElementById("show-img").innerText = "Um Fantasma passa pelo grupo. Todas as personagens devem passar numa rolagem contra medo nível 4 ou perder 1 de vida. Um clérigo adiciona seu nível a essa rolagem.";
                        break;
                
                case 2:
                        document.getElementById("show-img").innerText = "Monstros Errantes atacam o grupo. Role um d6: 1-3 uma rolagem na Tabela de Vermes (pág. 30), 4 rolagem na Tabela de Capangas (pág. 31), 5 rolagem na Tabela de Monstros Bizarros (pág. 33), 6 rolagem na Tabela de Chefões (pág. 32). Role novamente todos os dragões pequenos. Um monstro chefão que é encontrado como um monstro errante não tem chance de ser o chefão final.";
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "Uma Mulher de Branco aparece e pede para o grupo completar uma missão. Se você aceitar, faça uma rolagem na Tabela de Missão (pág. 34). Se você recusar, ela desaparece. Ignore qualquer outra aparição da Mulher de Branco no jogo.";
                        break;

                case 4:
                        document.getElementById("show-img").innerText = "Armadilha! Faça uma rolagem na Tabela de Armadilhas.";
                        break;

                case 5:
                        document.getElementById("show-img").innerText = "Você encontra um Curandeiro Nômade. Ele vai curar o seu grupo por 10 PO por ponto de vida curado. Você pode curar quantos pontos de vida você puder pagar. Você só pode encontrar o curandeiro uma vez por jogo. Se você encontrá-lo de novo, role novamente o resultado.";
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "Você encontra um Alquimista Nômade. Ele lhe venderá até uma poção de cura por membro do grupo (50 PO cada) ou uma única dose de veneno para lâmina (30 PO). A poção de cura irá curar todos os pontos vitais perdidos de um único personagem e pode ser engolida a qualquer momento durante o jogo como uma ação livre. O veneno da lâmina permite envenenar uma única flecha ou arma cortante (não uma arma esmagadora). Essa arma terá +1 no Ataque contra o primeiro inimigo que você lutar. O veneno não funciona em monstros mortos-vivos, demônios, gosmas, autômatos ou estátuas vivas. Você pode encontrar um alquimista nômade apenas uma vez por jogo. Se você encontrá-lo novamente, trate este resultado como uma armadilha e role na Tabela de Armadilhas (pág. 50).";
                        break;
        
                
        }

}

function magicos(){

        const magic = Math.floor(Math.random()*5)+1;

        switch (magic) {
                case 1:
                       document.getElementById("show-img").innerText = "Varinha do Sono. O usuário pode lançar a magia Sono 3 vezes antes que sua energia se esgote. Apenas magos e elfos podem usá-la. Adicione o nível do usuário para determinar o teste de magia, como você faria para uma magia de Sono lançada por aquele personagem."; 
                        break;

                case 2:
                       document.getElementById("show-img").innerText = "Anel de Teletransporte. Permite que o usuário passe automaticamente por um teste de Defesa movendo aquela personagem para fora da sala. Essa personagem pode não participar do combate atual, mas se junta ao grupo assim que o combate terminar. Após um uso, o anel perde seus poderes e se torna um anel de ouro simples que vale 1d6 + 1 PO."; 
                        break;

                case 3:
                       document.getElementById("show-img").innerText = "Ouro do Tolo. Essas peças de ouro mágicas (mas falsas) permitirão ao usuário subornar automaticamente o próximo monstro que pedir suborno. Não importa o que o monstro peça, aparecerá ouro o suficiente para satisfazer sua ganância. Este é um item mágico de uso único."; 
                        break;

                case 4:
                       document.getElementById("show-img").innerText = "Arma Mágica. Dá +1 às jogadas de Ataque de seu usuário. Este é um item mágico permanente. Role um d6 para determinar seu tipo: 1 arma leve de esmagamento, 2 arma leve cortante, 3 arma de mão de esmagamento, 4-5 arma de mão cortante, 6 arco."; 
                        break;

                case 5:
                       document.getElementById("show-img").innerText = "Poção de Cura. Pode ser usada a qualquer momento, curando todos os pontos de vida perdidos de um único personagem. Beber não requer uma ação. Este é um item mágico de uso único, utilizável por todas as classes, exceto bárbaros."; 
                        break;

                case 6:
                       document.getElementById("show-img").innerText = "Cajado de Bola de Fogo. Permite que seu usuário lance a magia Bola de Fogo duas vezes, então seus poderes esgotam. Apenas magos podem usá-lo. Adicione o nível do usuário para determinar a jogada de magia, como você faria para uma magia de Bola de Fogo lançada por aquela personagem."; 
                        break;
        
                
        }

}

function missoes() {
        
        const actions = Math.floor(Math.random()*5)+1;

        switch (actions) {
                case 1:
                        document.getElementById("show-img").innerText = "Traga-me a cabeça! A criatura pede ao grupo para matar um monstro chefão.Role na tabela de chefões para determinar qual. A próxima vez que o grupo encontrar um chefe em uma sala, em vez de rolar, você pode usar o chefão da missão. Matar o chefão e trazer sua cabeça para a sala da criatura completa a missão."; 
                        break;

                case 2:
                        document.getElementById("show-img").innerText = "Traga-me ouro! Para completar a missão, o grupo deve trazer d6 x 50 de tesouro para esta sala. Se eles já tiverem esse valor disponível, o valor necessário para completar a missão será dobrado."; 
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "Eu o quero vivo! Como a 1, mas o grupo deve subjugar o chefão, amarrá-lo com uma corda e levá-lo para a sala da criatura para completar a missão. Para subjugar um monstro, você deve usar a magia Dormir ou lutar com -1 em todas as jogadas de Ataque (atacar com a parte plana da lâmina ou tentar nocautear o chefe em vez de matá-lo)."; 
                        break;

                case 4:
                        document.getElementById("show-img").innerText = "Traga-me aquilo! Role a Tabela de Tesouros Mágicos (pág. 29) para determinar o que é o objeto. Cada vez que o grupo mata um chefe, há uma chance de 1 em 6 de ele ter aquele objeto além de seu tesouro, se houver. Para completar a missão, o grupo deve trazer o objeto para a sala onde a missão começou."; 
                        break;

                case 5:
                        document.getElementById("show-img").innerText = "Deixe a paz ser o seu caminho! Para completar a missão, o grupo deve completar pelo menos três encontros na aventura de uma forma não violenta. Isso inclui reações como suborno, obter ajuda de monstros, realizar outra missão (não esta!) ou derrotar um monstro com a magia Sono e amarrá-lo com uma corda"; 
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "Mate todos os monstros! Para completar a missão, todas as salas da masmorra devem ser dispostas e todos os ocupantes mortos, com exceção da criatura que enviou o grupo nesta missão. Assim que essas condições forem atendidas, o grupo pode reivindicar sua recompensa."; 
                        break;
        
                
        }

}

function epicas() {
        
        const epic = Math.floor(Math.random()*5)+1;

        switch (epic) {
                case 1:
                        document.getElementById("show-img").innerText = "O Livro de Skalitos. O grupo recebe o livro de magias que pertenceu ao lendário mago Skalitos. Isso conta como um pergaminho de cada uma das seis magias. Você pode rasgar as páginas e distribuir as seis magias entre o grupo para usar como pergaminhos ou deixar o livro como está e atribuí-lo a apenas um personagem. O livro é antigo e frágil e será destruído se o personagem que o carrega for morto pelo sopro do dragão. Se não for utilizado, o livro pode ser vendido por 650 PO no final da aventura.";
                        break;

                case 2:
                        document.getElementById("show-img").innerText = "O Ouro de Kerrak Dar. O grupo recebe a localização do tesouro que pertenceu a um anão. Assim que o grupo vasculhar uma sala e gerar pelo menos uma pista, eles podem usar essa pista para encontrar um baú escondido contendo 500 PO.";
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "Arma Encantada. Uma das armas do grupo está encantada e agora pode rolar dois dados para suas jogadas de Ataque, escolhendo o melhor resultado. A arma também pode atingir monstros que são atingidos apenas por magia. O encantamento dura até o final da aventura.";
                        break;

                case 4:
                        document.getElementById("show-img").innerText = "Escudo de Aviso. Um dos escudos do grupo agora está encantado e conta como proteção mesmo se o usuário for surpreendido por monstros errantes ou se o grupo estiver fugindo de um combate (pág. 45). Se o grupo não tiver escudos, eles receberão um. O escudo de aviso é permanente e durará por toda a campanha. Pode ser vendido por 200 PO.";
                        break;

                case 5:
                        document.getElementById("show-img").innerText = "Flecha Assassina. O grupo recebe uma flecha que infligirá automaticamente 3 ferimentos em um monstro. Role na Tabela de Chefões (pág. 32) para determinar qual monstro é afetado pela flecha. A flecha só pode ser usada por um personagem com arco. Ele ataca automaticamente o monstro alvo. Uma vez usada, a flecha quebra. Se não for usada, uma flecha assassina pode ser vendida por 3d6 x 15 PO.";
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "Símbolo Sagrado de Cura. O grupo recebe um símbolo sagrado que pode ser usado apenas por clérigos. Uma clériga com esse símbolo fará todos os testes de cura com +2 até morrer. Quando morre, o símbolo sagrado pode ser comprado pela igreja da personagem clériga. Se o símbolo e o corpo da clériga morta forem entregues à igreja, uma tentativa de ressuscitar essa clériga será paga pela igreja. Se não for usado, o símbolo sagrado pode ser vendido por 700 PO.";
                        break;
        
                
        }

}

function roomEmpyt() {

        const empytE = Math.floor(Math.random()*5)+1;

        switch (empytE) {
                case 1:
                        document.getElementById("show-img").innerText = "Ataque de monstros errantes!";
                        
                        break;
                case 2:
                        document.getElementById("show-img").innerText = "A sala esta vazia.";
                        
                        break;
                case 3:
                        document.getElementById("show-img").innerText = "A sala esta vazia.";
                        
                        
                        break;
                case 4:
                        document.getElementById("show-img").innerText = "A sala esta vazia.";
                        
                        break;
                case 5:
                        document.getElementById("show-img").innerText = "Escolha: você encontra uma pista, uma porta secreta ou um tesouro escondido"
                        
                        break;
                case 6:
                        document.getElementById("show-img").innerText = "Escolha: você encontra uma pista, uma porta secreta ou um tesouro escondido"
                        
                        break;
        
                
        }
        
}

function monstrosErr() {

        const monstrosE = Math.floor(Math.random()*5)+1;

        switch (monstrosE) {
                case 1:
                        document.getElementById("show-img").innerText = "role na tabela de vermes";
                        
                        break;

                case 2:
                        document.getElementById("show-img").innerText = "role na tabela de vermes";
                                
                        break;

                case 3:
                        document.getElementById("show-img").innerText = "role na tabela de capangas";
                        
                        break;

                case 4:
                        document.getElementById("show-img").innerText = "role na tabela de capangas";
                        
                        break;

                case 5:
                        document.getElementById("show-img").innerText = "role na tabela de monstros bizarros";
                        
                        break;

                case 6:
                        document.getElementById("show-img").innerText = "role na tabela de chefões. Role novamente qualquer dragão. Um monstro errante pode NÃO ser o chefão final.";
                        
                        break;
                       
        
                
        }
        
}

function doorLock(){
        document.getElementById("show-img").innerHTML = "<div style='font-size:0.9rem';><p>Você pode rolar um dado para cada porta que aparecer em uma sala. Em uma rolagem de 1 ou 2, essa porta está trancada. Role um d6 para o nível da fechadura. Marque uma porta trancada com um “T”. Você pode achar entediante rolar para cada porta, então considere esta uma regra opcional. A porta terá um nível, determinando o quão difícil é derrubá-la.<br> Você tem duas opções: 1. Quebrar a porta; OU 2. Arrombar a porta com itens de ladino. Quebrando a porta: Role um dado com uma personagem. Bárbaros e guerreiros adicionam o seu nível. Role um dado para determinar a resistência da porta: 1-3 a porta é de nível 3; 4-6 a porta é de nível 4 ou 5 ou 6, conforme a rolagem. Em uma aventura publicada, uma porta sempre será de nível 3, se não for especificado de outra forma. Se você for mais forte que a porta, a porta se abrirá. Se você não for mais forte que a porta, você pode tentar de novo mais tarde. Se você rolar um 1, o barulho atrai atenção indesejada. Role um monstro errante. <br>Quebrando uma porta com magia: Um mago também pode destruir uma porta com um raio ou uma bola de fogo. Isso é automático, mas custa uma magia.<br> Arrombar a porta: Apenas um ladino pode tentar arrombar a porta. Role um dado e adicione o nível do ladino. Se o ladino estiver sozinho na sala (nenhum amigo protegendo as suas costas), role com -1. Se o ladino vencer o nível da fechadura, a fechadura é arrombada e a porta está aberta. Se o ladino falhar, ele não conseguirá abrir a porta deverá ser derrubada.</p></div>";
}


function player01(){
         

         const tipoOne = document.getElementById("tipo01").value;

        const tipotwo = Number.parseInt(tipoOne); 

         switch (tipotwo) {
                case 1:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="7"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, escudo e uma arma de mão</textarea></div></div>';
                        break;
                
                case 2:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3">Pode lançar a magia Bênção até três vezes por aventura.(3) Pode usar o poder de Cura três vezes por jogo.(3)</textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, Escudo e arma de uma mão</textarea></div></div>';
                        break;

                case 3:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Corda, gazuas, armaduras leves e uma arma leve</textarea></div></div>';
                        break;

                case 4:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="3"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Arma leve, livro de magia, instrumentos de escrita.</textarea></div></div>';
                        break;
                        
                case 5:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="8"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura leve, escudo e uma arma de mão.</textarea></div></div>';
                        break;

                case 6:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, arma de mão, arco.</textarea></div></div>';
                        break;

                case 7:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="6"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, escudo, arma de mão</textarea></div></div>';
                        break;

                case 8:
                        document.getElementById("sheet01").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">3 rações, funda, arma leve</textarea></div></div>';
                        break;
         }
         
}

function player02(){
         

        const tipoOne = document.getElementById("tipo02").value;

       

        const tipotwo = Number.parseInt(tipoOne); 

        

         switch (tipotwo) {
                case 1:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="7"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, escudo e uma arma de mão</textarea></div></div>';
                        break;
                        
                case 2:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3">Pode lançar a magia Bênção até três vezes por aventura.(3) Pode usar o poder de Cura três vezes por jogo.(3)</textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, Escudo e arma de uma mão</textarea></div></div>';
                        break;
        
                case 3:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Corda, gazuas, armaduras leves e uma arma leve</textarea></div></div>';
                                break;
        
                case 4:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="3"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Arma leve, livro de magia, instrumentos de escrita.</textarea></div></div>';
                        break;
                                
                case 5:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="8"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura leve, escudo e uma arma de mão.</textarea></div></div>';
                        break;
        
                case 6:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, arma de mão, arco.</textarea></div></div>';
                        break;
        
                case 7:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="6"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, escudo, arma de mão</textarea></div></div>';
                        break;
        
                case 8:
                        document.getElementById("sheet02").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">3 rações, funda, arma leve</textarea></div></div>';
                        break;
         }
        
}

function player03(){
         

        const tipoOne = document.getElementById("tipo03").value;

       

        const tipotwo = Number.parseInt(tipoOne); 

        

         switch (tipotwo) {
                case 1:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="7"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, escudo e uma arma de mão</textarea></div></div>';
                        break;
                
                case 2:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3">Pode lançar a magia Bênção até três vezes por aventura.(3) Pode usar o poder de Cura três vezes por jogo.(3)</textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, Escudo e arma de uma mão</textarea></div></div>';
                        break;

                case 3:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Corda, gazuas, armaduras leves e uma arma leve</textarea></div></div>';
                        break;

                case 4:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="3"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Arma leve, livro de magia, instrumentos de escrita.</textarea></div></div>';
                        break;
                        
                case 5:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="8"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura leve, escudo e uma arma de mão.</textarea></div></div>';
                        break;

                case 6:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, arma de mão, arco.</textarea></div></div>';
                        break;

                case 7:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="6"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, escudo, arma de mão</textarea></div></div>';
                        break;

                case 8:
                        document.getElementById("sheet03").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">3 rações, funda, arma leve</textarea></div></div>';
                        break;
         }
        
}

function player04(){
         

        const tipoOne = document.getElementById("tipo04").value;

       

        const tipotwo = Number.parseInt(tipoOne); 

        

         switch (tipotwo) {
                case 1:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="7"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, escudo e uma arma de mão</textarea></div></div>';
                        break;
                
                case 2:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3">Pode lançar a magia Bênção até três vezes por aventura.(3) Pode usar o poder de Cura três vezes por jogo.(3)</textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura Leve, Escudo e arma de uma mão</textarea></div></div>';
                        break;

                case 3:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Corda, gazuas, armaduras leves e uma arma leve</textarea></div></div>';
                        break;

                case 4:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="3"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Arma leve, livro de magia, instrumentos de escrita.</textarea></div></div>';
                        break;
                        
                case 5:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="8"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">Armadura leve, escudo e uma arma de mão.</textarea></div></div>';
                        break;

                case 6:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="5"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, arma de mão, arco.</textarea></div></div>';
                        break;

                case 7:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="6"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">armadura leve, escudo, arma de mão</textarea></div></div>';
                        break;

                case 8:
                        document.getElementById("sheet04").innerHTML='<div class="sheet-l1"><div><h3>Nome: </h3></div><div><input type="text" class="name" placeholder="Personagem"></div><div><h3>Nível: </h3></div><div><input type="number" name="lvl" class="lvl" value="1"></div><div><h3>PO:</h3></div><div><input type="number" name="po" class="po" placeholder="$$$"></div></div><div class="sheet-l2"><div><h3>Tipo: </h3></div><div><h3>Vida:</h3></div><div><input type="number" name="life" class="life" value="4"></div></div><div class="sheet-l3"><div><h3>Ataque:</h3></div><div><select name="atk" class="atk"><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div><div><h3>Defesa:</h3></div><div><select name="def" class="def"><option value="-1">-1</option><option value="0">0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option></select></div></div><div class="hability"><h3>Habilidades:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="clues"><h3>Pistas:</h3><textarea name="" id="" cols="45" rows="3"></textarea></div><div class="equip"><h3>Equipamento:</h3><textarea name="" id="" cols="45" rows="3">3 rações, funda, arma leve</textarea></div></div>';
                        break;
         }
        
}



//event