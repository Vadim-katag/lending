let plusMenu = document.getElementById("plus");

let menu = document.getElementById("search-burger")
plusMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});
