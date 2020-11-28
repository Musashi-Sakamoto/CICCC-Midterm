import React from 'react';
import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title} color="secondary">
              Pokedex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    {children}
    </>
  )
}

export default Layout;