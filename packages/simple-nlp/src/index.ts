// var natural = require("natural");
// var tokenizer = new natural.SentenceTokenizer();
// var content = `
// Postcards always spoil my holidays. Last summer, I went to Italy. I visited museums and sat in public gardens. A friendly waiter taught me a few words of Italian. Then he lent me a book. I read a few lines, but I did not understand a word. Everyday I thought about postcards. My holidays passed quickly, but I did not send cards to my friends. On the last day I made a big decision. I got up early and bought thirty-seven cards. I spent the whole day in my room, but I did not write a single card!
// `;
// console.log(tokenizer.tokenize(content));

import natural from "natural";

export function parseSentences(content: string) {
  var tokenizer = new natural.SentenceTokenizer();
  return tokenizer.tokenize(content);
}
