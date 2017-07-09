// Форма входа

var link = document.querySelector(".user-block");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("input[name=login]");
var form = popup.querySelector("form");
var password = form.querySelector("input[type=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {	
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		console.log("Нужно ввести логин и пароль");
		popup.classList.add("modal-error");
	}
	if (login.value.length > 0 && login.value.length < 7) {
			event.preventDefault();
			console.log("Логин должен быть минимум 6 символов");
	};
	localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});

// Карта

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-show"))
			mapPopup.classList.remove("modal-content-show");
	}
});

























