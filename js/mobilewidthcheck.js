function widthcheck() {
    var width = window.screen.availWidth
    if (width < 1000) {
      location.replace('https://wadia.info/mobile.html')
    } else{
        if(width>1000){
            if(width<1800){
                location.replace('/mobile.html')
            }
        }
    }
  }