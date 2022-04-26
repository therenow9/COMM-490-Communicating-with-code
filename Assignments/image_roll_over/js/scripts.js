var my_image = document.getElementById("image_change");
var my_text = document.getElementById("text_change");
//init

my_image.addEventListener(
  "mouseover",
  function () {
    my_image.src = "images/gremlin.jpg";
    my_text.innerHTML = "Gremlin";
  },
  false
);
//mouse over event , gremlin
my_image.addEventListener(
  "mouseout",
  function () {
    my_image.src = "images/mogwai.jpg";
    my_text.innerHTML = "Mogwai";
  },
  false
);
//mouse out Event Mogwai
