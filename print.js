document.addEventListener("DOMContentLoaded", function () {
    // Add the current date and page URL to the attributes data-print-date and data-print-url
    const printDate = new Date().toLocaleDateString();
    const printURL = window.location.href;
    document.body.setAttribute("data-print-date", printDate);
    document.body.setAttribute("data-print-url", printURL);

    window.addEventListener("beforeprint", function () {
        // Add video URL from iframe to the print page
        document.querySelectorAll("p").forEach(function (p) {
            const iframe = p.querySelector("iframe");
            if (iframe) {
                const videoLinkText = document.createElement("span");
                videoLinkText.textContent = `Video URL: ${iframe.src}`;
                videoLinkText.classList.add("print-only-video-url");
                p.appendChild(videoLinkText);
            }
        });

        // Set styles for images and add alt text
        document.querySelectorAll(".item__imagecontainer, .gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
            const img = container.tagName === "IMG" ? container : container.querySelector("img");
            if (img) {
                img.style.maxWidth = "100px";
                img.style.height = "auto";
                img.style.marginLeft = "15px";
                img.style.marginBottom = "10px";

                const altText = document.createElement("span");
                altText.textContent = ` (${img.alt || "no alt text"})`;
                altText.style.display = "block";
                altText.style.fontSize = "8px";
                altText.style.color = "#050505";
                altText.style.maxWidth = "300px";
                altText.style.wordBreak = "break-word";
                altText.classList.add("print-alt-text");

                container.parentNode.insertBefore(altText, container.nextSibling);
            }
        });

        // Apply styles to the "See more" button during printing
        applyPrintStyles();
    });

    window.addEventListener("afterprint", function () {
        // Reset styles for images
        document.querySelectorAll(".item__imagecontainer img, .gi-responsiveimage .gi-responsiveimage__image img").forEach(function (img) {
            img.style.maxWidth = "";
            img.style.height = "";
            img.style.marginLeft = "";
            img.style.marginBottom = "";
        });

        // Remove added alt text
        document.querySelectorAll(".print-alt-text").forEach(function (altText) {
            altText.remove();
        });

        // Reset styles for the "See more" button after printing
        resetStyles();
    });
});

function applyPrintStyles() {   
    // Style the "See more" button
    document.querySelectorAll('.a-panel__link.a-panel__link--pt').forEach(button => {
        button.style.background = 'none';
        button.style.color = '#050505';
        button.style.border = 'none';
    });    
}

function resetStyles() {
    // Reset styles for the "See more" button
    document.querySelectorAll('.a-panel__link.a-panel__link--pt').forEach(button => {
        button.style.background = '';
        button.style.color = '';
        button.style.border = '';
    });    
}
