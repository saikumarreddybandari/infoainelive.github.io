window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "92px";
    document.getElementById("hdd").style.fontSize = "26px";
    document.getElementById("inerhds").style.paddingTop = "20px";
  } else {
    document.getElementById("header").style.height = "100px";
    document.getElementById("hdd").style.fontSize = "27px";
    document.getElementById("inerhds").style.paddingTop = "25px";

  }
}