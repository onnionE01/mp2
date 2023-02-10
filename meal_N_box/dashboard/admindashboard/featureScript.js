
const featureProduct_API = "../../api/feature.php";

const fTable =document.querySelector(".featureTable");

getItems();

function getItems(){
    $.ajax({
        "url": featureProduct_API + "?showFeaturedProducts",
        "success": function (response) {
              console.log(response)
              let jsonParse=JSON.parse(response); 
              let fProducts = jsonParse.records; 
            var fProd='';
            for(var i=0; i<fProducts.length; i++ ){
                fProd+=`<tr style:"border:1px;">
                    <td> ${fProducts[i].Menu_ID}</td>
                    <td><img src="../../api/${fProducts[i].Product_Pic}" width="40%" alt="IMAGE"></td>
                    <td> ${fProducts[i].Product_Name} </td>
                    <td>${fProducts[i].Price} </td>
                    <td>${fProducts[i].Vendor_ID} </td>
                    <td>${fProducts[i].Quantity_OH} </td>
                    <td><button onclick='edit("${fProducts[i].Menu_ID}")'>EDIT</button></td>
                    </tr>`;
            }
            // $("#featureTable").HTML(fProd);
            fTable.innerHTML=fProd;
        }
    })
}
