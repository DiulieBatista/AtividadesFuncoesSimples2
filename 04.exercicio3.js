const ler = require('readline-sync');
let result;
function menu() {
console.log("*** Imforme o valor da venda ***");
let valor = ler.questionFloat("=>");

console.clear();

console.log("---------------MENU OPÇÕES DE PAGAMENTO--------");
console.log(" 1.A VISTA \n 2.PRAZO 30 \n 3.PRAZO 60 \n 4.PRAZO 90 \n 5.CREDITO \n");
console.log("-------------------------------------------------");
let opt= ler.questionInt("=>");
captar (valor,opt ) 
}
function captar (valor,opt ) {
    
switch (opt) {
    case 1:
       result= valor -= valor *0.10 ;
        console.log("A vista desconto de 10%");
 
        break;
    case 2:
            result= valor -= valor *0.05 ;
             console.log(" a prazo 30 dias desconto 5% ");
            
         break;

    case 3:
            result= valor ;
             console.log(" a prazo 60 dias mesmo valor  ");
        

    
    case 4:
            result= valor += valor *0.05 ;
             console.log("a prazo 90 dias Acrescimo 5%");
        

         break;

    case 5:
        result= valor += valor *0.08 ;
             console.log(" No debito desconto de 8%");
             
             
         break;
     
     
    default:
        console.log("Opção inválida !!!")
        break;
}
exibir (result)
}

function exibir (result) {
    console.log(`realizando o pagamento  a vista  o valor ficara em ${result}`);
    console.log(`realizando o pagamento  a prazo em 30 o valor ficara em ${result}`);
    console.log(`realizando o pagamento  a  prazo em 60 o valor ficara em ${result}`);
    console.log(`realizando o pagamento   a prazo em 90  o valor ficara em ${result}`);
    console.log(`realizando o pagamento  no cartão de debito  o valor ficara em ${result}`);
}
menu();
