//7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius

let tempF = Number(prompt("Qual a temperatura em Fahrenheit?"))

 
let tempC = (tempF - 32) * 0.5556


alert("a temperatura em Celcius é: " + tempC)