/* @flow */

import findWithRegex from 'find-with-regex';

const MENTION_REGEX = /[@|＠][\w]*/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(MENTION_REGEX, contentBlock, callback);
};
