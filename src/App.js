import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.svg";

// ---------------------- ALL COMPONENTS USED ----------------------------
import Card from "./components/Card/index";
import data from "../src/data.json";
import Footer from "../src/components/Footer/index";
import Header from "./components/Header/index";
import Nav from "./components/Nav/index";
import Wrapper from "./components/Wrapper/index";

// --------------------- CREATE CLASS (APP) EXTEND { COMPONENT } --------------------

// set the state
class App extends Component {
  state = {
    data, // All Spongebobs
    currentScore: 0,
    highestScore: 0
  };

  gameOver = () => {
    if (this.state.currentScore > this.state.highestScore) {
      this.setState({ highestScore: this.state.currentScore }, function() {
        console.log(this.state.highestScore);
      });
    }
    this.state.data.forEach(card => {
      card.count = 0;
    });
    alert(`Awww, barnacles!\nYour Score: ${this.state.currentScore}`);
    this.setState({ currentScore: 0 });
    return true;
  };

  clickCount = id => {
    this.state.data.find((o, i) => {
      if (o.id === id) {
        if (data[i].count === 0) {
          data[i].count = data[i].count + 1;
          this.setState(
            { currentScore: this.state.currentScore + 1 },
            function() {
              console.log(this.state.currentScore);
            }
          );
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
      <div>
        <Wrapper>
          <Nav
            currentScore={this.state.currentScore}
            highestScore={this.state.highestScore}
          ></Nav>
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
      </div>
    );
  }
}

export default App;
