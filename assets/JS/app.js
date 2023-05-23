

  function openProduct(evt, ProductName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(ProductName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  $(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#defaultCountdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());
});

function openProductCategory(evt, ProductName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabContentProduct");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabLinksProduct");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ProductName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openReview(evt, ProductName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ProductName).style.display = "block";
  evt.currentTarget.className += " active";
}

// const myModal = document.getElementById('Modall')
// const myInput = document.getElementById('OpenModall')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

const addToBasketButton = document.getElementById('add-to-basket');
const basketSidebar = document.getElementById('basket-sidebar');
const closeSidebar = document.querySelector('.close');

addToBasketButton.addEventListener('click', () => {
  // Code to add the product to the basket

  // Show the sidebar when the product is added
  basketSidebar.style.width = '20%';

});
closeSidebar.addEventListener('click',()=>{
  basketSidebar.style.width = '0%';
})