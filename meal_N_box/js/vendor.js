checkCategorySelected();

function selectedVendor(category) {
  sessionStorage.setItem("category", category);
    var vendorX = sessionStorage.getItem("category");
     var vendorA = document.getElementById("Vendor1");
    alert("Vendor is" +vendorX);
}