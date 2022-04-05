window.onload = function() {
    var name = prompt("What's your name?");
    var lengthOfName = name;
  
    document.getElementById('iframe1').src = name;
  };