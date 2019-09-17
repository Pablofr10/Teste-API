import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    }
  }

  componentDidMount() {
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((dados) => {
        let state = this.state;
        state.nutri = dados;
        this.setState(state);
        //console.log(dados);
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} className="capa" />
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="btn-Acc">Acessar</a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;