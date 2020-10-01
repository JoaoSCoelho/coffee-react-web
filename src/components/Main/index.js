import React from 'react';

import './styles.css'

import coffeeLogo from '../../assets/images/iconfinder_coffee_zorro_avatar_cup_4043245.svg'

const Main = () => (
  <main>
    <img src={ coffeeLogo } alt="Coffee-icon" id="logo" />
    <a href="https://discordapp.com/oauth2/authorize?=&client_id=663894792056602645&scope=bot&permissions=8">
      <button id="add-bot">Adicionar no servidor</button>
    </a>
    <a href="https://discord.gg/hNffyc3">
      <button id="support-server">Servidor de suporte</button>
    </a>
    <a href="#">
      <button id="comandos-link">Comandos</button>
    </a>
  </main>
)

export default Main;