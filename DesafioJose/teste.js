import { pokemons } from "./data.js";
import { tradutor } from "./tradutor.js";

// let pesquisa = (nome) =>
//   pokemons.map((pokemon) => {
//     if (pokemon.name == nome) {
//       return pokemon;
//     }
//   });

let pesquisa = (nome) =>
  pokemons.filter((pokemon) => {
    if (pokemon.name == nome) {
      return pokemon;
    }
  });
let lista = (tipo) =>
  pokemons.filter((pokemon) => {
    if (pokemon.type.includes(tipo)) {
      return pokemon;
    }
  });

const tipos = pokemons.reduce((acc, cur) => {
  cur.type.map((type) => {
    if (!acc.includes(type)) {
      acc.push(type);
    }
  });
  return acc;
}, []);

const traduz = pokemons.map((pokemon) => {
  return {
    ...pokemon,
    type: pokemon.type.map((type) => {
      return tradutor[type];
    }),
  };
});

console.log(pesquisa("ivysaur"));

console.log(lista("grass"));

console.log(tipos); //Usei pra listar todos os tipos do data.js

console.log(traduz);
