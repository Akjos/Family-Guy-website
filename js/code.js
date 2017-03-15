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
    var btn = document.querySelector(".go-to-top");
    if (window.innerHeight >= document.body.clientHeight) {
        btn.classList.remove("nodisplay");
    } else {
        btn.classList.add("nodisplay");
    }
}
document.addEventListener("DOMContentLoaded", window.onresize = function () {
    displayBtn();
});
//footer always bottom.....................
document.addEventListener("DOMContentLoaded", function () {
    var main = document.querySelector(".main"),
        height = window.innerHeight;
    main.style.minHeight = height - 302 + "px";

});
//photo gallery
Lightbox = function (obW) {
    this.obW = obW;
    this.modal = null;
    this.lightbox = null;
    this.image = null;
    this.imageWidth = 0;
    this.imageHeight = 0;
    this.o = this;
    this.destroy = function () {
        this.modal.parentNode.removeChild(this.modal);
        this.lightbox.parentNode.removeChild(this.lightbox);
    };
    this.init = function () {
        var ob = this.o,
            href = this.obW.href,
            body = document.getElementsByTagName('body')[0];
        this.image = new Image();
        this.image.onload = function () {
            ob.imageWidth = ob.image.width;
            ob.imageHeight = ob.image.height;
            ob.modal = document.createElement('div');
            ob.modal.className = 'modal';
            ob.modal.onclick = function () {
                ob.destroy();
            };
            ob.lightbox = document.createElement('div');
            ob.lightbox.className = 'lightbox';
            ob.lightbox.style.marginTop = -(ob.imageHeight / 2) + 'px';
            ob.lightbox.style.marginLeft = -(ob.imageWidth / 2) + 'px';
            ob.lightbox.style.width = ob.imageWidth + 'px';
            ob.lightbox.style.height = ob.imageHeight + 'px';
            ob.lightbox.appendChild(ob.image);
            var btnClose = document.createElement('div');
            btnClose.className = "close-icone";
            btnClose.value = "x";
            btnClose.onclick = function () {
                ob.destroy();
            };
            ob.lightbox.appendChild(btnClose);
            body.appendChild(ob.modal);
            body.appendChild(ob.lightbox);
        };
        this.image.src = this.obW.href;
    };
    this.init();
};
 

Node.prototype.lightbox = function () {
    this.onclick = function () {
        var lighbox = new Lightbox(this);
        return false;
    };
    
};

window.onload = function () {
    var a = document.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].className === 'gallery-img') {
            a[i].lightbox();
        }
    }
};
