var slider = document.querySelector(".gallery");
var img = slider.querySelectorAll("img");
var prev = slider.querySelector(".gallery-prev");
var next = slider.querySelector(".gallery-next");
var show = "img-show";

next.addEventListener("click", function(event) {
	event.preventDefault();

	if (prev.classList.contains("disabled")) {
		prev.classList.remove("disabled");
	}

	for (var i = 0; i < img.length; i++) {
		if (img[i].classList.contains( show )) {
			if (i + 1 < img.length) {
				img[i].classList.remove( show );
				i++;
				img[i].classList.add( show );
				if (i === img.length - 1) {
					next.classList.add("disabled");
				}
			}
			
		}
	}

});

prev.addEventListener("click", function(event) {
	event.preventDefault();

	if (next.classList.contains("disabled")) {
		next.classList.remove("disabled");
	}

	for (var i = img.length - 1; i >= 0; i--) {
		if (img[i].classList.contains( show )) {
			if (i - 1 >= 0) {
				img[i].classList.remove( show );
				i--;
				img[i].classList.add( show );
				if (i === 0) {
					prev.classList.add("disabled");
				}
			}
			
		}
	}

});