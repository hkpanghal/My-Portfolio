
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

function animateSVG(){
   
   document.querySelectorAll("#Visual .movedot").forEach(function(e){
      var character = e
      // console.log(e.getTotalLength());
      e.style.strokeDasharray = 1000+"px";
      e.style.strokeDashoffset = 1000+"px";
   })

   gsap.to("#Visual .movedot",{
      strokeDashoffset:0,
      duration:3,
      ease:Expo.easeInOut,
      delay:4
   })
}

function animateHomepage(){
   t.from("#navbar #left",{
      y:-200,
      opacity:0,
      duration:2,
  })
  
  gsap.from(".page1 #right #picture",{
     opacity:0,
     scale:0.5,
     delay:6,
     duration:1,
  
   })
  
  gsap.from(".page1 #left #intro .p1text",{
     duration:1,
     y:100,
     stagger:0.25,
     delay:6,
  })
   
  gsap.from(".page1 a",{
     opacity:0,
     stagger:0.25,
     delay:7,
     x:50
  })
  
  gsap.from("#navbar a",{
      opacity:0,
      stagger:0.2,
      delay:6,
      y:100
   })
}
let t = gsap.timeline();

t.from(".h1span",{
   x:200,
   duration:2,
   stagger:0.15,
   ease:Power3.easeInOut,
   delay:0.5,
})
t.to("#header h1,.uh4",{
   y:-100,
   ease:Power3.easeInOut,
   duration:1
})
t.to("#loader #part1,#loader #part2",{
   height:0,
   stagger:0.25,
})
t.from(".lp3h",{
   y:200,
   delay:-0.5,
   duration:1,
   stagger:0.15,
   rotate:10,
   onComplete:animateSVG()
})


t.to("#loader",{
   display:"none",
   duration:0.5,
   y:-500,
   opacity:0,
   delay:0.6,
   
})
animateHomepage()


 gsap.from(".page2 #hright #content p",{
   x:900,
   duration:1.5,
   ease:Power2,
   scrollTrigger:{
      scroller:"#main",
      // markers:"true",
      start:"bottom 35%",
     scrub:2,
    }

 })

 gsap.from(".page2 #hright #content h1",{
   y:-100,
   duration:0.01,
   // ease:Power2,
   scrollTrigger:{
      scroller:"#main",
      // markers:"true",
      start:"bottom 70%",
     scrub:5,
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
gsap.from("#h1skills",{
   opacity:0,
   duration:1,
   ease:Power2,
   scrollTrigger:{
      trigger:"#h1skills",
      scroller:"#main",
      scrub:3,
      end:"top 70%",
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

gsap.from("#h1services",{
   opacity:0,
   duration:1,
   ease:Power2,
   scrollTrigger:{
      trigger:"#h1services",
      scroller:"#main",
      scrub:3,
      end:"top 70%",
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


gsap.from("#pleft #plcontainer #latestProjects",{
   x:-100,
   duration:0.5,
   opacity:0,
   scrollTrigger:{
      trigger:"#latestProjects",
      scroller:"#main",
      end:"top 30%",
      scrub:3,
   }
})
gsap.from("#plcontainer p,#prcontainer p,#project1right ul,#project1right #techStack",{
   y:100,
   duration:0.5,
   stagger:0.25,
   ease:Power2,
   scrollTrigger:{
      trigger:"#plcontainer p,#prcontainer p,#project1right ul,#project1right #techStack",
      scroller:"#main",
      end:"top 70%",
      scrub:1,
   }
})

// gsap.from(".page5 img",{
//    opacity:0,
//    duration:1,
//    stagger:0.2,
//    ease:Power2,
//    scrollTrigger:{
//       trigger:".page5 img",
//       scroller:"#main",
//    }
// })


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

   
       
       gsap.to(nayaDiv,{
         y:-200,
         ease:Power1,
         duration:1,
         rotate:180,
        
         
       })
       
       gsap.to(nayaDiv,{
         y:200,
         ease:Power2,
         duration:1,
         delay:1,
         rotateX:180,
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


function dynamicCrsr(){
   let crsr = document.querySelector(".cursor");
   let main = document.querySelector("#main");
   let crsrHide = document.querySelectorAll(".crsrhide")
   main.addEventListener("mousemove",function(dets){

   gsap.to(crsr,{
      x:dets.clientX,
      y:dets.clientY,
      
   })
   main.addEventListener("mouseenter",function(){
      crsr.style.display = "block";
   })
   main.addEventListener("mouseleave",function(){
      crsr.style.display = "none";
   })

   crsrHide.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
         crsr.style.display = "none";
      })
      elem.addEventListener("mouseleave",function(){
         crsr.style.display = "block";
      })
   })

   
   })
}
dynamicCrsr();


function page2ImgChangingEffect()
{
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
   let imgContainer = document.querySelector("#imgcontainer")
   let imgComeUP = document.querySelectorAll(".imgcomeup")
   const queue = [];
   imgComeUP.forEach(function(elem,pos){
      queue.push(elem);
      
   })
   console.log(queue)
   
   imgComeUP.forEach(function(imgelems){
   
      imgelems.addEventListener("click",throttleFunction(function(){
   
         let shiftelem = queue[0];
      
         queue.shift();
         queue.push(shiftelem);
         // shiftelem.style.zIndex = 0;
         gsap.to(shiftelem,{
            zIndex:0,
            duration:0.5,
            scale:0,
            opacity:0,
            // display:"none"
         })
         let comeUp = queue[0];
         //  comeUp.style.zIndex = 1
          gsap.to(comeUp,{
            zIndex:1,
            duration:1,
            delay:0.5,
            scale:1,
            opacity:1,
            display:"block"
         })
         console.log("chala")
        
      },2000))
   })
}

page2ImgChangingEffect();
