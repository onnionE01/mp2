const bestSeller_API = "api/bestSeller.php";
const bestSlide =document.querySelector(".bestSeller");

let bestSellers = [
    {
      "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
      "pName" : "FERRARI 296 GTS",
      "pPrice" : "coupe"
    }
];

window.addEventListener("load",getBestSeller());

function getBestSeller() {
  $.ajax({
    "url": bestSeller_API  + "?showBestSeller",
    "success": function (response) {
        console.log(response);
        bestSellers =JSON.parse(response).records;
        iniliatizeSlider();
    }
})
}

function iniliatizeSlider(){
    let items="";
    console.log(bestSellers)
    for(let item in bestSellers){

        items+= `<div class="prodDetails">
                <div class="product-Details prodHovr">
                    <div class="product-img fProduct1" style="background-image:url(api/${bestSellers[item].img});">
                            <a href="#">ORDER NOW</a> 
                       </div>
    
                       <div class="fPrice">
                          <h5>${bestSellers[item].pName}</h5>
                            <p>Php${bestSellers[item].pPrice}</p>
                        </div>
               </div>`;
    }
    bestSlide.innerHTML=cars;
}

