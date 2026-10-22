function espaço() {
    return (" ")
}

// function verificarNumeroInvalido(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return true; 
//     }
//     return false;
// }

// function somar(a, b) {
//    if (verificarNumeroInvalido(a, b)) {
//         return "Erro: Digite apenas números para que possa ser válido!";
//    }
//    return a + b;
// }

// function subtrair(a, b) {
//    if (verificarNumeroInvalido(a, b)) {
//         return "Erro: Digite apenas números para que possa ser válidos!";
//    }
//    return a - b;
// }

// function multiplicar(a, b) {
//     if (verificarNumeroInvalido(a, b)) {
//         return "Erro: Digite apenas números para que possa ser válidos!";
//     }
//     return a * b;
// }

// function divisão(a, b) {
    
//     if (verificarNumeroInvalido(a, b)) {
//         return "Erro: Digite apenas números para que possa ser válidos!";
//     }

//     if (b === 0) {
//         return "Não pode dividir por zero!";
//     }
    
//     return a / b;
// } 


// let quest = Number(prompt("Digite um número:"));
// let quest2 = Number(prompt("Digite outro número:"));


// alert(`Seu resultado é ${espaço()} ${multiplicar(quest, quest2)} ${espaço()}  sendo que você pediu ${quest} x ${quest2}`);

function calcularMedia(a, b, c) { 
    let media = (a + b + c) / 3;
    
    if (media >= 7) { 
        return "Aprovado!";
    } 
    else if (media >= 5 && media < 7) { 
        return "Recuperação";
    } 
    else { 
        return "Reprovado!";
    } 
} 

function pedirNota(mensagem) {
    let entrada;
    while (true) {
        entrada = prompt(mensagem);
        
        
        if (entrada === null) entrada = "0"; 

       
      
    let nota = Number(entrada.replace(/,/g, '.'));

        
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            return nota; 
        }
        
        alert("Nota inválida! Digite um valor entre 0 e 10 (ex: 7,5 ou 7.5).");
    }
}


let n1 = pedirNota("Digite a primeira nota:"); 
let n2 = pedirNota("Digite a segunda nota:");
let n3 = pedirNota("Digite a terceira nota:"); 


let mediaFinal = (n1 + n2 + n3) / 3;
let resultado = calcularMedia(n1, n2, n3); 


alert(`A sua média é ${mediaFinal.toFixed(2)}. Portanto você está: ${resultado}`);
