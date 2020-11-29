import { Typography, Grid, Chip } from '@material-ui/core';
import BreadCrumbs from "./BreadCrumbs";
import Chips from './Chips';
import LinearProgress from "./LinearProgress"
export default function Detail({ pokemon }: PokemonProps) {

  return (
    <>
      <BreadCrumbs name={pokemon.name} />
      <Typography variant="h5" gutterBottom>
        No.{pokemon.number}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {pokemon.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {pokemon.classification}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {pokemon.weight.maximum}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {pokemon.height.maximum}
      </Typography>
      <Chips title="types" values={pokemon.types} />
      <Chips title="resistant" values={pokemon.resistant} />
      <Chips title="weakness" values={pokemon.weaknesses} />
      <LinearProgress title="fleetRate" value={pokemon.fleeRate} />
      <LinearProgress title="maxCP" value={pokemon.maxCP} />
      <LinearProgress title="maxHP" value={pokemon.maxHP} />
    </>
  )
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string;
  weight: { minimum: string; maximum: string; }
  height: { minimum: string; maximum: string; }
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
}

export type PokemonProps = Record<"pokemon", Pokemon>