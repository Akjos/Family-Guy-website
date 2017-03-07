//drop down menu........................................
function fixedMenu() {
	var headMenu = document.getElementById("headMenu");
	if (document.body.scrollTop > 150) {
		headMenu.classList.add("fixed-menu");
	} else {
		headMenu.classList.remove("fixed-menu");
	}
}
window.onscroll = function () {
    fixedMenu();
};
//check form............................................
function check(name, reg) {
    if (!reg.test(name.value)) {
        name.classList.remove("correctInput");
        name.classList.add("incorrectInput");
    } else {
        name.classList.remove("incorrectInput");
        name.classList.add("correctInput");
        
    }
}
function checkNameSurname() {
    var name = this,
        reg = /^[A-Z]{1}[a-z]{2,}$/g;
    check(name, reg);
}
function checkEmail() {
    var email = this,
        reg = /^[0-9a-zA-Z_.]+@[0-9a-zA-Z.]+\.[a-zA-Z]{2,3}$/;
    check(email, reg);
}
function checkPhone() {
    var phone = this,
        reg = /[0-9\s]{9}/;
    check(phone, reg);
}
function checkForm() {
    var name = location.pathname;
    if (name.search("contact") !== -1) {
        document.querySelector('input[name="name"]').addEventListener('change', checkNameSurname);
        document.querySelector('input[name="surname"]').addEventListener('change', checkNameSurname);
        document.querySelector('input[name="e-mail"]').addEventListener('change', checkEmail);
        document.querySelector('input[name="phone"]').addEventListener('change', checkPhone);
    } else {
        return;
    }
}
document.addEventListener("DOMContentLoaded", checkForm);
//display go up batton...................................
function displayBtn() {
    if (window.innerHeight >= document.body.clientHeight) {
        var btn = document.querySelector(".go-to-top");
        btn.classList.add("nodisplay");
    }
}
document.addEventListener("DOMContentLoaded", displayBtn);
//footer always bottom.....................
document.addEventListener("DOMContentLoaded", function () {
    var main = document.querySelector(".main"),
        height = window.innerHeight;
    main.style.minHeight = height - 302 + "px";

});