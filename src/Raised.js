/* jshint node: true, esnext: true */
"use strict";

var React = require('react');

class Raised extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static propTypes = {
    background: React.PropTypes.string,
    zDepth: React.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
    radius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
  }

  static defaultProps = {
    background: '#fff',
    zDepth: '1',
    radius: '2px',
    bgCSS: {
      Absolute: '0 0 0 0'
    },
    contentCSS: {
      position: 'relative'
    },
    wrapCSS: {
      position: 'relative'
    }
  }

  render() {
    let bgCSS = Object.assign(this.props.bgCSS, {
      boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
      borderRadius: this.props.radius,
      background: this.props.background
    });

    return (
      <div style={this.props.wrapCSS}>
        <div style={bgCSS} />
        <div style={this.props.contentCSS}>{ this.props.children }</div>
      </div>
    );
  }
}

module.exports = Raised;
