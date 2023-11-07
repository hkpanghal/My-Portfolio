
let t = gsap.timeline();
t.from("#navbar #left",{
    y:-200,
   opacity:0,
   duration:2,
})

gsap.from(".page1 #right #picture",{
   opacity:0,
   scale:0.5,
   delay:1,
   duration:1,

 })

gsap.from(".page1 #left #intro",{
   opacity:0,
   scale:0,
   delay:1,
   duration:1,
   x:-200,
   
})
 
gsap.from(".page1 a",{
   opacity:0,
   stagger:0.25,
   delay:1,
   x:50
})

gsap.from("#navbar a",{
    opacity:0,
    stagger:0.2,
    delay:1,
    y:100
 })

 gsap.from(".page2 #hright #content",{
   opacity:0,
   scale:0,
   duration:1,
   x:200,
   scrollTrigger:{
      scroller:"#main",
      // markers:"true",
      start:"bottom 35%",
     scrub:2,
   
      
  }

 })

 gsap.from(".page2 #hleft #imgcontainer",{
   opacity:0,
   scale:0,
   duration:1,
   x:-200,
   scrollTrigger:{
      scroller:"#main",
      // markers:"true",
      start:"bottom 35%",
     scrub:2,
   
      
  }

 })

 

