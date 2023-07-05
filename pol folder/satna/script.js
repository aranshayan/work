const btn = document.querySelector('.menu',);
const logo = document.querySelector('.logoLink');
const menu = document.querySelector('.right-menu');
const settings = document.getElementById('setting');
const txt = document.querySelector('.txt');

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        menu.style.width = '5.3rem';
        txt.style.display='block';
      
      }
    else {
        menu.style.width = '16rem';
    }
})
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  })
}       
