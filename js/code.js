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


function checkForm() {
    document.querySelector('input[name="name"]').addEventListener('change', checkNameSurname);
    document.querySelector('input[name="surname"]').addEventListener('change', checkNameSurname);
    document.querySelector('input[name="e-mail"]').addEventListener('change', checkEmail);
}
function checkNameSurname() {
    var nameVal = this.value;
    console.log(nameVal);
    var reg = /^[A-Z]{1}[a-z]{2,}$/g;
    if (!reg.test(nameVal)) {
        alert("Co to za dziwne imię?...");
        this.select();
    }
}
function checkEmail() {
    emailVal = this.value;
    var reg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    if (!reg.test(emailVal)) {
        console.log("no chyba nie")
    }
}
document.addEventListener("DOMContentLoaded", checkForm);
