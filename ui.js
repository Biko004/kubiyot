// var dice = {
//   sides: 6,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }
//
//
//
// //Prints dice roll to the page
//
// function printNumber(number) {
//   var placeholder = document.getElementById('placeholder');
//   placeholder.innerHTML = number;
// }
//
var button = document.getElementById('button');

button.onclick = function() {
  randomImg();
  randomImg2();
};


function randomImg(){
var randomNumber = Math.floor(Math.random() * 6) + 1;
var imgName = "img_" + randomNumber + ".png";
document.getElementById("imageid1").src= imgName ;
}
function randomImg2(){
var randomNumber = Math.floor(Math.random() * 6) + 7;
var imgName = "img_" + randomNumber + ".png";
document.getElementById("imageid2").src= imgName ;
}



//SHAKING FEATURE
// //listen to shake event
// var shakeEvent = new Shake({threshold: 15});
// shakeEvent.start();
// window.addEventListener('shake', function(){
//     alert("Shaked");
// }, false);
//
// //stop listening
// function stopShake(){
//     shakeEvent.stop();
// }
//
// //check if shake is supported or not.
// if(!("ondevicemotion" in window)){alert("Not Supported");}
