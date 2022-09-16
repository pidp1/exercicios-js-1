//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

let raioCirc = Number(prompt("qual o raio do circulo?"))


let areaCirc = Math.PI*raioCirc*raioCirc 
let perimetroCirc = 2*Math.PI*raioCirc

alert("a área do circulo é: " + areaCirc )
alert("o perimetro do circulo é: " + perimetroCirc)