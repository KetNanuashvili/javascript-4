//burger bar 

//    FIRST VERSION

//let navBar = document.getElementById('navigation');
//let burgerBar = document.getElementById('burgerBar');

//burgerBar.addEventListener('click', function(){
//   navBar.classList.toggle('active');
//}) 

// SECOND VERSION
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');

}) 
