
let t = gsap.timeline();
t.from("#navbar #left",{
    y:-200,
   opacity:0,
   duration:2,
})

gsap.from(".page1 #right",{
   opacity:0,
   scale:0,
   delay:1,
   duration:3,
   rotate:45
 })

gsap.from("#intro",{
   opacity:0,
   scale:0,
   delay:1,
   duration:3,
   rotate:45
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


 

