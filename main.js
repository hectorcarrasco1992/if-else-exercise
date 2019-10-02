function isItLong(str) {
  let response = " "

  if(str.length>20){
    response="That's a long string!"
  }else if(str.length<20 ||str.length === 20){
    response = undefined
  }
  return response


}
  
function isItMedium() {

}

function isItShort() {

}

function howLongIsMyString() {

}

function instructorHeight() {

}




module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}