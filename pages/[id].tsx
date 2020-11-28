import { GetStaticProps, GetStaticPaths } from 'next';
import Image from "next/image"

import apolloClient from "../graphql/apolloClient";
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Typography, Grid, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Detail({ pokemon }: PokemonProps) {
  const classes = useStyles();
  console.log(pokemon)
  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <Image src={pokemon.image} alt={pokemon.image} width={0} height={0} layout="responsive"/>
          </Grid>
          <Grid item container xs={12} sm={6} direction="column" justify="center">
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
            Types {pokemon.types.map((type, i) => <Chip color="secondary" key={i} label={type} />)}
            </Typography>
            <Typography variant="body1" gutterBottom>
            resistant {pokemon.resistant.map((res, i) => <Chip color="secondary" key={i} label={res} />)}
            </Typography>
            <Typography variant="body1" gutterBottom>
            weaknesses {pokemon.weaknesses.map((we, i) => <Chip color="secondary" key={i} label={we} />)}
            </Typography>
            <Typography variant="body1" gutterBottom>
            fleeRate {pokemon.fleeRate}
            </Typography>
            <Typography variant="body1" gutterBottom>
            maxCP {pokemon.maxCP}
            </Typography>
            <Typography variant="body1" gutterBottom>
            maxHP {pokemon.maxHP}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const QUERY_POKEMONS = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
    }
  }
`

const QUERY_POKEMON = gql`
  query pokemon($id: String){
  pokemon(id: $id){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`

interface Pokemon {
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

interface Pokemons {
  pokemons: Pokemon[]
}

type PokemonProps = Record<"pokemon", Pokemon>

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<Pokemons>({
    query: QUERY_POKEMONS,
    variables: {
      first: 151
    }
  })
  const paths = data.pokemons.map(pokemon => `/${pokemon.id}`);
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<PokemonProps>({
    query: QUERY_POKEMON,
    variables: {
      id: params.id
    }
  })
  return {
    props: {
      pokemon: data.pokemon
    }
  }
}