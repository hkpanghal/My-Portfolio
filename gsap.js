
function creativitybar(){
   let circularProgress = document.getElementById("creativitybar"),
   progressValue1 = document.getElementById("value1");

   let progressStartValue1 = 0,    
   progressEndValue1 = 90,    
   speed = 30;

   let progress = setInterval(() => {
   progressStartValue1++;

   progressValue1.textContent = `${progressStartValue1}%`
   circularProgress.style.background = `conic-gradient(#0cc6e7 ${progressStartValue1 * 3.6}deg,rgb(8, 74, 87) 0deg)`

   if(progressStartValue1 == progressEndValue1){
      clearInterval(progress);
   }    
   }, speed);
}
function communicationbar(){
   let circularProgress = document.getElementById("communicationbar"),
   progressValue = document.getElementById("value2");

   let progressStartValue = 0,    
   progressEndValue = 85,    
   speed = 30;

   let progress = setInterval(() => {
   progressStartValue++;

   progressValue.textContent = `${progressStartValue}%`
   circularProgress.style.background = `conic-gradient(#0cc6e7 ${progressStartValue * 3.6}deg,rgb(8, 74, 87) 0deg)`

   if(progressStartValue == progressEndValue){
      clearInterval(progress);
   }    
   }, speed);
}
function problemsolvingbar(){
   let circularProgress = document.getElementById("problembar"),
   progressValue = document.getElementById("value3");

   let progressStartValue = 0,    
   progressEndValue = 96,    
   speed = 30;

   let progress = setInterval(() => {
   progressStartValue++;

   progressValue.textContent = `${progressStartValue}%`
   circularProgress.style.background = `conic-gradient(#0cc6e7 ${progressStartValue * 3.6}deg,rgb(8, 74, 87) 0deg)`

   if(progressStartValue == progressEndValue){
      clearInterval(progress);
   }    
   }, speed);
}
function teamworkbar(){
   let circularProgress = document.getElementById("teamworkbar"),
   progressValue = document.getElementById("value4");

   let progressStartValue = 0,    
   progressEndValue = 94,    
   speed = 30;

   let progress = setInterval(() => {
   progressStartValue++;

   progressValue.textContent = `${progressStartValue}%`
   circularProgress.style.background = `conic-gradient(#0cc6e7 ${progressStartValue * 3.6}deg,rgb(8, 74, 87) 0deg)`

   if(progressStartValue == progressEndValue){
      clearInterval(progress);
   }    
   }, speed);
}
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

 gsap.from("#professional #creativitybar",{
   // opacity:0,
   // scale:0,
   duration:2,
  
   scrollTrigger:{
      trigger:"#professional",
      scroller:"#main",
      // markers:"true",
      // start:"top 90%",
     onEnter: () => creativitybar(),    
  }
})

gsap.from("#professional #communicationbar",{
   // opacity:0,
   // scale:0,
   duration:2,
  
   scrollTrigger:{
      trigger:"#professional",
      scroller:"#main",
      // markers:"true",
      // start:"top 90%",
     onEnter: () => communicationbar(),    
  }
})
gsap.from("#professional #problembar",{
   // opacity:0,
   // scale:0,
   duration:2,
  
   scrollTrigger:{
      trigger:"#professional",
      scroller:"#main",
      // markers:"true",
      // start:"top 90%",
     onEnter: () => problemsolvingbar(),    
  }
})

gsap.from("#professional #teamworkbar",{
   // opacity:0,
   // scale:0,
   duration:2,
  
   scrollTrigger:{
      trigger:"#professional",
      scroller:"#main",
      // markers:"true",
     onEnter: () => teamworkbar(),    
  }
})

// gsap.to("#scontainer",{
//    rotateX:0,
//    duration:5,
//    scrollTrigger:{
//       trigger:"#scontainer",
//       scroller:"#main",
//       markers:"true",
//       start:"top 60%",
//       end:"bottom 70%",
//       scrub:5,
//   }
// })

gsap.from("#technical .techbars .progress",{
   // opacity:0,
   scale:0,
   x:-500,
   duration:3,
   scrollTrigger:{
      trigger:".techbars",
      scroller:"#main", 
      // markers:"true",
      scrub:5,
      // start:"top 0%"
      end:"bottom 100%"
  }

})
gsap.from("#professional,#technical",{
   x:100,
   duration:1,
   scale:0,
   opacity:0,
   scrollTrigger:{
      trigger:"#professional,#technical",
      scroller:"#main",
      // markers:true,
      end:"bottom 70%",
      scrub:5,
   }
})

gsap.from(".serv",{
   x:100,
   duration:1,
   scale:0,
   opacity:0,
   stagger:0.5,
   scrollTrigger:{
      trigger:".serv",
      scroller:"#main",
      // markers:true,
      end:"bottom 70%",
      scrub:5,
   }
})
