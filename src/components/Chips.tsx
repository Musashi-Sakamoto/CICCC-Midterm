import { Typography, Grid, Chip, makeStyles } from '@material-ui/core';

interface IProps {
  title: "types" | "resistant" | "weakness";
  values: string[]; 
}

const useStyles = makeStyles((theme) => ({
  types: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    marginRight: theme.spacing()
  },
  resistant: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    marginRight: theme.spacing()
  },
  weakness: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    marginRight: theme.spacing()
  }
}));

export default function Chips({ title, values }: IProps) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" gutterBottom>
      {title}
      </Typography>
      <Grid item container justify="flex-start" alignItems="center">
      {values.map((value, i) => <Chip className={classes[title]} key={i} label={value} />)}
      </Grid>
    </>
  )
}
