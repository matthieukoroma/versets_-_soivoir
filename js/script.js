document.addEventListener("DOMContentLoaded", function() {

  // initializations
  var container = document.querySelector("div");
  var dice = [document.querySelector("img")];
  var nums = [];
  var colors = [
    "255, 87, 34",
    "76, 175, 80",
    "33, 150, 243",
    "63, 81, 181",
    "244, 143, 177",
    "121, 85, 72",
    "255, 87, 34",
    "76, 175, 80",
    "33, 150, 243",
    "63, 81, 181",
    "244, 143, 177",
    "121, 85, 72",
    "76, 175, 80",
    "33, 150, 243",
    "63, 81, 181",
    "244, 143, 177",
    "121, 85, 72"

  ];

  // role all dice
  function roll(e) {
    
    let id = e.target.getAttribute("id");
    if (id === "js-increase" || id === "js-decrease")
      return;
    
    for (let i = 0; i < dice.length; i++) {
      let die = dice[i];
      
      if (die.style.animation) return;
 
      nums[i] = i;
      // Math.ceil(16 * Math.random());

      sound = new Audio("soundsmp3/" + nums[i] + ".mp3");
      sound.load();
      sound.play();

      setTimeout(function() {
        die.style.animation = "";
        die.src = "c/" + nums[i] + ".jpg";

        die.alt = nums[i];
      }, 1000);
    }
    
    let color = colors[i - 1]; 
      // colors[Math.ceil(16 * Math.random()) - 1];
    document.body.style.background = "rgb(" + color + ")";
    
  }
  document.addEventListener("keydown", roll);
  document.addEventListener("click", roll);  
  
  // alter number of dice
  function numDice(n) {
    
    if (n > 16) n = 0;
    
    container.innerHTML = "";
    dice = [];
    
    for (let i = 0; i < n; i++) {
      
      let die = document.createElement("img");
      die.src = "c/title.jpg";
      container.appendChild(die);
      dice.push(die);
            
    }
    
  }
  
  document.querySelector("#js-increase").addEventListener("click", function() {
    if (dice.length < 17)
      numDice(dice.length + 1);
  });

  document.querySelector("#js-decrease").addEventListener("click", function() {
    if (dice.length > 1)
      numDice(dice.length - 1);
  });
  
});
