let itemHanburgerIcon = document.getElementById("iconhamburger")
let navbarLeftPart = document.getElementById("left")
let navbarRightPart = document.getElementById("right")
let navbarAnchors = document.querySelectorAll(".nav")


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