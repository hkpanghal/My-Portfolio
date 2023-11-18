
function preogressBar(progressStartValue1,progressEndValue1,bar,value){
   let circularProgress = document.getElementById(bar),
   progressValue1 = document.getElementById(value);   
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
     onEnter: () => preogressBar(0,90,"creativitybar","value1"),    
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
     onEnter: () => preogressBar(0,85,"communicationbar","value2"),    
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
     onEnter: () => preogressBar(0,96,"problembar","value3"),    
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
     onEnter: () => preogressBar(0,94,"teamworkbar","value4"),    
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

function page1IntroImgEffect()
{

   // Throttling Function
   const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
    }

   let divIntro = document.querySelector("#intro");
  
   
   divIntro.addEventListener("mousemove",throttleFunction(function(details){
      // console.log("div ban gya");
      
      let nayaDiv = document.createElement("div");
      nayaDiv.classList.add("popUpDiv");
      divIntro.appendChild(nayaDiv);

      let img = document.createElement("img");
      img.classList.add("popUpImg");
      img.setAttribute("src","https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D")

      nayaDiv.appendChild(img);
      
      let xval = gsap.utils.mapRange(divIntro.getBoundingClientRect().left, divIntro.getBoundingClientRect().right,0,80,details.clientX)
      let yval = gsap.utils.mapRange(divIntro.getBoundingClientRect().top, divIntro.getBoundingClientRect().bottom,0,65,details.clientY)
      let rx = gsap.utils.mapRange(divIntro.getBoundingClientRect().left, divIntro.getBoundingClientRect().right,-45,45,details.clientX)


      // console.log(divIntro.getBoundingClientRect().left, divIntro.getBoundingClientRect().right,xval/50*10)
      // nayaDiv.style.transform = `translate(${xval}%,${yval}%)`;
       nayaDiv.style.left = xval + "%";
       nayaDiv.style.top = yval + "%";
       
       gsap.to(".popUpDiv",{
         y:-70,
         ease:Power1,
         duration:0.5,
         rotate:Math.floor(Math.random())+rx,
       })
       
       gsap.to(".popUpDiv",{
         y:70,
         ease:Power1,
         duration:0.3,
         delay:0.25,
         rotate:Math.floor(Math.random())+rx,
       })
      
       setTimeout(function(){
         nayaDiv.remove();
       },2000)
   },500))

}


function page4PointerImg(box,source)
{
   let ui =  document.querySelector(box);
   let learnmore =  document.querySelector(`${box} .learnmore`);
   let div = document.querySelector(`${box} .imagediv`);
   let img = document.createElement("img")
   img.setAttribute("src",source)
   
   div.appendChild(img);
   ui.addEventListener("mouseenter",()=>{
      div.style.display = "block";
   })
   ui.addEventListener("mouseleave",()=>{
      div.style.display = "none";
   })
   learnmore.addEventListener("mouseenter",()=>{
      div.style.display = "none";
   })
   learnmore.addEventListener("mouseleave",()=>{
      div.style.display = "block";
   })
   ui.addEventListener("mousemove",function(details){
      let xval = gsap.utils.mapRange(ui.getBoundingClientRect().left, ui.getBoundingClientRect().right,ui.clientWidth/2-ui.clientWidth,ui.clientWidth-ui.clientWidth/2,details.clientX)
      let yval = gsap.utils.mapRange(ui.getBoundingClientRect().top, ui.getBoundingClientRect().bottom+learnmore.getBoundingClientRect().top/2,ui.clientHeight/2-ui.clientHeight,ui.clientHeight-ui.clientHeight/2,details.clientY)
      
      let rx = gsap.utils.mapRange(ui.getBoundingClientRect().left, ui.getBoundingClientRect().right,45,-45,details.clientX)

      // console.log(xval,yval);
      div.style.transform = `translate(${xval}%,${yval}%) rotate(${rx}deg)`;
     
   })
}
page4PointerImg("#ui","assets/uiuximg.jpg")
page4PointerImg("#app","assets/appimg.jpg")
page4PointerImg("#web","assets/webimg.jpg")
page1IntroImgEffect()
