#!/usr/bin/env node

const newLine = '\n';

const styleUnderscore = '\x1b[4m';
const styleBold = '\x1b[1m';
const styleReset = '\x1b[0m';

const styleFgYellow = '\x1b[33m';
const styleFgBlue = '\x1b[94m';

const buildText = (portions) => {
  portions.push(styleReset);
  return portions.join('');
};

let message = newLine;
message += buildText([styleFgYellow, 'Hello, world! 👋']);
message += buildText([newLine, styleFgBlue, styleBold, 'I am Jahir Fiquitiva']);
message +=
  buildText([newLine, 'I\'m a passionate and creative full stack developer from Colombia 🇨🇴 .']);
message += buildText([newLine, newLine, styleFgBlue, styleBold, 'Site: ']);
message += buildText([styleFgBlue, styleUnderscore, 'https://jahir.xyz']);
message += buildText([newLine, styleBold, 'GitHub: ']);
message += buildText([styleUnderscore, 'https://jahir.xyz/github']);
message += buildText([newLine, styleFgBlue, styleBold, 'Twitter: ']);
message += buildText([styleFgBlue, styleUnderscore, 'https://jahir.xyz/tweet']);
message += newLine;

console.log(message);
