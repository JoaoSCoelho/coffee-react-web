import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

import arrowRight from '../../assets/images/iconfinder_icon-arrow-right-b_211620.svg';

export default class Main extends Component {
  state = {
    commands: [],
  }

  componentDidMount() {
    this.loadCommands();
  };

  loadCommands = async () => {
    const response = await api.get('/products');

    console.log(response);
  };

  showCommands = () => {
    alert('Oi');
  };

  render() {
    return (
      <div id="Commands">
        <Header />
        <main>
          <div className="category-commands" onClick={ this.showCommands }>
            <strong>
              <img src={ arrowRight } alt="arrow right"/>
              Informativo
            </strong>
          </div>
          <div className="category-commands">
            <strong>
              <img src={ arrowRight } alt="arrow right"/>
              Geral
            </strong>
          </div>
        </main>
      </div>
    )
  };
}