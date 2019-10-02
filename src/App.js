import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fruit from "./components/Fruit";
import Display from "./components/Display";


export default class CenteredGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [
        {
          name: "Strawberry",
          amount: 100,
          carb: 8,
          sugar: 4.9,
          url: "/images/strawberries.jpg",
          id: 1,
          isSelected: false
        },
        {
          name: "Blueberry",
          amount: 100,
          carb: 10,
          sugar: 6,
          url: "/images/blueberry.jpg",
          id: 2,
          isSelected: false
        },
        {
          name: "Raspberry",
          amount: 100,
          carb: 2,
          sugar: 5,
          url: "/images/raspberries.jpg",
          id: 3,
          isSelected: false
        },
        {
          name: "Avacado",
          amount: 100,
          carb: 5,
          sugar: 10,
          url: "/images/Avacado.png",
          id: 4,
          isSelected: false
        },
        {
          name: "Blackberry",
          amount: 100,
          carb: 2,
          sugar: 5,
          url: "/images/blackberries.jpg",
          id: 5,
          isSelected: false
        },
        {
          name: "Lemon",
          amount: 100,
          carb: 9,
          sugar: 2.5,
          url: "/images/lemon.jpg",
          id: 6,
          isSelected: false
        }
      ]
    };
  }

  handleChangeInSelect(index, value) {
    this.setState(prevState => {
      const updatedFruits = [ ...prevState.fruits ];
      const updatedFruit = { ...updatedFruits[index] };
      updatedFruit.isSelected = value;
      updatedFruits[index] = updatedFruit;
      return {
        fruits: updatedFruits
      };
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          {this.state.fruits.map(fruit => (
            <Grid item xs={6} sm={3} m={3} l={3} xl={3} key={fruit.id.toString()}>
              <Fruit
                name={fruit.name}
                carb={fruit.carb}
                sugar={fruit.sugar}
                url={fruit.url}
                key={fruit.id.toString()}
                id={fruit.id}
                amount={fruit.amount}
                isSelected={fruit.isSelected}
                handleChange={this.handleChangeInSelect.bind(this)}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Display
              listOfFruits={this.state.fruits.filter(fruit => fruit.isSelected === true)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
