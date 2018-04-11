import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ClickyImage from "./components/ClickyImage";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    characters: characters
  }

  markChecked = id => {
    const imageClicked = this.state.characters.find(image => image.id === id);

    if (imageClicked.clicked) {
      let shuffledChars = this.shuffleCharacters(this.resetArray(this.state.characters));
      this.setState({
        score: 0,
        message: "You guessed incorrectly!",
        characters: shuffledChars
      });
    }
    else {
      imageClicked.clicked = true;
      let shuffledChars = this.shuffleCharacters(this.state.characters);
      let currentScore = this.state.score + 1;
      let newTopScore = this.state.topScore;
      if (currentScore > newTopScore)
        newTopScore = currentScore;

      if (currentScore === 12 && newTopScore === 12) {
        this.setState({
          score: 0,
          topScore: 0,
          message: "You won!",
          characters: this.resetArray(this.state.characters)
        });
      }
      else {
        this.setState({
          score: currentScore,
          topScore: newTopScore,
          message: "You guessed correctly!",
          characters: shuffledChars
        });
      }
    }
  }

  resetArray = charArray => {
    charArray.forEach(char => {
      char.clicked = false;
    });
    return charArray;
  }

  shuffleCharacters = charArray => {
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    return charArray;
  }

  render() {
    return (
      <Wrapper>
        <Nav message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main>
          {this.state.characters.map((clicky) => (
            <ClickyImage
              id={clicky.id}
              key={clicky.id}
              image={clicky.image}
              onClick={this.markChecked} />
          ))}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
