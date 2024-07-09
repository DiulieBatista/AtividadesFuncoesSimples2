const ler = require('readline-sync')
 
let num =0;
let result;

function menu () {

  num = ler.questionInt(" digite um numero ");

console.log("---------------ESCOLHA UMA OPÇÃO --------------");
console.log(" 101.RAIZ QUADRADA  \n 102.METADE  \n 103.PORCETAGEM \n  104.DOBRO \n");
console.log("-----------------------------------------------");
let  opt = ler.questionInt("=>");
calculos(opt,num)
}

function calculos(opt,num) {
    

switch (opt ) {
    case 101:
         result=Math.sqrt(num);
       
        break;

    case 102:
        result= num /2;
        
        
        break;

    case 103:
        result= num - num *0.10;
        
        
        break;

    case 104:
        result= num + num ;
        
            
            break;
    

  
    default:
        console.log( "opção invalida !!");
        break;
}
exibir(result)

}
function exibir(result) {
    
    console.log("o  resultado da raiz quadrada e :  "+ result);
    console.log("a metade do valor e :  "+ result)
    console.log("o numero mais 10%  e :  "+ result)
    console.log("o dobro do numero é:  "+ result)
}
menu();