'use strict';

import React from 'react';

export class SwatchesColor extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

  }

  static defaultProps = {
    colorCSS: {
      width: '40px',
      height: '24px',
      cursor: 'pointer',
      marginBottom: '1px'
    },
    checkCSS: {
      fill: '#fff',
      marginLeft: '8px'
    },
    firstCSS: {
      overflow: 'hidden',
      borderRadius: '2px 2px 0 0'
    },
    lastCSS: {
      overflow: 'hidden',
      borderRadius: '0 0 2px 2px'
    }
  }

  handleClick() {
    this.props.onClick(this.props.color);
  }

  render() {
    let colorCSS = Object.assign(this.props.colorCSS, {background: this.props.color});

    if (this.props.first) {
      colorCSS = Object.assign(colorCSS, this.props.firstCSS);
    } else if (this.props.last) {
      colorCSS = Object.assign(colorCSS, this.props.lastCSS);
    }

    let check;
    if (this.props.active) {
      check = (
        <div style={this.props.checkCSS}>
          <svg style={{ width:'24px', height:'24px', }} viewBox="0 0 24 24">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </div>
      )
    }
    return (
      <div style={colorCSS} ref="color" onClick={ this.handleClick }>
        {check}
      </div>
    );
  }

}

export default SwatchesColor;
