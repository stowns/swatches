'use strict';

import React from 'react';
import material from 'material-colors';

import Raised from './Raised';
import SwatchesGroup from './SwatchesGroup';

class Swatches extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps = {
    pickerCSS: {
      width: '320px',
      height: '240px',
    },
    overflowCSS: {
      height: '240px',
      overflowY: 'scroll',
    },
    bodyCSS: {
      padding: '16px 0 6px 16px',
    },
    clearCSS: {
      clear: 'both',
    }
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    var groups = [];
    if (this.props.colors) {
      for (var i = 0; i < this.props.colors.length; i++) {
        var group = this.props.colors[i];
        groups.push(<SwatchesGroup key={ group.toString() } group={ group } active={ this.props.hex } onClick={ this.handleChange } />);
      }
    }

    return (
      <div style={this.props.pickerCSS} >
        <Raised>
          <div style={this.props.overflowCSS}>
            <div style={this.props.bodyCSS} ref="body">
              { groups }
              <div style={this.props.clearCSS} />
            </div>
          </div>
        </Raised>
      </div>
    );
  }

}

Swatches.defaultProps = {
  colors: [
    [material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']],
    [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']],
    [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']],
    [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']],
    [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']],
    [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']],
    [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']],
    [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']],
    [material.teal['900'],  material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']],
    ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']],
    [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']],
    [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']],
    [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']],
    [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']],
    [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']],
    [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']],
    [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']],
    [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']],
  ],
};

export default Swatches;