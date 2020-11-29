import { Typography, makeStyles, LinearProgress, Tooltip } from '@material-ui/core';

interface IProps {
  value: number;
  title: "fleetRate" | "maxHP" | "maxCP";
}

const useStyles = makeStyles((theme) => ({
  maxHP: {
    backgroundColor: theme.palette.success.main
  },
  maxCP: {
    backgroundColor: theme.palette.error.main
  },
  fleetRate: {
    backgroundColor: theme.palette.info.main
  }
}));

export default function LinearProgressComponent({ title, value }: IProps) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" gutterBottom>
      {title}
      </Typography>
      <Tooltip title={`${title}: ${value}`} placement="top">
        <LinearProgress variant="determinate" color="primary" value={title === "fleetRate" ? value * 100 : (value / 5000) * 100} classes={{
          barColorPrimary: classes[title]
        }} />
      </Tooltip>
    </>
  )
}
