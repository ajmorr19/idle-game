var score = 0;

postToPage(score);
changeTitle('Dimmsdale Dimmadome');


 



function btnPress() {
  score = score + 1;
  createButton('Doug Dimmadome, Owner of the Dimmsdale Dimmadome', btnPress2);
  postToPage(score);
}
function btnPress2(){
  score--;
  postToPage(score)
}

