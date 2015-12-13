/* jshint node: true, esnext: true */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Raised = (function (_React$Component) {
  _inherits(Raised, _React$Component);

  function Raised(props) {
    _classCallCheck(this, Raised);

    _get(Object.getPrototypeOf(Raised.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Raised, [{
    key: 'render',
    value: function render() {
      var bgCSS = Object.assign(this.props.bgCSS, {
        boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
        borderRadius: this.props.radius,
        background: this.props.background
      });

      return React.createElement(
        'div',
        { style: this.props.wrapCSS },
        React.createElement('div', { style: bgCSS }),
        React.createElement(
          'div',
          { style: this.props.contentCSS },
          this.props.children
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      background: React.PropTypes.string,
      zDepth: React.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
      radius: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
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
    },
    enumerable: true
  }]);

  return Raised;
})(React.Component);

module.exports = Raised;