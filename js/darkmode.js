function dark() {
    const main = document.body;
    const styles = window.getComputedStyle(main);
    const image = styles.backgroundImage;
    const url = image.slice(5, -2);
    console.log(url)
    if (url == "https://wadia.info/imgs/bgdark.png" || url == "http://127.0.0.1:5500/imgs/bgdark.png") {
      var moon = document.getElementsByClassName(".fa-solid fa-moon fa-5x")
      moon.className = "fa-light fa-moon"
      document.body.style.backgroundImage = "url('/imgs/bg.jpg')"
      document.getElementById('slogan').style.borderColor = "black"
      document.getElementById('slogan').style.color = "black"
      document.getElementById("logomid").src = "/imgs/Midlogo.png";
      document.getElementById("CHAIN1").style.borderColor = "#333"
      document.getElementById("CHAIN2").style.borderColor = "#333"
      document.getElementById("T1").style.color = "black"
      document.getElementById("T2").style.color = "black"
      document.getElementById('abouttitle').style.color = "black"
      document.getElementById('about').style.borderColor = "black"
      document.getElementById('about').style.borderColor = "black"
      document.getElementById("D1").style.color = "black"
      document.getElementById('abouttext').style.color = "black"
      document.getElementById("D2").style.color = "black"
    } else if (url == "https://wadia.info/imgs/bg.jpg" || url == "http://127.0.0.1:5500/imgs/bg.jpg") {
      document.body.style.backgroundImage = "url('/imgs/bgdark.png')"
      document.getElementById('slogan').style.borderColor = "white"
      document.getElementById('slogan').style.color = "white"
      document.getElementById("logomid").src = "/imgs/image.png";
      document.getElementById("CHAIN1").style.borderColor = "#8c8a89"
      document.getElementById("CHAIN2").style.borderColor = "#8c8a89"
      document.getElementById("T1").style.color = "white"
      document.getElementById("T2").style.color = "white"
      document.getElementById('abouttext').style.color = "white"
      document.getElementById('abouttitle').style.color = "white"
      document.getElementById('about').style.borderColor = "white"
      document.getElementById("D1").style.color = "white"
      document.getElementById("D2").style.color = "white"
    } else {
      console.log("error")
    }
  }