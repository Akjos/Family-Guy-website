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
    var name = this;
    var reg = /^[A-Z]{1}[a-z]{2,}$/g;
    check(name, reg);
}
function checkEmail() {
    email = this;
    var reg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    check(email, reg);
}
function checkPhone() {
    var phone = this;
    var reg = /[0-9\s]{9}/;
    check(phone, reg);
}
function checkForm() {
    document.querySelector('input[name="name"]').addEventListener('change', checkNameSurname);
    document.querySelector('input[name="surname"]').addEventListener('change', checkNameSurname);
    document.querySelector('input[name="e-mail"]').addEventListener('change', checkEmail);
    document.querySelector('input[name="phone"]').addEventListener('change', checkPhone);
}
document.addEventListener("DOMContentLoaded", checkForm);
