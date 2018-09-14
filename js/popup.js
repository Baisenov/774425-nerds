
    var link = document.querySelector(".modal");
    var pop = document.querySelector(".modal-window");
    var close = document.querySelector(".modal-close");
    var login = document.querySelector("[name=login]"); 

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      pop.classList.add("modal-show")
      login.focus();
    });  

    close.addEventListener("click", function(evt){
      evt.preventDefault();
      pop.classList.remove("modal-show")
    });