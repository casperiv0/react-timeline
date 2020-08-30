'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var TimelineDiv = styled__default['default'].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 auto;\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 6px;\n    background: ", ";\n    left: 50%;\n    margin-left: -3px;\n  }\n  @media (max-width: 768px) {\n    &::after {\n      left: 31px;\n    }\n  }\n"], ["\n  margin: 0 auto;\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 6px;\n    background: ", ";\n    left: 50%;\n    margin-left: -3px;\n  }\n  @media (max-width: 768px) {\n    &::after {\n      left: 31px;\n    }\n  }\n"])), function (props) { return (props.timelineBg ? props.timelineBg : "#44465c"); });
var TimelineItemDiv = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px 40px;\n  position: relative;\n  width: 50%;\n  &::after {\n    z-index: 10;\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    right: -13px;\n    width: 25px;\n    height: 25px;\n    background: ", ";\n    border-radius: 50%;\n    transform: translateY(-50%);\n  }\n  &.left {\n    left: 0;\n  }\n  &.right {\n    left: 50%;\n  }\n  &.right::after {\n    left: -12px;\n  }\n  &.left::before {\n    content: \"\";\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 50%;\n    right: 30px;\n    border: 10px solid ", ";\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent\n      ", ";\n    transform: translateY(-50%);\n  }\n  &.right::before {\n    content: \"\";\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 50%;\n    left: 30px;\n    border: 10px solid ", ";\n    border-width: 10px 10px 10px 0;\n    border-color: transparent\n      ", " transparent\n      transparent;\n    transform: translateY(-50%);\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n    &::before {\n      left: 60px;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent\n        ", " transparent\n        transparent;\n    }\n    &.left::after,\n    &.right::after {\n      left: 19px;\n      z-index: 10;\n    }\n    &.right {\n      left: 0;\n    }\n    &.left::before {\n      left: 60px;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent\n        ", " transparent\n        transparent;\n    }\n    &.right::before {\n      left: 60px;\n    }\n  }\n"], ["\n  padding: 10px 40px;\n  position: relative;\n  width: 50%;\n  &::after {\n    z-index: 10;\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    right: -13px;\n    width: 25px;\n    height: 25px;\n    background: ", ";\n    border-radius: 50%;\n    transform: translateY(-50%);\n  }\n  &.left {\n    left: 0;\n  }\n  &.right {\n    left: 50%;\n  }\n  &.right::after {\n    left: -12px;\n  }\n  &.left::before {\n    content: \"\";\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 50%;\n    right: 30px;\n    border: 10px solid ", ";\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent\n      ", ";\n    transform: translateY(-50%);\n  }\n  &.right::before {\n    content: \"\";\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 50%;\n    left: 30px;\n    border: 10px solid ", ";\n    border-width: 10px 10px 10px 0;\n    border-color: transparent\n      ", " transparent\n      transparent;\n    transform: translateY(-50%);\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n    &::before {\n      left: 60px;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent\n        ", " transparent\n        transparent;\n    }\n    &.left::after,\n    &.right::after {\n      left: 19px;\n      z-index: 10;\n    }\n    &.right {\n      left: 0;\n    }\n    &.left::before {\n      left: 60px;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent\n        ", " transparent\n        transparent;\n    }\n    &.right::before {\n      left: 60px;\n    }\n  }\n"])), function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) { return (props.bgColor ? props.bgColor : "#232535"); });
var TimelineItemBodyDiv = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 15px;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n"], ["\n  padding: 15px;\n  background-color: ", ";\n  border-radius: ",
    ";\n  color: ", ";\n"])), function (props) { return (props.bgColor ? props.bgColor : "#232535"); }, function (props) {
    return props.borderRadius ? props.borderRadius : "6px";
}, function (props) { return (props.bodyTextColor ? props.bodyTextColor : "#fff"); });
var TimelineItemHeaderDiv = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  color: white;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  color: white;\n"])));
var TimelineItemHeaderP = styled__default['default'].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: bold;\n"], ["\n  color: ", ";\n  font-weight: bold;\n"])), function (props) { return (props.dateColor ? props.dateColor : "#848892"); });
var TimelineItemHeaderH4 = styled__default['default'].h4(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  padding: 5px;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  padding: 5px;\n"])), function (props) { return (props.titleColor ? props.titleColor : "#fff"); }, function (props) { return (props.titleBg ? props.titleBg : "#44465c"); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Timeline = function (_a) {
    var timelineBg = _a.timelineBg, children = _a.children, rest = __rest(_a, ["timelineBg", "children"]);
    return (React.createElement(TimelineDiv, __assign({ timelineBg: timelineBg }, rest), children));
};
var TimelineItem = function (_a) {
    var bgColor = _a.bgColor, side = _a.side, borderRadius = _a.borderRadius, bodyTextColor = _a.bodyTextColor, dateColor = _a.dateColor, date = _a.date, titleColor = _a.titleColor, titleBg = _a.titleBg, title = _a.title, children = _a.children, rest = __rest(_a, ["bgColor", "side", "borderRadius", "bodyTextColor", "dateColor", "date", "titleColor", "titleBg", "title", "children"]);
    return (React.createElement(TimelineItemDiv, __assign({ bgColor: bgColor, className: side }, rest),
        React.createElement(TimelineItemBodyDiv, { borderRadius: borderRadius, bodyTextColor: bodyTextColor, bgColor: bgColor },
            React.createElement(TimelineItemHeaderDiv, null,
                React.createElement(TimelineItemHeaderP, { dateColor: dateColor }, date),
                React.createElement(TimelineItemHeaderH4, { titleColor: titleColor, titleBg: titleBg }, title)),
            children)));
};

exports.Timeline = Timeline;
exports.TimelineItem = TimelineItem;
//# sourceMappingURL=index.js.map
