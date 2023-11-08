let itemHanburgerIcon = document.getElementById("iconhamburger")
let navbarLeftPart = document.getElementById("left")
let navbarRightPart = document.getElementById("right")
let navbarAnchors = document.querySelectorAll(".nav")

let anchors = document.getElementsByTagName("a")

let clicksound = new Audio()
clicksound.src = "assets/clicksound.wav"

let popsound = new Audio()
popsound.src = "assets/popsound.wav"

itemHanburgerIcon.addEventListener("click",function(){
  
    if(navbarLeftPart.style.display == 'none' || navbarLeftPart.style.display == '' )
    {
        navbarLeftPart.style.display = 'block'
        for(let i=0;i<navbarAnchors.length;i++)
        {
            navbarAnchors[i].style.display = 'none'
        }
        
    }
    else
    {
        navbarLeftPart.style.display = 'none'
        for(let i=0;i<navbarAnchors.length;i++)
        {
            navbarAnchors[i].style.display = 'flex'
        }
    }
})

for(let i=0;i<anchors.length;i++)
{
    anchors[i].addEventListener("click",function(){
        clicksound.play()
    })

    anchors[i].addEventListener("mouseover",function(){
        popsound.play()
    })
   
}







