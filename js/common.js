$(document).ready(function() {

	$("#app-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#app-form").trigger("reset");
		});
		return false;
	});
	
});