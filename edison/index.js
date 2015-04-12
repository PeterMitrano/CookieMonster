// hackumass2015s
// Innovate411412

// Activate the touch button
// This code will work for BOTH the capactive button and the "standard" button with a black tip
var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {
  var touch = new five.Button(2);
  var servo = new five.Servo({
    pin: 9,
    type: "continuous"
  });

  touch.on("press", function() {
    servo.cw(1);
    console.log("Pressed!");
  });
  touch.on("release", function() {
    servo.to(90);
    console.log("Released!");
    delete servo;
  });
});
