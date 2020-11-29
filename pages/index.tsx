import { GetStaticProps } from 'next';
import apolloClient from "../graphql/apolloClient";
import gql from 'graphql-tag';
import GridList from '../src/components/GridList'
import { Container, Box } from '@material-ui/core';

export default function Home({ pokemons }: Pokemons) {
  return (
    <Container>
      <Box my={4}>
        <GridList pokemons={pokemons} />
      </Box>
    </Container>
  )
}

const QUERY_POKEMONS = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      image
      classification
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await apolloClient.query<Pokemons>({
    query: QUERY_POKEMONS,
    variables: {
      first: 151
    }
  })
  return {
    props: {
      pokemons: data.pokemons
    }
  }
}