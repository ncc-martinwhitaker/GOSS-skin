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
                // Перевіряємо, чи вже є span із класом print-only-video-url
                let videoLinkText = p.querySelector(".print-only-video-url");
                if (!videoLinkText) {
                    videoLinkText = document.createElement("span");
                    videoLinkText.classList.add("print-only-video-url");
                    p.appendChild(videoLinkText);
                }
                videoLinkText.textContent = `Video URL: ${iframe.src}`;
            }
        });

        // Set styles for images and add alt text
        document.querySelectorAll(".item__imagecontainer, .gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
            const img = container.tagName === "IMG" ? container : container.querySelector("img");
            if (img) {
                // Set image styles
                img.style.maxWidth = "100px";
                img.style.height = "auto";
                img.style.marginLeft = "15px";
                img.style.marginBottom = "10px";

                // Check if alt text already exists
                if (!container.parentNode.querySelector(".print-alt-text")) {
                    const altText = document.createElement("span");
                    altText.textContent = ` (${img.alt || "No alt text available"})`;

                    // Apply styles for long alt text
                    altText.style.display = "block";
                    altText.style.fontSize = "8px";
                    altText.style.color = "#050505";
                    altText.style.maxWidth = "300px";
                    altText.style.wordBreak = "break-word";
                    altText.style.whiteSpace = "normal";
                    altText.style.lineHeight = "1.2";
                    altText.style.marginTop = "5px";
                    altText.style.alignContent = "left";
                    altText.classList.add("print-alt-text");

                    // Append alt text after the image
                    container.parentNode.insertBefore(altText, container.nextSibling);
                }
            }
        });

        // Handle group images with .gi-responsiveimage class
        document.querySelectorAll(".gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
            const img = container.querySelector("img");
            if (img) {
                // Check if alt text already exists
                if (!container.querySelector(".print-alt-text")) {
                    const altText = document.createElement("span");
                    altText.textContent = `Alt text: ${img.alt || "No alt text available"}`;

                    // Apply styles for long alt text
                    altText.style.display = "block";
                    altText.style.fontSize = "8px";
                    altText.style.color = "#050505";
                    altText.style.maxWidth = "300px";
                    altText.style.wordBreak = "break-word";
                    altText.style.whiteSpace = "normal";
                    altText.style.lineHeight = "1.2";
                    altText.style.marginTop = "5px";
                    altText.style.alignContent = "left";
                    altText.classList.add("print-alt-text");

                    // Append alt text to the container
                    container.appendChild(altText);
                }
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