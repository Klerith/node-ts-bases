"use strict";
// console.log( process.env );
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , , batman] = exports.characters;
// console.log(batman);
