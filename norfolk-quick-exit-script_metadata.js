(function () {
	var qeTargetUrl = "https://www.bbc.co.uk/weather/4776222";
	var qeTargetReplace = "https://www.google.com/search?q=bbc+weather+norfolk&safe=strict&sca_esv=589766361&ei=pAqAZa6BFpmyhbIPkdqGmAo&ved=0ahUKEwiu44mT0JiDAxUZWUEAHRGtAaMQ4dUDCBA&uact=5&oq=bbc+weather+norfolk&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2JiYyB3ZWF0aGVyIG5vcmZvbGsyCxAAGIAEGIoFGJECMgsQABiABBiKBRiRAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAAGIAEGIoFGIYDSKgTUNMKWIcScAJ4AZABAJgBTaABuwOqAQE3uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAAGIAEGLEDGIMBwgIREAAYgAQYigUYkQIYsQMYgwHCAg4QABiABBiKBRixAxiDAeIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp";
	var qeStyles = ".cta-link--qe{position: fixed; bottom: 20px; left: 5px; margin: 0; border: 2px solid #fff; z-index: 1;}.cta-link--qe:focus{z-index: 10;}.cta-link--qe span{color: #fff}.cta-link--qe:focus span{color: #000;}.cta-link--qe::after{top:auto; color: #fff;}.cta-link--qe:focus::after{color: #000;}";
	function qeOnClick(e) {
		e.preventDefault();
		window.open(qeTargetUrl, "_newtab");
		window.location.replace(qeTargetReplace);
	}
	function createQeLink() {
		var qeHTML = document.createElement("a");
		qeHTML.id = "qe";
		qeHTML.href = "#";
		qeHTML.setAttribute("class", "cta-link cta-link--contrast cta-link--cancel cta-link--qe");
		qeHTML.title = "Immediately exit this page and cover your track";
		qeHTML.innerHTML = "<span>Leave this site </span><span>quickly</span>";
		qeHTML.addEventListener("click", qeOnClick);
		return qeHTML;
	}
	function createQeStyles() {
		var head = document.getElementsByTagName("head");
		if (head[0]) {
			var style = document.createElement("style");
			style.innerText = qeStyles;
			head[0].appendChild(style);
		}
	}
	function qeButtonOnLoadListener() {
		var footer = document.querySelector(".body--qe .footer");
		if (footer) {
			footer.prepend(createQeLink());
			createQeStyles();
			footer.style.paddingBottom = "80px";
		}
	}
	document.addEventListener("DOMContentLoaded", qeButtonOnLoadListener);
})();