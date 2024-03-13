(function () {
	var qeTargetUrl = "https://www.bbc.co.uk/weather/2641181";
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
		qeHTML.innerHTML = "<span class='desktop'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='30' height='28' xml:space='preserve' version='1.1' viewBox='0 0 30 28'><image width='30' height='28' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAbxJREFUSEvFllFSwjAURe9jGEarH2QHsAPZAexAvqVKd+AO1BW4hDKWf9kBuAN2ADtIP6Q6yhCnpYDQJnlxOmP+2rzcM6/JvQ3hD0O+XAxBKsyX9oWfTFxlyHWBDJtN1L8WAJr52hjrRlsEceyi5Q6OvEcADyeQJ+En6Xv2cALL8KyFei3ttjjWm7YIPpdcsht47IVQGGrEJ8JP+pWDZXTZBTZTs3CtJ/z3GQfO7lhG51OAumZRNRP+R68ysIy8awCvHEEoCsTtamSrZXUsx94CCq2DmJoB9JY9E+6O5ghLfDc6NntZwXJ8fg9Fzzr7aLbAai8juCQsdvy9sAYcY73pmOxlBpeHRQq3gdMtGIlBEuj2Wgs2hgUHnBH19tKDzWFh7zgD6+1VCmaEBROcssvtpQFbw4IP1tirAGaGBR+8PV0FexXBhbAoPZeu4MI/+wisCYsysiu4YK892BAWttjlz9eoI25W823S5kPqw4IvbK082CsDW8KiRM7wk7DCkV0Ot2BzWFSzxzsVwlIMkjYxwqJacG4v4t0sTthpKCiVX+zo6tdV1/6htxUxychT3Ooq6/4R7H6wqmh8/gOAL+tl1ggv9gAAAABJRU5ErkJggg=='/></svg></span><span>Leave this site </span><span>quickly</span>";
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