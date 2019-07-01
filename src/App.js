import React, { Component } from "react";
import Cards from "./components/Cards";
import Display from "./components/Display";
import Title from "./components/Title";
import Card from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: Card,
    count: 0,
    highScore: 0,
    status: "Click an image to start!"
  };
  correctStatus = () => {
    switch (this.state.count) {
      case 0:
        this.setState({status: "You guessed correctly!"})
        break;
      case 1:
          this.setState({status: "You got 2 in a row!"})
        break;
      case 2:
          this.setState({status: "You got 3 in a row!"})
        break;
        case 3:
          this.setState({status: "You got 4 in a row!"})
        break;
        case 4:
          this.setState({status: "You got 5 in a row!"})
        break;
        case 5:
          this.setState({status: "You got 6 in a row!"})
        break;
        case 6:
          this.setState({status: "You got 7 in a row!"})
        break;
        case 7:
          this.setState({status: "You got 8 in a row!"})
        break;
        case 8:
          this.setState({status: "You got 9 in a row!"})
        break;
        case 9:
          this.setState({status: "You got 10 in a row!"})
        break;
        case 10:
          this.setState({status: "You got 11 in a row!"})
        break;
        case 11:
          this.setState({status: "You got them all right!"})
        break;
      default:
        console.log(this.state.status)
        break;
    }
  }
  shuffle = (array) => {
    array.sort(() => Math.random() - Math.random())
  };
  counter = () => {
    this.setState({ count: this.state.count + 1 })
    if (this.state.count < this.state.highScore) {
      this.setState({ highScore: this.state.highScore })
    } else {
      this.setState({ highScore: this.state.count + 1 })
    }
  };
  hasBeenClicked = id => {
    console.log(this.state.cards[id - 1].clicked)
    if (this.state.cards[id - 1].clicked === true) {
      var array = Object.assign({}, this.state);
      for (var i = 0; i < this.state.cards.length; i++) {
        array.cards[i].clicked = false
      }
      this.setState(array)
      this.setState({ count: 0 })
      this.setState({ status: "You lost. Try again!" })
    } else {
      var stateCopy = Object.assign({}, this.state);
      stateCopy.cards[id - 1].clicked = true
      this.setState(stateCopy);
      this.counter();
      let arr = this.state.cards;
      this.shuffle(arr);
      this.correctStatus();
    }
  }


  // Map over this.state.cards and render a cardsCard component for each cards object
  render() {
    return (
      <div>
        <Title>
          <ul>
            <li className="brand">{this.state.status}</li>
            <li className="brand">{`Score: ${this.state.count}`} {`Highscore: ${this.state.highScore}`}</li>
            <br />
            <li className="brand">Click all the images without clicking the same one to win!</li>
          </ul>
        </Title>
        <br/>
        <br />
        <br />
        <Display>
          {this.state.cards.map((card, index) => (
            <Cards
              hasBeenClicked={this.hasBeenClicked}
              id={index + 1}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Display>
      </div>
    );
  }
}

export default App;