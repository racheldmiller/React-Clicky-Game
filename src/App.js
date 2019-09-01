import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.svg";

// Import Components used
import Card from "./components/Card/index";
import data from "../src/data.json";
import Footer from "../src/components/Footer/index";
import Header from "./components/Header/index";
import Modal from "./components/Modal/index";
import Nav from "./components/Nav/index";
import Wrapper from "./components/Wrapper/index";

class App extends Component {
  // sets this.state.data to the data json array
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

// // NEED TO DOUBLE CHECK
// class App extends Component {
//   state = {
//     clickeddata: {},
//     highest: 0,
//     current: 0,
//     data: data,
//     message: "Click an image to start.",
//     class: "test",
//     display: "hidden",
//     score: 0
//   };

//   closeModal = () => {
//     this.setState({ display: "up" });
//   };

//   resetCurrent = () => {
//     this.setState({ clickedCards: {}, current: 0 });
//   };

//   shuffle = array => {
//     var currentIndex = array.length,
//       temporaryValue,
//       randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   };

//   clickImage = id => {
//     this.setState({ score: this.state.current });
//     if (this.state.clickedCards[id]) {
//       this.setState({
//         message: "You guessed incorrectly",
//         class: "red",
//         display: "down"
//       });
//       this.resetCurrent();
//       if (this.state.current > this.state.highest) {
//         this.setState({ highest: this.state.current });
//         this.resetCurrent();
//       }
//     } else {
//       this.setState({ message: "You guessed correctly", class: "green" });
//       const clickedCards = this.state.clickedCards;
//       clickedCards[id] = true;
//       let length = Object.keys(this.state.clickedCards).length;
//       this.setState({
//         clickedCards: clickedCards,
//         current: length
//       });
//     }
//     this.setState({ cards: this.shuffle(this.state.cards) });
//   };

//   render() {
//     return (
//       <Wrapper closeModal={this.closeModal}>
//         <Nav
//           current={this.state.current}
//           highest={this.state.highest}
//           message={this.state.message}
//           class={this.state.class}
//         />
//         <Header />
//         <div className="container">
//           <div className="row">
//             {this.state.cards.map(card => (
//               <Card
//                 name={card.name}
//                 id={card.id}
//                 image={card.image}
//                 clickImage={this.clickImage}
//                 key={card.id}
//               />
//             ))}
//           </div>
//         </div>
//         <Modal
//           display={this.state.display}
//           current={this.state.score}
//           highest={this.state.highest}
//           closeModal={this.closeModal}
//         />
//       </Wrapper>
//     );
//   }
// }
// NEED TO DOUBLE CHECK

export default App;
