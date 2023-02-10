
// const featureProduct_API = "../api/feature.php";

// const productSlide =document.querySelector(".prodScroller");


// window.addEventListener("load",getItems());

// function getItems(){
//     $.ajax({
//         "url": featureProduct_API + "?showFeaturedProducts",
//         "success": function (response) {
//               console.log(response)
//               let jsonParse=JSON.parse(response); 
//               let fProducts = jsonParse.records; 
//             var fProd='';
//             for(var i=0; i<fProducts.length; i++ ){
//                     fProd+=`<div class="prodDetails">
//                     <div class="product-Details prodHovr">
//                         <div class="product-img fProduct1" style=" background-image:url(../api/${fProducts[i].Product_Pic}">
//                             <a href="#">ORDER NOW</a>
//                         </div>
    
//                         <div class="fPrice">
//                             <h5>${fProducts[i].Product_Name}</h5>
//                             <p>Php${fProducts[i].Price}</p>
//                         </div>
//                     </div>
//                 </div>`;
//             }
//             // $("#featureTable").HTML(fProd);
//             productSlide.innerHTML=fProd;
//         }
//     })
// }
const product_API = "api/product.php";
const productSlide =document.querySelector(".prodScroller");

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
        // cars+=`<div class="slide">
        // <img src="api/${carsObject[car].img}" alt="image">
        // <br><br>
        // <div>
        // <h3>${carsObject[car].model}</h3>
        // <p>${carsObject[car].type}</p>
        // </div>
        // </div>`;

        cars+= `<div class="prodDetails">
                <div class="product-Details prodHovr">
                    <div class="product-img fProduct1" style="background-image:url(api/${carsObject[car].img});">
                            <a href="#">ORDER NOW</a> 
                       </div>
    
                       <div class="fPrice">
                          <h5>${carsObject[car].model}</h5>
                            <p>Php${carsObject[car].type}</p>
                        </div>
               </div>`;
    }
    productSlide.innerHTML=cars;
}

