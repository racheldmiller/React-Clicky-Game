import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.svg";

// Specify Components used
import Card from "./components/Card/index";
import data from "../src/data.json";
import Footer from "../src/components/Footer/index";
import Header from "./components/Header/index";
import Nav from "./components/Nav/index";
import Wrapper from "./components/Wrapper/index";

class App extends Component {
  state = {
    data,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.data.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over\nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.data.find((o, i) => {
      if (o.id === id) {
        if (data[i].count === 0) {
          data[i].count = data[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.data.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };
  //  map over this.state.card and render a card component for each card object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Nav>
        <Header />
        {this.state.data.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
