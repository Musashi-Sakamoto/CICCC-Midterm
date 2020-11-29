import React from "react"

import GridList, { PokemonForGrid } from "./GridList"

export default {
  title: 'GridItem',
}

const mockPokemons: PokemonForGrid = [
  {
    "id": "UG9rZW1vbjowMDE=",
    "name": "Bulbasaur",
    "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    "classification": "Seed Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDI=",
    "name": "Ivysaur",
    "image": "https://img.pokemondb.net/artwork/ivysaur.jpg",
    "classification": "Seed Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDM=",
    "name": "Venusaur",
    "image": "https://img.pokemondb.net/artwork/venusaur.jpg",
    "classification": "Seed Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDQ=",
    "name": "Charmander",
    "image": "https://img.pokemondb.net/artwork/charmander.jpg",
    "classification": "Lizard Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDU=",
    "name": "Charmeleon",
    "image": "https://img.pokemondb.net/artwork/charmeleon.jpg",
    "classification": "Flame Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDY=",
    "name": "Charizard",
    "image": "https://img.pokemondb.net/artwork/charizard.jpg",
    "classification": "Flame Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDc=",
    "name": "Squirtle",
    "image": "https://img.pokemondb.net/artwork/squirtle.jpg",
    "classification": "Tiny Turtle Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDg=",
    "name": "Wartortle",
    "image": "https://img.pokemondb.net/artwork/wartortle.jpg",
    "classification": "Turtle Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMDk=",
    "name": "Blastoise",
    "image": "https://img.pokemondb.net/artwork/blastoise.jpg",
    "classification": "Shellfish Pokémon",
  },
  {
    "id": "UG9rZW1vbjowMTA=",
    "name": "Caterpie",
    "image": "https://img.pokemondb.net/artwork/caterpie.jpg",
    "classification": "Worm Pokémon",
  }
]

export const showGridItem = () => <GridList pokemons={mockPokemons} />