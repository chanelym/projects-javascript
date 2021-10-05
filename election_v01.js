/*                              --> ELECTION PANEL <--

    Task 1. Receive as many votes as user wants to;
    Task 2. Function autorizaVoto(anoNascimento) with Denied, Optional or Mandatory 
    output message based on voter's age;
    Task 3. Function votacao(autorizacao, voto) that validates and count candidates 
    votes based on the result of the prior function;
    Task 4. Register and count the votes;
    Task 5. Function exibirResultados() containing the amount of votes per candidate,
    null votes and blank votes. Also the biggest election's winner.
*/

const prompt = require('prompt-sync')();

/*  Had specifically this Panel ideia hoping Blue EdTech can become a more diverse and inclusive school.
    All the candidates info was extracted from LinkedIn!
*/

console.log('============================================================================================');
console.log('||                 Seja bem-vinde ao Painel de Inclusão Blue EdTech =D                    ||');
console.log('||                                                                                        ||');
console.log('|| "A multiplicidade da marca representa os diversos públicos que são bem vindos à Blue." ||');
console.log('||                                                                                        ||');
console.log('|| Colocando a diversidade e a representatividade em prática queremos o seu voto para     ||');
console.log('|| escolher a nova pessoa que comporá o quadro de aconselhamento da Blue.                 ||');
console.log('||                                                                                        ||');
console.log('|| Selecionamos as pessoas abaixo e gostaríamos que você as conhecesse:                   ||');
console.log('||                                                                                        ||');
console.log('|| -> Tecle CA para saber sobre Camila Achutti                                            ||');
console.log('|| -> Tecle ML para saber sobre Maitê Lourenço                                            ||');
console.log('|| -> Tecle MG para saber sobre Murilo Gun                                                ||');
console.log('||                                                                                        ||');
console.log('============================================================================================');
console.log();

var CA = '';
var ML = ''; 
var MG = '';

var ans = 'S';

// Presenting candidates

do {
    let candidate = prompt('Digite aqui a sua escolha ----> '); // Refactor this part validating user imput

    switch (candidate) {
        case 'CA':
            console.log(`Camila Achutti é mulher, em 2019, virou quadrinho do Maurício de Souza representando 
            as meninas na tecnologia no projeto #DonaDaRua.
            
            É fundadora e CEO da Mastertech, escola de pensamento digital, ágil, lógico e humano.Trabalhou 
            com grandes empresas como Google, Intel, Accenture, Itaú, Citibank Leroy Merlin, Renault, TIM e IBM.

            Ela também é criadora do portal “Mulheres na Computação”, uma das primeiras e mais influentes 
            iniciativas para a inclusão de mulheres no cenário tecnológico contemporâneo.

            Acredita que tecnologia é sobre transformação e faz de tudo para levar essa mensagem por onde passa!`);
            break;

        case 'ML':
            console.log();
            console.log(`Maitê Lourenço é mulher negra, psicóloga, fundadora do BlackRocks Startups, que incentiva 
            empreendedores negros a acessarem o ecossistema de inovação, tecnologia e startup.
            
            Finalista do Startup Awards, categoria Impacto Social, uma das mulheres inspiradoras da Think Olga e 
            premiada pela Revista Veja no Prêmio Veja-se, categoria diversidade, todas as premiações em 2017.
            
            Campeã da categoria Impacto Social do Startup Awards, Inspiração do Programa Caldeirão do Huck, 
            Speaker TEDx João Pessoa e EuroLeads - Paris/França em 2018. Em 2019, imersão no Vale do Silício e 
            Intercâmbio profissional pelo IVLP do Consulado Americano.`); 
            break;

        case 'MG':
            console.log();
            console.log(`Murilo Gun é nordestino, se descreve como Ex-nerd dos anos 90. Ex-autor de livros sobre
            internet. Ex-empresário de tecnologia. Ex-administrador de empresas. Ex-comediante stand-up. 
            Ex-aluno de futurismo da Singularity na NASA. Ex-apresentador de televisão. Ex-perto.
            
            “Ex-perto” porque eu descobri que eu poderia juntar todas essas minhas “ex-periências”, somar com a 
            minha paixão por educação e ir atrás do meu sonho abusado de erradicar o desperdício de potencial 
            humano no mundo.`);
            console.log();
            break;
    }
    console.log();
    ans = prompt(`-> Para saber mais sobre outro cadidato digite S
    -> Para dar continuidade à votação digite N ----> `); // Refactor this part validating user imput
    console.log();
} while (ans === 'S');

