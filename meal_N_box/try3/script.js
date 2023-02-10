
const featureProduct_API = "../api/feature.php";

const picMenu1=document.querySelector("#Menu001");
const picMenu2=document.querySelector("#Menu002");
const picMenu3=document.querySelector("#Menu003");
const picMenu4=document.querySelector("#Menu004");
const picMenu5=document.querySelector("#Menu005");
const picMenu6=document.querySelector("#Menu006");
const picMenu7=document.querySelector("#Menu007");
const picMenu8=document.querySelector("#Menu008");
const picMenu9=document.querySelector("#Menu009");
const picMenu10=document.querySelector("#Menu010");

const prodName1=document.querySelector("#menu1_Name");
const prodName2=document.querySelector("#menu2_Name");
const prodName3=document.querySelector("#menu3_Name");
const prodName4=document.querySelector("#menu4_Name");
const prodName5=document.querySelector("#menu5_Name");
const prodName6=document.querySelector("#menu6_Name");
const prodName7=document.querySelector("#menu7_Name");
const prodName8=document.querySelector("#menu8_Name");
const prodName9=document.querySelector("#menu9_Name");
const prodName10=document.querySelector("#menu10_Name");

const prodPrice1=document.querySelector("#menu1_Price");
const prodPrice2=document.querySelector("#menu2_Price");
const prodPrice3=document.querySelector("#menu3_Price");
const prodPrice4=document.querySelector("#menu4_Price");
const prodPrice5=document.querySelector("#menu5_Price");
const prodPrice6=document.querySelector("#menu6_Price");
const prodPrice7=document.querySelector("#menu7_Price");
const prodPrice8=document.querySelector("#menu8_Price");
const prodPrice9=document.querySelector("#menu9_Price");
const prodPrice10=document.querySelector("#menu10_Price");

window.addEventListener("load",iniliatizeSlider3());

function iniliatizeSlider3(){
    $.ajax({
        "url": featureProduct_API + "?showFeaturedProducts",
        "success": function (response) {
              console.log(response)
              let jsonParse=JSON.parse(response); 
              let fProducts = jsonParse.records; 
              var pPic='';
              var pName='';
              var pPrice='';
              var pic='';
              var name='';
              var price='';
              for( var x=1; x<=10; x++){
                for(var i=0; i<fProducts.length; i++ ){
                    pPic=`background-image: url('/../api/${fProducts[i].Product_Pic}')`;
                    pName= `${fProducts[i].Product_Name}`;
                    pPrice= `${fProducts[i].Price}`;
                }
             pic="picMenu"+x;
             name="prodName"+x;
             price="prodPrice"+x;
            pic.innerHTML=pPic;
            $(name).text(pName);
            $(price).text(pPrice);
        }
        }
    })
}