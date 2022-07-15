module.exports = function check(str, bracketsConfig) {

  const pairBrackets = {
    cirBr: ['(', ')'],
    figBr: ['{', '}'],
    sqrBr: ['[', ']'],
    linBr: ['|', '|'],
  }
  

  // let str = '()[()]'
  const strArray = str.split('')

  const checkQuantity = array => array.length % 2 === 0 ? true : false


  // const checkPairing = (array, object) => {
  //   if (checkQuantity(array)) {



  //     let result = array.map(e => { 
        
  //     })

  //     // for (let key in object) {

  //     //   console.log(key + ': ', object[key], strArray)
  //     // }




  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // checkPairing(strArray, pairBrackets)



















  // const checkAlike = str => {

  // }

  // const checkSequence = (str, bracketsConfig) => {

  // }

  return checkSequence(str, bracketsConfig)

















}
