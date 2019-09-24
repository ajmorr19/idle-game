var welcome = new Title('Hewwo');
var woodButton = new Button ('Chop Wood', increaseWood);
var stoneButton = new Button ('Mine Stone', increaseStone);
var coalButton = new Button ('Mine Coal', increaseCoal);
var ironButton = new Button ('Mine Iron', increaseIron);
var wood = 0;
var woodCount = new Text(wood + ' Wood')
var stone = 0;
var stoneCount = new Text(stone + ' Stone')
var coal = 0;
var coalCount = new Text(coal + ' Coal')
var iron = 0;
var ironCount = new Text(iron + ' Iron')



function increaseWood(){
  wood++;
  woodCount.edit(wood + ' Wood');
}
function increaseStone(){
  stone++;
  stoneCount.edit(stone + ' Stone');
}
function increaseCoal(){
  coal++;
  coalCount.edit(coal + ' Coal');
}
function increaseIron(){
  iron++;
  ironCount.edit(iron + ' Iron');
}