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

// SET THE INITIAL STATE
class App extends Component {
  state = {
    data, // All Spongebobs
    currentScore: 0,
    highestScore: 0
  };

  // SHUFFLE IMAGES
  // FUNCTION TO HANDLE THE CLICKS ON SPONGEBOB IMAGES
  handleClick = id => {
    this.state.data.find((char, i) => {
      if (char.id === id) {
        if (data[i].count === 0) {
          data[i].count = data[i].count + 1;
          // Set the state to reflect the change
          // Increase score by 1 everytime a user successfully picks other images
          this.setState(
            { currentScore: this.state.currentScore + 1 },
            function() {
              console.log("Aye-aye, captain!", this.state.currentScore);
            }
          );
          // Shuffle the images
          // this.state.data.sort(() => Math.floor(Math.random() * (i + 1)));
          this.state.data.sort(() => Math.random() - 0.5);
          return true;
          // If user picks same image 2x, stop the game
          // Run roundOver function
        } else {
          this.roundOver();
        }
      }
    });
  };

  // FUNCTION TO HANDLE RESULTS OF THE ROUND
  roundOver = () => {
    // (MOSTLY) CORRECT GUESSES: "Current score" becomes "highest score"
    if (this.state.currentScore > this.state.highestScore) {
      this.setState({ highestScore: this.state.currentScore }, function() {
        console.log("I'm Ready!", this.state.highestScore);
      });
    }
    this.state.data.forEach(card => {
      card.count = 0;
    });
    // INCORRECT GUESS: send an alert with user's score
    alert(
      `Awww, barnacles!\nYour Score: ${this.state.currentScore}\nTry again if you're not a super weenie hut junior! `
    );
    // Current Score goes back to 0
    this.setState({ currentScore: 0 });
    return true;
  };

  // --------------------------------- JSX ----------------------------------------
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
              handleClick={this.handleClick}
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
