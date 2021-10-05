/*                              This is a a Text Adventure Game V.1.0

                                                also

                                    A history about heart choices

** Refactoring needs: 
    - A better class inheritance to define and describe game parts in an interactive fiction premise;
    - Improve IF conditions;
    - Translate the game to English. **

*/

// Defining prompt

const prompt = require('prompt-sync')();

// Creating a function to help clear terminal and scroll the text

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

// And the narrative begins - part.1

console.log(`O amor é uma estrada que hora se apresenta tortuosa e hora sem qualquer obstáculo... 
o ponto de chegada é sempre o mesmo verbo: evoluir. Adiante, pondo-nos a caminho que nos levará 
aos cumes que nossa alma pode alcançar.

Em meio à essas reflexões entre as montanhas acabamos pegando no sono... 

                              _    .  ,   .           .
                          *  / \\_ * / \\_           _  *        *   /\\'__        *
                            /    \  /     \\,       ((        .    _/   /  \\  *'.
                        .  /\\ /\\ /\\/:'  __\\_     '          _^/   ^/    '--.
                          /    \\ /  \\  _/     \\-'\\      *    /.'^_   \\_   .'\\  *
                         /\\  .-   '. \\/         \\ /==~=-=~=-=-;.  _/ \\ -. '_/   \\
                        /  '-.__ ^     / .-'.--     \\ =-=~_=-=~=^/ _ '--./ .-'  '-
                       /        '.    / /            '.~-^=-=~=^=.-'      '-._ '._

nossa direção é o reino de Dolphins e suas belas paisagens.

Logo pela manhã somos presenteados pelo frescor do vento juntamente com o abraço do sol. 
Nossas amigas andorinhas vem ao nosso encontro nos lembrando que o tempo guarda todas as coisas...

Refeição frugal e sustentadora. Partimos... `);
sleep(15000);
console.clear();

// Narrative part.2 - showed after 20 secs.

console.log(`Ao avistarmos o castelo nosso corpo é tomado de uma grande sensação de aventura. 
O que este lugar nos reserva?

                                       ____                                         
                                    .-"    '-.      ,                               
                                 . '          '.   /j\                              
                                 /              \,/:/#\                /\           
                                ;              ,//' '/#\              //#\          
                                |             /' :   '/#\            /  /#\         
                                :         ,  /' /'    '/#\__..--""""/    /#\__      
                                 \       /'\'-._:__    '/#\        ;      /#, """---
                                  '-.   / ;#\']" ; """--./#J       ':____...!       
                                     '-/   /#\  J  [;[;[;Y]         |      ;        
      """"""---....             __.--"/    '/#\ ;   " "  |     !    |   #! |        
                   ""--.. _.--""     /      ,/#\'-..____.;_,   |    |   '  |        
                         "-.        :_....___,/#} "####" | '_.-",   | #['  |        
                            '-._      |[;[;[;[;|         |.;'  /;\  |      |        
                            ,   '-.   |        :     _   .;'    /;\ |   #" |        
                            !      '._:      _  ;   ##' .;'      /;\|  _,  |        
                           .#\"""---..._    ';, |      .;{___     /;\  ]#' |__....--
                .--.      ;'/#\         \    ]! |       "| , """--./_J    /         
               /  '%;    /  '/#\         \   !' :        |!# #! #! #|    :'.__      
              i__..'%] _:_   ;##J         \      :"#...._!   '  "  "|__  |    '--.._
              | .--""" !|""""  |"""----...J     | '##"" '-._       |  """---.._    
          ____: |      #|      |         #|     |          "]      ;   ___...-"T,  
         /   :  :      !|      |   _______!_    |           |__..--;"""     ,;MM;  
        :____| :    .-.#|      |  /\      /#\   |          /'               ''MM;  
        |""": |   /   \|   .----+  ;      /#\  :___..--"";                  ,'MM; 
       _Y--:  |  ;     ;.-'      ;  \______/#: /         ;                  ''MM; 
      /    |  | ;_______;     ____!  |"##"""MM!         ;                    ,'MM;
     !_____|  |  |"#"#"|____.'""##"  |       :         ;                     ''MM  
     | """"--!._|     |##""         !       !         :____.....-------"""""" |'
     |          :     |______                        ___!_ "#""#""#"""#"""#"""|  
   __|          ;     |MM"MM"""""---..._______...--""MM"MM]                   |   
     "\-.      :      |#                                  :                   |  
       /#'.    |      /##,                                !                   |  
     .',/'\   |       #:#,                                ;       .==.       |  
    /"\'#"\',.|       ##;#,                               !     ,'||||',     |  
          /;/':       ######,          ____             _ :     M||||||M     |  
         ###          /;"\.__"-._   """                   |===..M!!!!!!M_____|  
                             '--..'--.._____             _!_                    
                                  '--...____,="_.''-.____        fsc`);

