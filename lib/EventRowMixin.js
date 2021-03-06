'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _EventCell = require('./EventCell');

var _EventCell2 = _interopRequireDefault(_EventCell);

var _height = require('dom-helpers/query/height');

var _height2 = _interopRequireDefault(_height);

var _propTypes = require('./utils/propTypes');

var _eventLevels = require('./utils/eventLevels');

var _selection = require('./utils/selection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propType: {
    slots: _react.PropTypes.number.isRequired,
    end: _react.PropTypes.instanceOf(Date),
    start: _react.PropTypes.instanceOf(Date),

    selected: _react.PropTypes.array,
    eventPropGetter: _react.PropTypes.func,
    titleAccessor: _propTypes.accessor,
    allDayAccessor: _propTypes.accessor,
    startAccessor: _propTypes.accessor,
    endAccessor: _propTypes.accessor,

    eventComponent: _propTypes.elementType,
    eventWrapperComponent: _propTypes.elementType.isRequired,
    onSelect: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      segments: [],
      selected: [],
      slots: 7
    };
  },
  renderEvent: function renderEvent(event) {
    var _props = this.props,
        eventPropGetter = _props.eventPropGetter,
        selected = _props.selected,
        start = _props.start,
        end = _props.end,
        startAccessor = _props.startAccessor,
        endAccessor = _props.endAccessor,
        titleAccessor = _props.titleAccessor,
        allDayAccessor = _props.allDayAccessor,
        eventComponent = _props.eventComponent,
        eventWrapperComponent = _props.eventWrapperComponent,
        onSelect = _props.onSelect;


    return _react2.default.createElement(_EventCell2.default, {
      event: event,
      eventWrapperComponent: eventWrapperComponent,
      eventPropGetter: eventPropGetter,
      onSelect: onSelect,
      selected: (0, _selection.isSelected)(event, selected),
      startAccessor: startAccessor,
      endAccessor: endAccessor,
      titleAccessor: titleAccessor,
      allDayAccessor: allDayAccessor,
      slotStart: start,
      slotEnd: end,
      eventComponent: eventComponent
    });
  },
  renderSpan: function renderSpan(len, key) {
    var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
    var slots = this.props.slots;


    return _react2.default.createElement(
      'div',
      { key: key, className: 'rbc-row-segment', style: (0, _eventLevels.segStyle)(Math.abs(len), slots) },
      content
    );
  },
  getRowHeight: function getRowHeight() {
    (0, _height2.default)((0, _reactDom.findDOMNode)(this));
  }
};
module.exports = exports['default'];