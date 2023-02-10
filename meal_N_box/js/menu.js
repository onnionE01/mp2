
function changeMenu(category) {
    sessionStorage.setItem("category", category);
    window.location.href = "menu.html";
}

  checkCategorySelected();

  function checkCategorySelected() {
    var catergoryselected = sessionStorage.getItem("category");
    var c1 = document.getElementById("best-seller");
    var c2 = document.getElementById("breakfast");
    var c3 = document.getElementById("lunch");
    var c4 = document.getElementById("dinner");
    var c5 = document.getElementById("snacks");
    var c6 = document.getElementById("dessert");
    var c7 = document.getElementById("new");
    var c8 = document.getElementById("fav");

    var cA = "best-seller";
    var cB = "breakfast";
    var cC = "lunch";
    var cD = "dinner";
    var cE = "snacks";
    var cF = "dessert";
    var cG = "new";
    var cH = "fav";

    if (catergoryselected == cB) {
      c1.style.display = "none";
      c2.style.display = "block";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";

    } else if (catergoryselected == cC) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "block";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (catergoryselected == cD) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "block";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (catergoryselected == cE) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "block";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (catergoryselected == cF) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "block";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (catergoryselected == cG) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "block";
      c8.style.display = "none";
    } else if (catergoryselected == cH) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "block";
    } else {
      c1.style.display = "block";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    }
  }

  function Selector(category) {
    sessionStorage.setItem("category", category);
    var selectedcategory = sessionStorage.getItem("category");

    var c1 = document.getElementById("best-seller");
    var c2 = document.getElementById("breakfast");
    var c3 = document.getElementById("lunch");
    var c4 = document.getElementById("dinner");
    var c5 = document.getElementById("snacks");
    var c6 = document.getElementById("dessert");
    var c7 = document.getElementById("new");
    var c8 = document.getElementById("fav");

    var cA = "best-seller";
    var cB = "breakfast";
    var cC = "lunch";
    var cD = "dinner";
    var cE = "snacks";
    var cF = "dessert";
    var cG = "new";
    var cH = "fav";

    if (selectedcategory == cB) {
      c1.style.display = "none";
      c2.style.display = "block";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (selectedcategory == cC) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "block";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (selectedcategory== cD) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "block";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (selectedcategory== cE) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "block";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (selectedcategory== cF) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "block";
      c7.style.display = "none";
      c8.style.display = "none";
    } else if (selectedcategory== cG) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "block";
      c8.style.display = "none";
    } else if (selectedcategory== cH) {
      c1.style.display = "none";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "block";
    } else {
      c1.style.display = "block";
      c2.style.display = "none";
      c3.style.display = "none";
      c4.style.display = "none";
      c5.style.display = "none";
      c6.style.display = "none";
      c7.style.display = "none";
      c8.style.display = "none";
    }
  }
