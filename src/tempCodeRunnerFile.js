  bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']]
  let brackets = bracketsConfig.join('').replace(/,/g, ''); // ()
  console.log(brackets)