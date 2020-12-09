// Menu

function menuOnClickTwo() {
	document.getElementById("menu-bar2").classList.toggle("change");
	document.getElementById("nav2").classList.toggle("change");
	document.getElementById("menu-bg2").classList.toggle("change-bg");
	document.getElementById("menu-items2").classList.toggle("hidden");
}

AOS.init({
	duration: 500,
	easing: "slide",
	once: true,
});

// Zenfit Navbar active class and smooth scroll

$(document).ready(function () {
	$(document).on("scroll", onScroll2);

	//smoothscroll
	$('a[href^="#"]').on("click", function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$("a").each(function () {
			$(this).removeClass("is-active2");
		});
		$(this).addClass("is-active2");

		var target = this.hash,
			menu2 = target;
		$target = $(target);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top + 2,
				},
				700,
				"swing",
				function () {
					window.location.hash = target;
					$(document).on("scroll", onScroll2);
				}
			);
	});
});

function onScroll2(event) {
	var scrollPos = $(document).scrollTop();
	$("#nav2 a").each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		try {
			if (
				refElement.position().top <= scrollPos &&
				refElement.position().top + refElement.height() > scrollPos
			) {
				$("#nav2 ul li a").removeClass("is-active2");
				currLink.addClass("is-active2");
			} else {
				currLink.removeClass("is-active2");
			}
		} catch (e) {
			function stoperror() {
				return true;
			}
		}
		window.onerror = stoperror;
	});
}

$(document).ready(function () {
	$(".fancybox").fancybox();
});

var a = 0;
var percent = "%";
$(window).scroll(function () {
	var oTop = $("#counter").offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$(".counter-value").each(function () {
			var $this = $(this),
				countTo = $this.attr("data-count");
			$({
				countNum: $this.text(),
			}).animate(
				{
					countNum: countTo,
				},

				{
					duration: 7000,
					easing: "swing",
					step: function () {
						$this.text(Math.floor(this.countNum) + percent);
					},
					complete: function () {
						$this.text(this.countNum + percent);
						//alert('finished');
					},
				}
			);
		});
		a = 1;
	}
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#scroll").fadeIn();
		} else {
			$("#scroll").fadeOut();
		}
	});
});

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	navText: [
		"<i class='fas fa-chevron-left'></i>",
		"<i class='fas fa-chevron-right'></i>",
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});
