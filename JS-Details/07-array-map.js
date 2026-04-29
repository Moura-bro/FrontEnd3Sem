const hobbies  = [
    "Pensar",//0 
    "Jogar video game",//01
    "Ouvir musica",//02
    "Cozinhar",//03
    "Dormir",//04
    "Ver Filmes"//05
];

//Array map e um metodo da classe array que intera sobre o array retornando um novo array 
//,compondo um novo resultado para cada indice antigo, veja:


const novosHobbies = hobbies.map((hobby) => {
    //  return "<p>" + hobby  + "</p>";
     return `<p>${hobby}</p>`;
});

console.log(novosHobbies);
