function isItLong(str) {
  let response = " "

  if(str.length>20){
    response="That's a long string!"
  }else if(str.length<20 ||str.length === 20){
    response = undefined
  }
  return response


}
  
function isItMedium(str) {
  let response = " "

  if(str.length >=10 && str.length <= 20){
    response = "That's a regular sized string!"

  }else if(str.length <10 || str.length >20){
    response=undefined
  }
  return response;
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