import { GetStaticProps } from 'next';
import Link from "next/link"
import Image from "next/image"
import apolloClient from "../graphql/apolloClient";
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, useMediaQuery, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { Info } from '@material-ui/icons'

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

export default function Home({ pokemons }: Pokemons) {
  const classes = useStyles();

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Container>
      <Box my={4}>
        <GridList cellHeight={250} className={classes.gridList} cols={matches ? 4: 1}>
  
        {pokemons.map((pokemon) => (
          <GridListTile key={pokemon.id}>
            <Image src={pokemon.image} alt={pokemon.image} width={0} height={0} layout="responsive"/>
            <GridListTileBar
              classes={{
                root: classes.titleBar
              }}
              title={pokemon.name}
              subtitle={<span>by: {pokemon.classification}</span>}
              actionIcon={
                <Link href={`/${pokemon.id}/`}>
                  <IconButton aria-label={`info about ${pokemon.name}`} className={classes.icon}>
                    <Info />
                  </IconButton>
                </Link> 
              }
            />
          </GridListTile>
        ))}
      </GridList>
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