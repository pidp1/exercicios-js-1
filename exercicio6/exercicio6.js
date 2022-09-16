//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

let numInt1 = Number(prompt("digite um numero inteiro"))
let numInt2 = Number(prompt("digite outro numero inteiro"))


//let areaCirc = Math.PI*raioCirc*raioCirc 
let resultDiv = Math.floor(numInt1/numInt2)
let restoDiv = numInt1 % numInt2 
//alert("a área do circulo é: " + areaCirc )
alert("o resultado é: " + resultDiv + " e o resto é: " + restoDiv)