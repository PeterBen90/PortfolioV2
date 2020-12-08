// Zenfit Navbar active class and smooth scroll

$(document).ready(function () {
	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on("click", function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$("a").each(function () {
			$(this).removeClass("is-active");
		});
		$(this).addClass("is-active");

		var target = this.hash,
			menu = target;
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
					$(document).on("scroll", onScroll);
				}
			);
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$("#nav2 a").each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		try {
			if (
				refElement.position().top <= scrollPos &&
				refElement.position().top + refElement.height() > scrollPos
			) {
				$("#nav2 ul li a").removeClass("is-active");
				currLink.addClass("is-active");
			} else {
				currLink.removeClass("is-active");
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
	$("#scroll").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
