const ler = require('readline-sync')

let valor=0;
let result;

function menu () {

valor = ler.question(" digite o valor da sua compra ");
  
console.log("---------------MENU OPÇÕES DE CLIENTE --------");
console.log(" 1.CLINTE COMUM  \n 2.FUNCIONARIO  \n 3.VIP \n ");
console.log("-------------------------------------------------");
let  opt = ler.questionInt("=>");
soma(valor,opt) ;


}

function soma (valor,opt) {
    

switch (opt ) {
    case 1:
         result=valor 
        
        break;

    case 2:
        result= valor - valor *0.05;
    
        
        break;

    case 3:
        result= valor - valor *0.10;
        
        
        break;

  
    default:
        console.log( "opção invalida !!");
        break;
}

exibir (result) 
}


function exibir (result) {
    console.log("o valor da compra pra cliente comum é:  "+ result);
    console.log("o valor da compra  para cliente vip é:  "+ result);
    console.log("o valor da compra  para funcionario é:  "+ result);
}
menu();
