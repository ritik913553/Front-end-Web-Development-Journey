var tl = gsap.timeline();

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})


tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.3  //jitne bhi h3 honge wo 0.3 ,0.3 second ke bad aayenge, utna delay hoga ek ke bad dusre ko aaane me
})


tl.from("#bottom h3",{
    y:50,
    opacity:0,
    stagger:0.3
})