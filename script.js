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

let inputBlock = document.querySelector(".input-form");
let addButton = document.querySelector(".btn-add");
let ulItems = document.querySelector(".ul-items");
let deleteAllItems = document.querySelector(".clearall");
let form = document.getElementById("form-wraper");
let newIelement = document.createElement("i");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    // 1. get input value;
    let value = inputBlock.value;
    // 2. input value in li tag;
    let li = document.createElement("li");
    li.classList.toggle('delate-li');

  
    let deleteButton = document.createElement("button");
    deleteButton.classList.toggle('second-button');

    deleteButton.innerHTML = '<i class = "fa-sharp fa-solid fa-delete-left"></i>';
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    li.textContent = value;
  
    li.appendChild(deleteButton);
    ulItems.appendChild(li);
    // 3. clear input
    inputBlock.value = " ";
  });
  
  deleteAllItems.addEventListener("click", function () {
    ulItems.innerHTML = " ";
  });
  