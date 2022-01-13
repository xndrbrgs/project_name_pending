// Parallax

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$(".button").click(function() {
    window.location = $(this).find("a").attr("href");
    console.log("click");
    return false;
  });