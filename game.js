var welcome = new Title('Hewwo');
var woodButton = new Button ('Collect Wood', increaseWood);
var wood = 0;
var woodCount = new Text(wood)



function increaseWood(){
  wood++;
  woodCount.edit(wood);
}