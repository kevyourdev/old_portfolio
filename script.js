const date = new Date();
const year = date.getFullYear();
const hour = date.getHours();

function greeting(hour) {
    if (hour < 12) {
        return "Good morning,";
      } else if (hour < 17) {
        return "Good afternoon,";
      } else {
        return "Good evening,";
      }
}

document.getElementById("greeting").innerHTML = greeting(hour);
document.getElementById("year").innerHTML = year;