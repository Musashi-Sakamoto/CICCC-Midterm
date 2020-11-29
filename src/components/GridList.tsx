import Link from "next/link"
import Image from "next/image"
import { makeStyles } from '@material-ui/core/styles'
import { GridListTile, GridListTileBar, IconButton, GridList, useMediaQuery } from '@material-ui/core';
import { Info } from '@material-ui/icons'
import { Pokemon } from './Detail';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export type PokemonForGrid = Pick<Pokemon, "image" | "name" | "id" | "classification">[]

interface IProps {
  pokemons: PokemonForGrid;
}

export default function GridListComponent({ pokemons }: IProps) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <GridList cellHeight={250} cols={matches ? 4: 1}>
  
        {pokemons.map((pokemon) => (
          <GridListTile key={pokemon.id}>
            <Image src={pokemon.image} alt={pokemon.image} width={250} height={250} layout="responsive"/>
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
  )
}
