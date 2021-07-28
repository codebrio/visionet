$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		dots: false,
		lazyLoad: true,
		loop: true,
		margin: 10,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},

			767: {
				items: 3
			},

			1000: {
				items: 4
			},
		},
	});
});

function showValue(e) {
    e.preventDefault(); 
	var text = document.getElementById("text").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	alert(text + ' ' + email + ' ' + tel);
}




// $(function () {
// 	$("#dialog").dialog({
// 		modal: true,
// 		autoOpen: false,
// 		title: "User Details",
// 		width: 300,
// 		height: 150,
// 	});
// 	$("#popupshow").click(function (e) {

// 		e.preventDefault();
// 		var name = $("#name").val();
// 		var email = $("#email").val();
// 		var tel = $("#tel").val();

// 		$("#show_name").html(name);
// 		$("#show_email").html(email);
// 		$("#show_tel").html(tel);

// 		$('#dialog').dialog('open');

// 		// setTimeout(function () {
// 		// 	$("#demoRequest").submit();
// 		// }, 3000);

// 	});




