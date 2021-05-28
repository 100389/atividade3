// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 
//'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calculadora(operacao, operando1, operando2=1){
    // if(operacao == 'soma' || operacao =='multiplicacao'|| operacao == 'divisao' || operacao =='subtracao'){
    if ( ['soma', 'multiplicacao', 'divisao', 'subtracao'].includes(operacao) ){
        
        if(operacao=="soma"){
            return operando1 + operando2
        }
        if(operacao =="multiplicacao"){
            return operando1*operando2
        }
        if(operacao =="divisao"){
            return operando1/operando2
        }
        if(operacao =="subtracao"){
            return operando1-operando2
        }
    }
    else{
        return "Operacao invalida"

    }
    
}
let operacao = 'multiplicacao'


console.log(calculadora ('OK', 10, 20))
console.log(calculadora ('soma', 10, 20))
console.error(calculadora (operacao, 10, 20))
console.error(calculadora ("divisao", 10, 0))
console.error(calculadora ("soma", 10))

