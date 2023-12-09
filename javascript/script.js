const var1 = document.getElementsByClassName("project-image");

var i;

for (let i = 0;i < var1.length; i++){
  var1[i].addEventListener("mouseenter", function1);

  function function1 (){
  var1[i].classList.add("bwtocolor");
  var1[i].addEventListener("animationend", () => {
    var1[i].style.filter = "grayscale(0%) contrast(100%)";
  });
};
}

const var2 = document.getElementsByClassName("overunder");

var x;

for (let x = 0;x < var2.length; x++){
  var2[x].addEventListener("mouseenter", function2);

  function function2 (){
  var2[x].classList.add("opacitytozero");
  var2[x].addEventListener("animationend", () => {
    var2[x].style.opacity = "0%";
  });
};
}

