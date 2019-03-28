import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';
import GenerateSimpsons from './GenerateSimpsons';
import DisplaySimpsons from './DisplaySimpsons';

const  sampleSimpsons = {
  quote: "Last night's \"Itchy & Scratchy\" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
  character: "Comic Book Guy",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpsons:  sampleSimpsons
    };
  }
  getSimpsons() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpsons:  data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GenerateSimpsons selectSimpsons={() => this.getSimpsons()} />
        <DisplaySimpsons simpsons={this.state.simpsons} />








      </div>
    );
  }
}

export default App;
