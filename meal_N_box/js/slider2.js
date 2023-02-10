const product_API = "api/product.php";

const slider =document.querySelector(".slider");

window.addEventListener("load",getItems());

function getItems () {

  $.ajax({
    "url": product_API + "?showFeaturedProducts",
    "success": function (response) {
        let featureMeals = JSON.parse(response).records;
        let cars="";
        console.log(featureMeals)
        for(let car in featureMeals){
            cars+=`<div class="slide">
            <img src="api/${featureMeals[car].Product_Pic}" alt="image">
            <br><br>
            <div>
            <h3>${featureMeals[car].Product_Name}</h3>
            <p>${featureMeals[car].Price}</p>
            </div>
            </div>`;
        }
    slider.innerHTML=cars;
    }
})
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