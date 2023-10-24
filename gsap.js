
let t = gsap.timeline();
t.from("#intro,#navbar #left",{
    y:-200,
   opacity:0,
   duration:2
})

t.from(".page1 #right",{
    duration:2,
    opacity:0,
 })
gsap.from(".page1 a",{
   opacity:0,
   stagger:0.5,
   delay:1
})

gsap.from("#navbar a",{
    opacity:0,
    stagger:0.25,
    delay:1
 })


 

