<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>

   <style media="screen">
     body{
       height:100vh;
       width:100vw;
       margin:0px;
       padding:0px;
     }
   </style>

  </head>
  <body>


    <input class="movableText" type="text" name="" value="">

    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script type="text/javascript">

  var placement; //store the mouse click place in a global so we can use it to append the text too.

  $('body').click(function(event){ //using a click handler on window here as a place holder for any event handler
    console.log(event) //see the event from the event handler.

    if(event.target.className != "movableText"  ){ //only move it if we are not clicking on the movable text

      //look at the event and make an object of css property/value relationships
      placement = {
        "position":"absolute",
        "top": event.pageY,
        "left": event.pageX
      }

     $('.movableText').css(placement) // move the text box to the position we clicked
   }

  })

  //detect keypresses
  $('.movableText').keypress(function(event) {

    console.log(event) //see the event

    if(event.key == "Enter"){ //see if we pressed the enter key

      var enteredText = $('.movableText').val() //get the contents of the text box
      console.log(enteredText) //log the contents of the text box/

      $("<div>" + enteredText + "</div>").css(placement).appendTo( 'body' ) //create a jquery oject and append it to the screen (this is very similar to the emoji example)
      $('.movableText').val("") //clear the text/

    }


  });


  </script>
  </body>
</html>