import React from "react"
import { object } from '@storybook/addon-knobs';

import Detail, { Pokemon } from "./Detail"

export default {
  title: 'Detail',
}

const mockPokemon: Pokemon = {
  "number": "001",
  "id": "UG9rZW1vbjowMDE=",
  "name": "Bulbasaur",
  "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  "classification": "Seed Pokémon",
  "weight": {
    "maximum": "7.76kg",
    "minimum": "6.04kg"
  },
  "height": {
    "maximum": "0.79m",
    "minimum": "0.61m"
  },
  "types": [
    "Grass",
    "Poison"
  ],
  "resistant": [
    "Water",
    "Electric",
    "Grass",
    "Fighting",
    "Fairy"
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "fleeRate": 0.1,
  "maxCP": 951,
  "maxHP": 1071
}

export const showDetail= () => <Detail pokemon={object('pokemon', mockPokemon)} />