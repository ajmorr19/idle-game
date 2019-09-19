var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

function scoreIncrease() {
  score++;                       // Increase the score
  createButton('Press Me ~UwU~', btnPress);

  if(score > 10) {
    createButton('Hewwo', btnPress)               // If the score reaches 11, show the button!
  }
}

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}
function btnPress2(){
  score--;
  postToPage(score)
}

