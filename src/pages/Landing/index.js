import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import coffeeLogo from '../../assets/images/iconfinder_coffee_zorro_avatar_cup_4043245.svg'

export default class Main extends Component {
  render() {
    return (
      <div id="Landing">
        <main>
          <img src={ coffeeLogo } alt="Coffee-icon" id="logo" />

          <a href="https://discordapp.com/oauth2/authorize?=&client_id=663894792056602645&scope=bot&permissions=8">
            <button id="add-bot">Adicionar no servidor</button>
          </a>
          <a href="https://discord.gg/hNffyc3">
            <button id="support-server">Servidor de suporte</button>
          </a>
          <Link to="/commands">
            <button id="comandos-link">Comandos</button>
          </Link>
        </main>
      </div>
    )
  }
}