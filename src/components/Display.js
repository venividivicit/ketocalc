import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  
  const carbs = props.listOfFruits.map(fruit => fruit.carb);
  const totalCarbs = carbs.reduce((total, num) => 
    {
      return total + num;
    },0);

  const sugar = props.listOfFruits.map(fruit => fruit.sugar);
  const totalSugar = sugar.reduce((total, num) => 
    {
      return total + num;
    },0);
 
  
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Nutrition Total
        </Typography>
        <Typography component="p">
          Total Carbs: {totalCarbs}g
        </Typography>
        <Typography component="p">
          Total Sugar: {totalSugar}g
        </Typography>
      </Paper>
    </div>
  );
}
