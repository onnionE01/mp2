const featureProduct_API = "../api/feature.php";

const mySlider=document.querySelector(".mySlider");

window.addEventListener("load",getFeatureItems());

function getFeatureItems() {
  $.ajax({
    "url": featureProduct_API+ "?showFeaturedProducts",
    "success": function (response) {
        console.log(response)
        let featureMeals = JSON.parse(response).records;
        let items="";
      
        for(let item in featureMeals){
        //    items+=`<div class="slide">
        //     <img src="api/${featureMeals[car].Product_Pic}" alt="image">
        //     <br><br>
        //     <div>
        //     <h3>${featureMeals[car].Product_Name}</h3>
        //     <p>${featureMeals[car].Price}</p>
        //     </div>
        //     </div>`;

            items+=`<div>
                <div class="slide eHovr">
                        <div class="menu-img Menu001" style="background-image: url('api/${featureMeals[item].Product_Pic}');">
                            <a href="#">ORDER NOW</a>
                         </div>
                        <br>
                        <div class="fPrice">
                            <h5 id="menu_Name">${featureMeals[item].Product_Name}</h5>
                            <p id="menu_Price">${featureMeals[item].Price}</p>
                        </div>
                </div>
            </div>`;

        }
        mySlider.innerHTML=items;
    }
})
}

let menuSlider=tns({
    container: ".mySlider",
    "slideBy": "1",
    "speed": 400,
    "nav" :false,
    autoplay:true,
    controls:false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items:8,
            gutter:20
        },
        1024: {
            items:6,
            gutter:20
        },
        768: {
            items:5,
            gutter:20
        },
        480: {
            items:4
        },
        360: {
            items:3,
        }
    }
})