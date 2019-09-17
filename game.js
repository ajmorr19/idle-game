var score = 0;

postToPage(score);
createButton('Higher', btnPress);
createButton('Lower', btnPress2);
changeTitle('Clicker Game');

if (score > 100){
  setInterval(btnPress2, 1000);
}
if (score < 100) {
  setInterval(btnPress, 1000);
}

function btnPress() {
  score++;
  postToPage(score);
}
function btnPress2(){
  score--;
  postToPage(score)
}