var anoAtual = new Date().getFullYear();
var anoNascimento = 0;

var voto = 0;
var autorizacao = '';

var cand1 = 0;
var cand2 = 0;
var cand3 = 0;
var cand4 = 0;
var cand5 = 0;

console.log('Para começarmos preciso de duas informações.')
console.log();

do { // Starting Task 2
    
    anoNascimento = prompt('Qual seu ano de nascimento? ----> ');
            while (!/^[0-9]+$/.test(anoNascimento)) {
                console.log("O que você digitou não é um número!");
                anoNascimento = prompt('Qual seu ano de nascimento? ----> ');
            }
    console.log();

    function autorizaVoto(anoNascimento){
        
        console.log();
        
        let idade = anoAtual - anoNascimento; 

        if ( idade >= 16 && idade <= 17 || idade >= 70 ) {
            console.log(`Você tem ${idade} anos e seu voto é OPCIONAL`);
            autorizacao = 'opcional';
        } else if ( idade > 17 && idade < 70 ) {
            console.log(`Você tem ${idade} anos e seu voto é OBRIGATÓRIO`);
            autorizacao = 'obrigatorio';
        } else {
            console.log(`Você tem ${idade} anos e você não pode votar`);
            autorizacao = 'negado';
        }
    }

    // Starting Task 3

    autorizaVoto(anoNascimento);

    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log('|| Agora que sabemos sua idade vamos aos votos.                                       ||');
    console.log('||                                                                                    ||');
    console.log('|| [1] - Para votar em CAMILA ACHUTTI                                                 ||');
    console.log('|| [2] - Para votar em MAITÊ LOURENÇO                                                 ||');
    console.log('|| [3] - Para votar em MURILO GUN                                                     ||');
    console.log('|| [4] - Para votar NULO                                                              ||');
    console.log('|| [5] - Para votar em BRANCO                                                         ||');
    console.log('||                                                                                    ||');
    voto = +prompt('Digite o NÚMERO da sua escolha. ----> ');
    while (!/^[0-9]+$/.test(voto)) {
        console.log("O que você digitou não é um número!");
        voto = prompt('Digite o NÚMERO da sua escolha. ----> ');
    }    

    /* Found out that in IF/IF ELSE statements the operator '&&' is processed before the '||' and I need to put the first 
    condition with '||' into brackets so it can work properly.
    */

    // Starting Task 4
    // Refactor this part without all this IF's conditions

    function votacao(autorizacao, voto) {
        if ( autorizacao === 'negado') {
            console.log('Por ser menor de idade você não pode votar. Seu voto não será contabilizado.');
            console.log();
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 1 ) {
            cand1++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 2 ) {
            cand2++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 3 ) {
            cand3++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 4 ) {
            cand4++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 5 ) {
            cand5++;
        }
    }

    votacao(autorizacao, voto);
    
    console.log();
    ans = prompt('Deseja cadastrar o voto de mais alguma pessoa? S/N ----> ');
    console.log();
} while (ans === 'S'); // Finishing Task 1

// Starting Task 5
// Refactor this part solving tie problem

let winnerList = [cand1, cand2, cand3, cand4, cand5];

let p1 = 'Camila Achutti';
let p2 = 'Maitê Lourenço';
let p3 = 'Murilo Gun';

function exibirResultados() {
    console.log(`A pessoa ${p1} recebeu ${cand1} votos`);
    console.log(`A pessoa ${p2} Lourenço recebeu ${cand2} votos`);
    console.log(`A pessoa ${p3} recebeu ${cand3} votos`);
    console.log(`${cand4} votos nulos`);
    console.log(`${cand5} votos em branco`);
    console.log();

    let winner = Math.max.apply(Math, winnerList);

    if ( winner === winnerList[0]){
        console.log(`A grande pessoa vencedora é ${p1} com ${cand1} votos`);
    } else if ( winner === winnerList[1]){
        console.log(`A grande pessoa vencedora é ${p2} com ${cand2} votos`);
    } else if ( winner === winnerList[2]){
        console.log(`A grande pessoa vencedora é ${p3} com ${cand3} votos`);
    } 
}

exibirResultados();