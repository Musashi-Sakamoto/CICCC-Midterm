import { GetStaticProps, GetStaticPaths } from 'next';
import apolloClient from "../graphql/apolloClient";
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Typography } from '@material-ui/core';

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
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        {JSON.stringify(pokemon, null, 4)}
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