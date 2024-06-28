import "./App.css";
import React from "react";

function ColorDisplay(props) {
  if (props.color !== "") {
    return <li>couleur: {props.color}</li>;
  } else {
    return <li> Couleur non définie</li>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chageColor = this.chageColor.bind(this);

    this.state = {
      brand: "Ford",
      model: "Escort",
      color: "",
    };
  }

  chageColor(event) {
    this.setState({ color: event.target.value });
    event.target.value = "";
  }

  render() {
    return (
      <div className="App">
        <hearder>
          <h1>Ma Voiture</h1>
        </hearder>
        <main>
          <h2>Ses caractéristiques</h2>
          <ul>
            <li>marque:{this.state.brand}</li>
            <li>modèle:{this.state.model}</li>
            <ColorDisplay color={this.state.color} />
          </ul>
          <form className="form">
            <label htmlFor="color">choissisez la couleur</label>
            <select name="color" onChange={this.chageColor}>
              <option>--veuillez faire un choix--</option>
              <option value="Blanc">Blanc</option>
              <option value="Bleu">Bleu</option>
              <option value="Vert">Vert</option>
              <option value="Rouge">Rouge</option>
              <option value="Noir">Noir</option>
            </select>
          </form>
        </main>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
// }

export default App;
