var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
 };
 
var string = ""
 
function turnLeft(rover){
   switch (rover.direction) {
    case "N":
      rover.direction="W";
      console.log(rover.direction);
      break;
    case "W":
      rover.direction="S";
      console.log(rover.direction)
      break;
    case "S":
      rover.direction="E";
      console.log(rover.direction)
      break;
    case "E":
      rover.direction="N";
      console.log(rover.direction)
      break;
  }
 }
 
function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction="E";
      console.log(rover.direction);
      break;
    case "E":
      rover.direction="S";
      console.log(rover.direction)
      break;
    case "S":
      rover.direction="W";
      console.log(rover.direction)
      break;
    case "W":
      rover.direction="N";
      console.log(rover.direction)
      break;
  }
 };
 
function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y++;
      console.log("["+rover.x+","+rover.y+"]");
      break;
    case "W":
      rover.x--;
      console.log("["+rover.x+","+rover.y+"]");
      break;
    case "S":
      rover.y--
      console.log("["+rover.x+","+rover.y+"]");
      break;
    case "E":
      rover.x++;
      console.log("["+rover.x+","+rover.y+"]");
      break;
  }
 };

function pushTravelLog(rover) {
      rover.travelLog.push([rover.x, rover.y])
};

function test (string) {
  for (var i=0; i<string.length; i++){
    switch(string.charAt(i)){
      case "l":
        turnLeft(rover);
        pushTravelLog(rover);
        break;
      case "f":
        moveForward(rover);
        pushTravelLog(rover);
        break;
      case "r":
        turnRight(rover);
        pushTravelLog(rover);
         break;
  };
 };
  console.log("TravelLog: " + rover.travelLog)
   };

test("lflrf")