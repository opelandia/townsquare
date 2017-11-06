var socket = io.connect();
var placement;
var randFont;
var randColor;
var randNum = randNumber();


//store the mouse click place in a global so we can use it to append the text too.
socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})


    //when we call this function, return bcak a random color in rgb notation
    //0 -255 is our range through r, g, and b
    //rgb (255, 255, 255) desired outcome
  // function randoColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
  //use a new variable to keep organized and connect a string
    var rgb = 'rgb('+ r + ',' + g + ',' + b +')'
//     return rgb;
//     // move my mouse but have the text follow it but only when ontop of the parent div
//
// }

var fontType = [];
  fontType [1] = 'Merriweather';
  fontType [2]= 'Ubuntu';
  fontType [3]= 'Dosis';
  fontType [4]= 'Merriweather Sans';
  fontType [5]= 'Pathway Gothic One';
  fontType [6]= 'Ovo';
  fontType [7]= 'Amaranth';
  fontType [8]= 'Gentium Basic';
  fontType [9]= 'Cantata One';


function randNumber(){
  return Math.floor(Math.random() * 9)
}

$('body').click(function(event){
    //using a click handler on window here as a place holder for any event handler
  console.log(event)

  //see the event from the event handler.
    if(event.target.className != "movableText"){
    //only move it if we are not clicking on the movable text
      placement = {
        "position":"absolute",
        "top": event.pageY,
        "left": event.pageX
        //look at the event and make an object of css property/value relationships
      }
     $('.movableText').css(placement);
     // move the text box to the position we clicked
   }

})


$('.movableText').keypress(function(event){
  //detect keypresses
  console.log(event)
  //see the event
  if(event.key == "Enter"){
    //see if we pressed the enter key
    var enteredText = $('.movableText').val()
    //get the contents of the text box
    console.log(enteredText)
    //log the contents of the text box/
    $('.movableText').val("")
    //clear the text

randFont=fontType[randNum];
randColor = rgb; //randomize this.

    var textData = {
      "position": placement,
      "text":enteredText,
      "font":randFont,
      "color":randColor
    }


    socket.emit('textWasEntered',textData) //send the textData to the server


  } //close the ckeck for the enter key

})


//wait for a message from the server that anyone made a new text entry
socket.on("rerouteTextEntry",function(textData){
  console.log(textData);


      $("<div class = 'convers'>" + textData.text + "</div>").css(textData.position).css("font-family",  textData.font).css('color',textData.color).appendTo('body');
})
