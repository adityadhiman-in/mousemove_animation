var circle = document.querySelector(".circle");
var section =  document.querySelector(".section");
window.addEventListener("mousemove", function(event){
    gsap.to(circle,{
        x:event.clientX,
        y:event.clientY,
        duration:.5,
        ease: Expo
    })
})

section.addEventListener("mousemove", function(event){
    gsap.to(circle,{
        scale:7,
    })

    gsap.to(".section span",{
        color:"#fff",
        duration:.5,
        y:"-5vw"
    })
    
})


section.addEventListener("mouseleave", function(event){
    gsap.to(circle,{
        scale:1,
    })
    gsap.to(".section span",{
        color:"#000",
        duration:.5,
        y:"5vw"
    })
})