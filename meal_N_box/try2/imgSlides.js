let menuSlide=tns({
    container: ".my-slider",
    "slideBy": "1",
    "speed": 400,
    "nav" :true,
    autoplay:true,
    controls:true,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items:6,
            gutter:20
        },
        1024: {
            items:4,
            gutter:20
        },
        768: {
            items:3,
            gutter:20
        },
        480: {
            items:2,
        },
        360: {
            items:1,
        }
    }
})
