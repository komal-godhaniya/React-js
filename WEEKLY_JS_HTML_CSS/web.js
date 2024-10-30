function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}


let pic = document.querySelectorAll("img")
let index = 0

function slides(index) {

  for (let i = 0; i < pic.length; i++) {
    pic[i].style.display = "none"
  }
  pic[index].style.display = "block"
}

function show() {
    slides(index)

  setInterval(() => {
    index++
    if (index === pic.length) {
      index = 0
    }
    slides(index)
  }, 2000)
}

show()



