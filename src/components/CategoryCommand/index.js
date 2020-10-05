import React, { Component } from 'react';

import './styles.css';

import arrowRight from '../../assets/images/iconfinder_icon-arrow-right-b_211620.svg';

export default class CategoryCommand extends Component {
  rotateArrow = (type) => {
    const category = document.querySelector(`#Commands #type-commands-${ type.id }`);
    const arrow = category.querySelector('img');

    type.displayState ?
    arrow.style.transform = 'rotate(0deg)' :
    arrow.style.transform = 'rotate(90deg)';

    type.displayState = !type.displayState;
  };
  
  render() {
    const { type, showCommands, commandsOfType } = this.props.params;
    return (
      <div 
        key={ type.id } 
        id={ `type-commands-${ type.id }` } 
        className="category-commands" 
        onClick={ () => {
          showCommands(type);
          this.rotateArrow(type);
        } }
      >
        <strong>
          <img src={ arrowRight } alt="arrow right"/>
          { type.name }
        </strong>
        <div className="category-commands-counter">{ commandsOfType.length }</div>
      </div>
    )
  }
}