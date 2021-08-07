window.addEventListener("scroll",()=>{
    const globo = document.getElementById("globo")
    const globo2 = document.getElementById("globo2")
    const galeria = document.getElementById("galeria")
    const gitHub = document.getElementById("gitHub")
    let scroll = window.scrollY

    globo.style.right = scroll * 0.25  + "px"
    globo2.style.right = scroll * 0.125  + "px"
    galeria.style.backgroundPositionX = scroll * 1.25 + "px"
    gitHub.style.backgroundPositionX = scroll * 1.25 + "px"
    
})


