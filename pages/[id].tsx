import { useEffect } from "react"
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from "next/image"

import firebase from "../src/firebase"
import apolloClient from "../graphql/apolloClient";
import gql from 'graphql-tag';
import { Container, Box, Grid } from '@material-ui/core';
import Details, { Pokemon, PokemonProps } from "../src/components/Detail";

export default function Detail({ pokemon }: PokemonProps) {

  useEffect(() => {
    firebase.analytics().logEvent(pokemon.name)
  }, [])

  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <Image src={pokemon.image} alt={pokemon.image} width={0} height={0} layout="responsive"/>
          </Grid>
          <Grid item container xs={12} sm={6} direction="column" justify="center">
            <Details pokemon={pokemon} />
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

interface Pokemons {
  pokemons: Pokemon[]
}

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