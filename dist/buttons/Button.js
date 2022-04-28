"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _Button = _interopRequireDefault(require("@mui/material/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyButton = _ref => {
  let {
    loading,
    text,
    type = 'button',
    Icon,
    extraClasses = '',
    onClick = () => {},
    variant = 'primary',
    rightIcon = false,
    disabled = false,
    size = ''
  } = _ref;

  if (rightIcon) {
    extraClasses = extraClasses + ' icon-right';
  }

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: type,
    className: extraClasses + ' ' + (variant !== null && variant !== void 0 ? variant : ' ') + ' ' + size,
    onClick: onClick,
    disabled: disabled
  }, Icon && !rightIcon && /*#__PURE__*/_react.default.createElement(Icon, {
    size: 24
  }), text, Icon && rightIcon && /*#__PURE__*/_react.default.createElement(Icon, {
    size: 24
  }), loading && /*#__PURE__*/_react.default.createElement(_reactstrap.Spinner, {
    size: "sm",
    className: "loader"
  }));
};

var _default = MyButton;
exports.default = _default;