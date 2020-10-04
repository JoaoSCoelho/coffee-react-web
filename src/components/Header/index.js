import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import coffeeLogo from '../../assets/images/iconfinder_coffee_zorro_avatar_cup_4043245.svg';

export default class Header extends Component {
  render() {
    return (
      <div id="Header">
        <div id="fake-header"></div>
        <header id="cabecalho">
          <Link to="/">
            <div id="logo">
              <img src={ coffeeLogo } alt="Coffee logo"/>
              <h1>Coffee</h1>
            </div>
          </Link>
        </header>
      </div>
    );
  };
};