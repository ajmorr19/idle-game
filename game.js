let welcome = new Title('Hewwo');
let woodButton = new Button ('Chop Wood', increaseWood);
let wood = 0;
let woodCount = new Text(wood + ' Wood')
hide.woodButton()
let NewMineButton = new button ('Build a mine', buildMine)
let mine = 0;
let mineCount = new Text(mine + 'Mine(s)')
NewMineButton.hide()
//let stoneButton = new Button ('Mine Stone', increaseStone);
//let stone = 0;
//let stoneCount = new Text(stone + ' Stone')
//hide.button()
//let coalButton = new Button ('Mine Coal', increaseCoal);
//let coal = 0;
//let coalCount = new Text(coal + ' Coal')
//hide.button()
//let ironButton = new Button ('Mine Iron', increaseIron);
//let iron = 0;
//let ironCount = new Text(iron + ' Iron')
//hide.button()

function NewMine(){
if(wood > 25){
show.NewMineButton(100)
}
}

function buildMine () {
buildMine++
mineCount.edit(Mine + 'Mines')
}
function increaseWood(){
  NewMine
  wood++;
  woodCount.edit(wood + ' Wood');
  
}
//function increaseStone(){
  //stone++;
  //stoneCount.edit(stone + ' Stone');
//}
//function increaseCoal(){
  //coal++;
  //coalCount.edit(coal + ' Coal');
//}
//function increaseIron(){
  //iron++;
  //ironCount.edit(iron + ' Iron');
//}