sleep(5000);
console.clear();

// Creating global vars
                        
var ans = 'S';
var ans1 = '';
var ans2 = '';
var ans3 = '';
var ans4 = '';

// Creating Classes

do {
    
  class Worth {
    constructor(name) {
      this.name = name;
    }
  };

  class Wallet extends Worth {
    constructor(name, state) {
      super(name);
      this.state = state;
    }
  };

  // Creating a bag to store collected items

  var bag = [];
    
  // Narrative part.3 - showed after 20 secs.

  console.log(`Ao se tornar príncipe-andarilho você adquiriu o gosto por conhecer diversos reinos 
  antes de governar o seu próprio.

  Este reino que agora está entrando é muito próspero, mas ao chegar notou que as pessoas que moram 
  aqui estão muito tristes. Foi então encaminhado diretamente à sala do trono para encontrar-se com o rei.
    
  Ao entrar na sala encontra a pintura de uma bela jovem e imediatamente se apaixona por ela. O rei lhe 
  explica que se trata de sua filha e que uma bruxa, com a capacidade de mudar de forma e com outros poderes
  mágicos muito fortes a roubou, levou para uma torre e tomou a forma de um dragão e vive em volta da torre 
  impedindo que qualquer pessoa a resgate.
    
  Imediatamente seu coração infla e decide sair em busca da princesa.`);
  console.log();
  sleep(20000);
  console.clear();

  // Narrative part.4 

  console.log(`Ao decidirmos o rei te dá o caminho, que é uma linha reta e ao final, 
  encontramos a torre com o dragão e a princesa presa no andar mais alto da torre.
    
  Ao iniciarmos a jornada encontramos um cavaleiro caído de seu cavalo com uma bela 
  armadura de prata, a perna dele estava quebrada e precisava de ajuda.`);
  console.log();

  ans1 = prompt('Seu coração está com pressa [P] ou sentido-se bom e generoso? [G] ---> ');
  console.log();

      // Adding item into bag

      if ( ans1 === 'G') {
        bag.push(armour = new Wallet ('armadura ', true));
        console.log(`Então você desce do seu cavalo, monta o cavaleiro nele e 
        leva à casa do aldeão mais próximo, auxiliando com todos os cuidados necessários à sua 
        recuperação.
        
        O cavaleiro então lhe diz: você é um jovem muito generoso e bom, portanto, vou te dar 
        esta armadura e ela tem um pode mágico, toda vez que alguém jogar sobre você alguma 
        injustiça, o brilho da armadura devolverá a injustiça para aquele que a emitiu.
        
        Você agradece e segue o caminho.`);
        console.log();
      } 
        else if ( ans1 === 'P') {
          bag.push(armour = new Wallet ('armadura ', false));
        }

  // Narrative part.5

  console.log(`Prosseguindo o caminho, você enconta um cervo que tinha em seus flancos uma flecha.`);
  console.log();

       ans2 = prompt('Seu coração está com pressa [P] ou sentido-se bom e generoso? [G] ---> ');
       console.log();

      // Adding item into bag

      if ( ans2 === 'G') {
        bag.push(arrow = new Wallet ('flecha ', true));
        console.log(`Então você desce do seu cavalo, retira a flecha dos flancos do cervo, faz um 
        curativo e ele então lhe diz: você mostrou bondade e generosidade, leva com você essa flecha 
        pois ela tem poderes mágicos e toda vez que alguém investir contra você com injustiça, essa 
        flecha será capaz de deter a injustiça.
        
        Você agradece e segue o caminho.`);
        console.log();
      } 
        else if ( ans2 === 'P') {
          bag.push(arrow = new Wallet ('flecha ', false));
        }

  // Narrative part.6

  console.log(`Prosseguindo o caminho, você enconta um homem com um dos pés presos em uma armadilha 
  de um caçador. Era o capelão da aldeia mais próxima e ele distraído pisou na armadilha! Cheio de 
  dor não conseguia desarmá-la.`);
  console.log();

      ans3 = prompt('Seu coração está com pressa [P] ou sentido-se bom e generoso? [G] ---> ');
      console.log();

      // Adding item into bag

      if ( ans3 === 'G') {
        bag.push(key = new Wallet ('chave ', true));
        console.log(`Num primeiro momento a armadilha se mostra muito dura e resistente e ao lado 
        apresentava uma pequena abertura para o encaixe de uma chave. Então você nota que o capelão 
        carrega consigo um molho de chaves e uma por uma você encaixa para abrir a armadilha.
        
        Por fim, sobrava uma única chave, dourada, antiga, e bela e você nota que foi a única 
        capaz de abrir a fechadura, liberando o capelão. 
        
        Ele então lhe diz: você mostrou bondade e generosidade, leva com você essa chave meu 
        jovem pois ela lhe abrirá todas as portas que lhe impedem de seguir em sua missão.
        
        Você agradece e segue o caminho.`);
        console.log();
      } 
        else if ( ans3 === 'P') {
          bag.push(key = new Wallet ('chave ', false));
        }

  // Narrative part.7

  console.log(`Você achando que está já bem próximo do castelo então encontra uma anciã que está 
  engasgada com algo e já estava asfixiando.`);
  console.log();

      ans4 = prompt('Seu coração está com pressa [P] ou sentido-se bom e generoso? [G] ---> ');
      console.log();

      // Adding item into bag

      if ( ans4 === 'G') {
        bag.push(nut = new Wallet ('noz ', true));
        console.log(`Com muita dificuldade você consegue a ajudar a cuspir o que a estava engasgando, 
        era uma noz. A anciã tentou quebrá-la com os dentes e se engasgou.
        
        Ele ela então lhe diz: você mostrou bondade e  generosidade, e eu vou lhe dar esta noz que me 
        tirou a voz, lhe dará voz no momento certo. Sou uma boa bruxa e quando você necessitar da 
        palavra certa a noz te inspirará.
        
        Você agradece e segue o caminho.`);
        console.log();
      } 
        else if ( ans4 === 'P') {
          bag.push(nut = new Wallet ('noz ', false));
        }
      
  // Organizing the bag to name items only so I can show them later

  var bagNames = [];

  for (let i of bag) {
      if (i.state === true) {
          bagNames.push(i.name);
      }
  };

  // Narrative part.8
  
  console.log(`Finalmente você encontra o castelo cercado pelo enorme e assustador dragão 
  que imediatamente investe contra você. 
  
  Você está carregando: ${bagNames}.`);
  console.log();
  ans1 = prompt(`O que você deseja usar? ---->`);
  console.log();

    if ( ans1 === 'armadura') {
      console.log(`Todas as chamas voltam para o dragão visto serem chamas injustas, pois você é 
      um jovem justo.`);
      console.log();
    } 
      else if ( ans3 !== 'armadura') {
        console.log(`Este item não é o mais apropriado, por favor, escolha outro.`);
      }

    // Narrative part.9
  
  console.log(`Então o dragão desiste de tentar queimá-lo e tenta devorá-lo. 
  
  Você está carregando: ${bagNames}.`);
  console.log();
  ans2 = prompt(`O que você deseja usar? ----> `);
  console.log();

    if ( ans2 === 'flecha') {
      console.log('Ela é lançada diretamente no coração do dragão que tomba morto.');
      console.log();
    } 
      else if ( ans3 !== 'flecha') {
        console.log(`Este item não é o mais apropriado, por favor, escolha outro.`);
      }

    // Narrative part.10

  console.log(`Imediatamente se depara com um cadeado velho e pesado na  porta e tenta 
  arrebentá-lo, sem sucesso. 
  
  Você está carregando: ${bagNames}.`);
  console.log();
  ans3 = prompt (`O que você deseja usar? ----> `);
  console.log();

    if ( ans3 === 'chave') {
      console.log(`A chave imediatamente abre o cadeado e com pressa você sobe todas as escadas
      e alcança os aposentos da princesa que imediatamente pensa: meu príncipe.`);
      console.log();
    } 
      else if ( ans3 !== 'chave') {
        console.log(`Este item não é o mais apropriado, por favor, escolha outro.`);
      }

    // Narrative part.11

  console.log(`Com medo, porém, ela lhe diz: a bruxa má se transforma no  que quiser quem 
  sabe você não é a bruxa a me enganar? Qual a frase que você tem pra me dizer que prova que é o 
  príncipe encantado da minha vida? 
  
  Você está carregando: ${bagNames}.`);
  console.log();
  ans4 = prompt (`O que você deseja usar? ----> `);
  console.log();

    if ( ans4 === 'noz') {
      console.log(`A inspiração lhe toma com a frase mágica: caminho reto, coração aberto e 
      um grande amor como direção.`);
      console.log();
    }
      else if ( ans3 !== 'noz') {
        console.log(`Este item não é o mais apropriado, por favor, escolha outro.`);
      }

    // Ending narrative

  console.log(`Os dois então se casam e são felizes para sempre!`);

  console.log();
  ans = prompt('Deseja jogar novamente? S/N ----> ');
  console.log();
} while (ans === 'S'); 