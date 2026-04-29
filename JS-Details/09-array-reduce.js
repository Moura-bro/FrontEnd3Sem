const Estoque = [
   {
     descricao:"Camisa Polo",
     cor:"Preta",
     Perfil:"M",
     quantidade: 10
   },
   {
     descricao:"Camisa Polo",
     cor:"Azul",
     Perfil:"F",
     quantidade: 26
   },
   {
     descricao:"Camisa Polo",
     cor:"Branca",
     Perfil:"F",
     quantidade: 18
   },
   {
     descricao:"Camisa Polo",
     cor:"Verde",
     Perfil:"M",
     quantidade: 16
   },
];

//Reduz o array a um unico elemento. no caso um somatorio,por exemplo

let totalDeCamisetasEmEstoque = Estoque.reduce((total, produto) => {
  return total + produto.quantidade;
}, 0);

console.log(`Total de camisetas em estoque ${totalDeCamisetasEmEstoque}`);
