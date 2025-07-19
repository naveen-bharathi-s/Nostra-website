// pop-up
let popup = document.getElementById("pop-up")
let topclose = document.getElementById("topclose")
topclose.addEventListener("click", ()=> {
    popup.style.display="none"
})


// menu bar
let menuicon = document.getElementById("menuicon")
let sidebar = document.getElementById("sidebar")
let close = document.getElementById("close")
menuicon.addEventListener("click", ()=> {
    sidebar.style.right=0
})

close.addEventListener("click", ()=> {
    sidebar.style.right="-40%"
})