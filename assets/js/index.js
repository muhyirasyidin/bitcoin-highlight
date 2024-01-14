window.onscroll = () => {
	if (window.pageYOffset == 0) {
		document.getElementById("navigation").classList.add("bg-transparent");
		document.getElementById("navigation").classList.remove("bg-active");
	} else {
		document.getElementById("navigation").classList.remove("bg-transparent");
		document.getElementById("navigation").classList.add("bg-active");
	}
}