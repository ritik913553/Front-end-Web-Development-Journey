gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2", // jb hum pin ka use krte hai tb generally element ke parent ko trigger krte hai
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true //page 2 pin ho gya and page 2 ke img pr animation lg gya
    }
})
