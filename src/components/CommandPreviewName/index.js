import React, { Component } from 'react';

import './styles.css';

export default class CommandPreviewName extends Component {
  render() {
    return <p className="command-preview-name">{ this.props.name }</p>
  }
}