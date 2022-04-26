// i went a bit above and beyond so i could practice my javascript

function display_time() {
  // display time function with AM and PM
  //also changes background color and images based on time of day
  let greeting = "Good";
  var today = new Date();
  var hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
  var minutes =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  var seconds =
    today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
  var hours_12;
  var meridium = "NA";
  //format meridium time
  if (hours >= 12) {
    hours_12 = hours - 12;
    meridium = "PM";
    if (hours == 12) {
      hours_12 = 12;
    }
    // special case for noon
  } else if (hours < 12) {
    hours_12 = hours;
    meridium = "AM";
    if (hours == 0) {
      hours_12 = 12;
      //   special case for midnight
    }
  }
  //change pictures and greeting message as well as background color
  if (hours >= 4 && hours < 12) {
    //   if its in between 4AM and 12PM (Morning)
    document.getElementById("all").style.backgroundColor = " #eba665f8";
    document.getElementById("pic").src = "images/sun.png";
    greeting = "Good Morning!";
  }
  if (hours >= 12 && hours < 20) {
    //   if its in between 12PM and 8PM (afternoon)
    document.getElementById("all").style.backgroundColor = " #667de6";
    document.getElementById("pic").src = "images/half_sun_moon.jpg";
    greeting = "Good Afternoon!";
  }
  if ((hours >= 20 && hours <= 24) || (hours >= 0 && hours < 4)) {
    //   if its in between 8PM and 4AM (Night)
    document.getElementById("all").style.backgroundColor = "#131010f8";
    document.getElementById("current_time").style.color = "white";
    document.getElementById("greeting").style.color = "white";
    document.getElementById("pic").src = "images/moon.png";
    greeting = "Good Night!";
    // change font color too
  }
  //   #667de6
  let time =
    //   hours_12 +
    hours_12 + ":" + minutes + ":" + seconds + " " + meridium;
  //  display in 12 hour meridium time
  document.getElementById("current_time").innerHTML = time;
  //Greeting message
  document.getElementById("greeting").innerText = greeting;
}
display_time();
//initial time display
setInterval(display_time, 1000);
// ensure that it all updates every second
