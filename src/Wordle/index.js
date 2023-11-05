"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var constant_1 = require("../constant");
var Keyboard_1 = __importDefault(require("./Keyboard"));
var Grid_1 = __importDefault(require("./Grid"));
function Wordle(_a) {
    var matchWord = _a.matchWord;
    var _b = (0, react_1.useState)([]), attempts = _b[0], setAttempts = _b[1];
    var _c = (0, react_1.useState)(""), currentAttempt = _c[0], setCurrentAttempt = _c[1];
    var isFinished = attempts.length === 6 || attempts[attempts.length - 1] === matchWord;
    (0, react_1.useEffect)(function () {
        if (attempts[attempts.length - 1] === matchWord) {
            setTimeout(function () {
                alert("You win!");
            }, 100);
            return;
        }
    }, [attempts]);
    var handleAddChar = function (character) {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }
        if (currentAttempt.length === constant_1.cellCount) {
            alert("No more characters to add!");
            return;
        }
        var newAttempt = currentAttempt + character;
        setCurrentAttempt(newAttempt);
    };
    var handleDeleteChar = function () {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }
        if (currentAttempt.length === 0) {
            alert("No more characters to delete!");
            return;
        }
        var newAttempt = currentAttempt.slice(0, -1);
        setCurrentAttempt(newAttempt);
    };
    var handleSubmitAttempt = function () {
        if (isFinished) {
            alert("Game is finished!");
            return;
        }
        if (currentAttempt.length !== constant_1.cellCount) {
            alert("Please fill in all the characters!");
            return;
        }
        setAttempts(__spreadArray(__spreadArray([], attempts, true), [currentAttempt], false));
        setCurrentAttempt("");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "wordle-game", children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { matchWord: matchWord, attempts: attempts, currentAttempt: currentAttempt }), (0, jsx_runtime_1.jsx)(Keyboard_1.default, { handleAddChar: handleAddChar, handleDeleteChar: handleDeleteChar, handleSubmitAttempt: handleSubmitAttempt })] }));
}
exports.default = Wordle;
