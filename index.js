var n = Math.random();
n = n * 100 + 1;
var randomNum = Math.floor(n);
// alert(randomNum)

var count = 0;
function myFunction() {
  ++count;
  
}

document.getElementById("mybtn").addEventListener("click", function () {
  var inputNum = document.getElementById("number").value;

  if (inputNum > randomNum) {
    document.getElementById("demo").innerHTML =
      "NO, Guess smaller number than "+inputNum ;
  } else if (inputNum < randomNum) {
    document.getElementById("demo").innerHTML =
      "NO,Guess greater number than "+inputNum;
  } else if ((randomNum = inputNum)) {
    document.getElementById("demo").innerHTML =
      "You passed in " +count + " attempts 🎉";
      var winmusic = new Audio("win.wav");
            winmusic.play();
  }
  
});

document.getElementById("Restart").addEventListener("click", function () {
  location.reload();
});
