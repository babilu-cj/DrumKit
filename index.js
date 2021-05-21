document.addEventListener("keydown", function(e){
  checkAndPlay(e.key);
  keyAnimation(e.key);
});
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    checkAndPlay(this.textContent);
    keyAnimation(this.textContent);
  });
}

function checkAndPlay(keyPressed) {
  // var click = this.textContent; //mouseclick
  // var press = event.key;//keyboard key
  switch (keyPressed) {
    case "w":
      new Audio("sounds/snare.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;
    default: console.log("Different character");
  }
}

function keyAnimation(keyPressed){
  var activeButton= document.querySelector("."+keyPressed);
  // console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
