var lbtn1 = document.querySelector(".lbtn1");
var lbtn2 = document.querySelector(".lbtn2");
var lbtn4 = document.querySelector(".lbtn4");
var lbtn5 = document.querySelector(".lbtn5");
var tmp=1;
lbtn1.addEventListener("click",function(){
    if(tmp==1){
    lbtn2.style.opacity = "1";
    lbtn4.style.opacity = "1";
    lbtn5.style.opacity = "1";
    tmp=0;
    }
    else{
        lbtn2.style.opacity = "0";
        lbtn4.style.opacity = "0";
        lbtn5.style.opacity = "0";
        tmp=1;
    }
},1200);

var tl = gsap.timeline({scrollTrigger:{
    trigger:".page-two",
    start:"0% 90%",
    end:"50% 70%",
    scrub:true,
    
}})

tl.to(".can",{
    top:"150%",
    scale:"0.9",
    rotate:"360",
})

var t2 = gsap.timeline({scrollTrigger:{
    trigger:".page-three",
    start:"0% 90%",
    end:"50% 70%",
    scrub:true,
    
}})

t2.to(".can",{
    top:"370%",
    scale:"1",
    rotate:"360",
})

var t3 = gsap.timeline({scrollTrigger:{
    trigger:".page-three",
    start:"60% 100%",
    end:"45% 50%",
    scrub:true,
   // markers:true,
}})

t3.from(".left,.right,.center-box",{
    opacity:"0",
    duration:"3",
    scale:"0",
 
})

