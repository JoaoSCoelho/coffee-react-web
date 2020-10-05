import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import CategoryCommand from '../../components/CategoryCommand';
import CommandPreviewName from '../../components/CommandPreviewName';

import './styles.css';

export default class Main extends Component {
  state = {
    commands: [],
    distinctCommandTypes: [],
  }

  componentDidMount() {
    this.loadCommands();
  };

  loadCommands = async () => {
    const response = await api.get('/commands');

    this.setState({ commands: response.data });

    this.loadTypeCommands();
  };

  loadTypeCommands = () => {
    const distinctCommandTypes = [];

    this.state.commands.forEach((command, index) => {
      if(!distinctCommandTypes.some(type => type.name === command.type)) {
        distinctCommandTypes.push({
          id: index,
          name: command.type, 
          displayState: false
        });
      };
    });

    this.setState({ distinctCommandTypes });
  };

  showCommands = (type) => {
    const containerCommandPreview = document.querySelector(`#Commands #container-command-previews-${ type.id }`);

    type.displayState ?
    containerCommandPreview.style.display = 'none' :
    containerCommandPreview.style.display = 'block';

    type.displayState = !type.displayState;
  }

  render() {
    const { distinctCommandTypes } = this.state;

    return (
      <div id="Commands">
        <Header />
        <main>
          { distinctCommandTypes.map(type => {
            const commandsOfType = this.state.commands.filter(command => command.type === type.name);

            const categoryCommandParams = { 
              type,
              showCommands: this.showCommands,
              commandsOfType,
            };

            return (
              <div>
                <CategoryCommand params={ categoryCommandParams }/>
                <div 
                  id={ `container-command-previews-${type.id}` }
                  className="container-command-previews" 
                  style={{ display: 'none' }}
                >
                  { commandsOfType.map(command => (
                    <CommandPreviewName key={ command.name } name={ command.name }/>
                  )) }
                </div>
              </div>
            );
          }) }
        </main>
      </div>
    )
  };
}