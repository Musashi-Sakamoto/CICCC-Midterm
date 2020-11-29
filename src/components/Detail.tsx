import { Typography, Grid, Chip } from '@material-ui/core';
import BreadCrumbs from "./BreadCrumbs";
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
      <Typography variant="body1" gutterBottom>
      Types
      </Typography>
      <Grid item container justify="flex-start" alignItems="center">
      {pokemon.types.map((type, i) => <Chip variant="outlined" color="secondary" key={i} label={type} />)}
      </Grid>
      <Typography variant="body1" gutterBottom>
      resistant
      </Typography>
      <Grid item container justify="flex-start" alignItems="center">
      {pokemon.resistant.map((res, i) => <Chip color="primary" key={i} label={res} />)}
      </Grid>
      <Typography variant="body1" gutterBottom>
      weaknesses
      </Typography>
      <Grid item container justify="flex-start" alignItems="center">
      {pokemon.weaknesses.map((we, i) => <Chip color="secondary" key={i} label={we} />)}
      </Grid>
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