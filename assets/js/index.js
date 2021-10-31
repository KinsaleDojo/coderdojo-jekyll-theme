
function openCity(evt, cityName) {
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
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleMobileMenu(){
  var toggleButton = document.getElementById("mobile-menu-toggle");
  var mobileMenu = document.getElementById("mobile-navigation");
  var header = document.getElementById("site-header");
  var title = document.getElementById("site-title");

  if(mobileMenu.style.display === "none" || mobileMenu.style.display === ""){
      header.style.background = '#ffffff';
      title.style.color = '#000000';
    var buttonContent = '\u2715';
    mobileMenu.style.width = "100%";
    mobileMenu.style.display = "block";
    toggleButton.textContent = buttonContent;
    toggleButton.style.color = '#000000'
  }else{
      header.style.background = '#642580';
      title.style.color = '#ffffff';
    var buttonContent = '\u2630';
    mobileMenu.style.width = "0";
    mobileMenu.style.display = "none";
    toggleButton.textContent = buttonContent;
    toggleButton.style.color = '#ffffff'
  }
}

function user_click(clicked_id){
  var modal_id = 'modal-' + clicked_id;
  var modal = document.getElementById(modal_id);
  modal.style.display = "block";
}

function user_button_click(clicked_id){
  var modal_id = 'modal-' + clicked_id;
  var modal = document.getElementById(modal_id);
  modal.style.display = "block";
}

function close_span_click(clicked_id){
  var modal_id = clicked_id.replace('span-', 'modal-');
  var modal = document.getElementById(modal_id);
  modal.style.display = "none";
}

function close_button_click(clicked_id){
  var modal_id = clicked_id.replace('button-', 'modal-');
  var modal = document.getElementById(modal_id);
  modal.style.display = "none";
}




var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == span) {
    modal.style.display = "none";
  } else if (event.target == btn) {
    modal.style.display = "none";
  } 
} */