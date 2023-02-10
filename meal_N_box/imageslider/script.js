
const slider =document.querySelector(".slider");
const carsObject = [
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    },
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    },
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    },
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    }
];

window.addEventListener("load",iniliatizeSlider());

function iniliatizeSlider(){
    let cars="";
    for(let car in carsObject){
        cars+=`<div class="slide">
            <img src="${carsObject[car].img}" alt="image">
              <div>
                 <h3>${carsObject[car].model}</h3>
                <p>${carsObject[car].type}</p>
              </div>
        </div>`;
    }
slider.innerHTML=cars;
}

const tnslider=tns({
    container: ".slider",
    autoWidth:true,
    gutter:15,
    slideBy:1,
    nav:true,
    speed:400,
    controlsContainer:"#controls",
    prevButton:".prev",
    nextButton:".next"
})
