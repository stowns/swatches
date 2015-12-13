'use strict';

import React from 'react';

import SwatchesColor from './SwatchesColor';

export class SwatchesGroup extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    groupCSS: {
      paddingBottom: '10px',
      width: '40px',
      float: 'left',
      marginRight: '10px'
    }
  }

  handleClick(data) {
    this.props.onClick(data);
  }

  render() {
    var colors = [];
    for (var i = 0; i < this.props.group.length; i++) {
      var color = this.props.group[i];

      colors.push(<SwatchesColor key={ color } color={ color } active={ color.replace('#', '').toLowerCase() === this.props.active } first={ i === 0 } last={ i === this.props.group.length - 1 } onClick={ this.handleClick } />);
    }

    return (
      <div style={this.props.groupCSS} ref="group">
        { colors }
      </div>
    );
  }

}

export default SwatchesGroup;
