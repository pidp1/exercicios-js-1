//4. Dado os três lados de um triângulo determinar o perímetro do mesmo

let lado1 = Number(prompt("qual o tamanho do lado 1?"))
let lado2 = Number(prompt("qual o tamanho do lado 2?"))
let lado3 = Number(prompt("qual o tamanho do lado 3?"))

//let areaCirc = Math.PI*raioCirc*raioCirc 
let perimetroTri = lado1 + lado2 + lado3

//alert("a área do circulo é: " + areaCirc )
alert("o perimetro do triângulo é: " + perimetroTri)