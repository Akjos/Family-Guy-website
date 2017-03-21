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
(function () {
    'use strict';
    function init() {
        var gallery = document.getElementById('gallery'),
            img = gallery.getElementsByTagName('a');
        for (var i = 0; i < img.length ; i++) {
            img[i].lightbox();
        }
    }   
    Node.prototype.lightbox = function () {
        this.onclick = function() {
            var a = create(this);
            return false;
        }
    }
    function create (event) {
        var body = document.getElementsByTagName('body')[0],
            modal = document.createElement('div'),
            lightbox = document.createElement('div'),
            close_btn = document.createElement('button'),
            next_btn = document.createElement('button'),
            previous_btn = document.createElement('button'),
            img = document.createElement('img'),
            title = document.createElement('span'),
            href = event.href,
            previous = event.previousSibling.previousSibling,
            next = event.nextSibling.nextSibling;
        title.className = 'title';
        img.src = href;
        modal.className = 'modal';
        lightbox.className = 'lightbox';
        close_btn.className = 'close_btn';
        next_btn.className = 'next_btn';
        previous_btn.className = 'previous_btn';
        img.onload = put;
        modal.addEventListener('click',destroy);
        close_btn.addEventListener('click', destroy);
        next_btn.addEventListener('click', next_Photo);
        previous_btn.addEventListener('click', previous_Photo);
        document.addEventListener('keyup', pressKey);
        function pressKey (e) {
            switch (e.keyCode) {
                case 37:
                    next_Photo();
                break;
                case 39:
                    previous_Photo();
                break;
                case 27:
                    destroy();
                break;
                default:
                    break;
            }
        }
        function put () {
            body.appendChild(modal);
            body.appendChild(lightbox);
            lightbox.appendChild(close_btn);
            lightbox.appendChild(img);
            lightbox.appendChild(title);
            lightbox.appendChild(next_btn);
            lightbox.appendChild(previous_btn);
            title.appendChild(document.createTextNode(event.firstChild.title));
            lightbox.style.marginTop = -(img.height/2) + 'px';
            lightbox.style.marginLeft = -(img.width/2) + 'px';
        }
        function destroy () {
            body.removeChild(modal);
            body.removeChild(lightbox);
            document.removeEventListener('keyup', pressKey);
            return false;
        }
        function next_Photo() {
            destroy();
            if (event.nextSibling.nextSibling) {
                create(event.nextSibling.nextSibling);
            } else {
                var parent = event.parentNode;
                    create(parent.firstChild.nextSibling);
            }
            return false;
         }
         function previous_Photo() {
             destroy();
             if (previous) {
                 create(previous);
             } else {
                 var parent = event.parentNode;
                 create(parent.lastChild.previousSibling);
             }
             return false;
         }
         return false;
    }
    window.onload = init;
})();
