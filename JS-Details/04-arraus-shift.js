//indicies               0          1           2               3           4
let frutasCitricas = ["Limao ", "Laranja" , "Abaicaxi" , "Tangerimana" ,"Acerola"]

//Shift remove o primeiro elemento e reorganiza os indices 

console.log(frutasCitricas);
console.log(frutasCitricas[0])
console.log(frutasCitricas[1])
console.log(frutasCitricas[2])
console.log(frutasCitricas[3])
console.log(frutasCitricas[4])


let frutaremovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`Removemos a Fruta: ${frutaremovida}`)


console.log(frutasCitricas[0])
console.log(frutasCitricas[1])
console.log(frutasCitricas[2])
console.log(frutasCitricas[3])
console.log(frutasCitricas[4])

