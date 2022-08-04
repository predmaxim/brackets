module.exports = function check(str, bracketsConfig) {
  const stack = []
  const brackets = bracketsConfig.join('').replace(/,/g, '')

  for (let i = 0; i < str.length; i++) {

    const idx = brackets.indexOf(str[i])

    if (idx % 2 !== 0) {

      if (stack.pop() !== idx - 1) {
        return false
      }
    }
    else {
      str[i] === brackets[idx + 1] && stack[stack.length - 1] === idx ? stack.pop() : stack.push(idx)
    }

  }

  return stack.length === 0
}
