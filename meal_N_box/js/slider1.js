const product_API = "api/product.php";

const slider =document.querySelector(".slider");
let carsObject = [
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    }
];

window.addEventListener("load",getItems());

function getItems () {
  $.ajax({
    "url": product_API + "?showFeaturedProducts",
    "success": function (response) {

        carsObject = JSON.parse(response).records;
        iniliatizeSlider()
    }
})
}

function iniliatizeSlider(){
    let cars="";
    console.log(carsObject)
    for(let car in carsObject){
        cars+=`<div class="slide">
        <img src="api/${carsObject[car].img}" alt="image">
        <br><br>
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
