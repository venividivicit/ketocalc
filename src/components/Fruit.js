import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [cards, setCards] = useState({
    buttonTitle: "Select"
  });

  const handleSelection = () => {
    if (cards.buttonTitle === "Select") {
      setCards({ buttonTitle: "Unselect" });
      props.handleChange(props.id - 1, true);
      
    } else {
      setCards({ buttonTitle: "Select" });
      props.handleChange(props.id - 1, false);
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.url}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Amount per: {props.amount}g
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Carbs: {props.carb}g
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          Sugar: {props.sugar}g
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={handleSelection}>
          {cards.buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
}
