var score = 0; // Create a variable to store the score in

postToPage(score);
changeTitle('Clicker Game');

function scoreIncrease() {
  score++;                       // Increase the score
  createButton('Press Me ~UwU~', btnPress);

  if(score > 10) {
    createButton('Hewwo', btnPress)               // If the score reaches 11, show the button!
  }
}

function btnPress() {
  score = score + 1;
  postToPage(score);
}
function btnPress2(){
  score--;
  postToPage(score)
}

