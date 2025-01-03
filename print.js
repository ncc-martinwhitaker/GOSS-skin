document.addEventListener("DOMContentLoaded", function () {
    const printDate = new Date().toLocaleDateString();
    const printURL = window.location.href;
    document.body.setAttribute("data-print-date", printDate);
    document.body.setAttribute("data-print-url", printURL);

    window.addEventListener("beforeprint", function () {
        // Add video URL from iframe to the print page
        document.querySelectorAll("p").forEach(function (p) {
            const iframe = p.querySelector("iframe");
            if (iframe) {
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
                img.style.maxWidth = "100px";
                img.style.height = "auto";
                //img.style.marginLeft = "15px";
                //img.style.marginBottom = "5px";

                if (!container.parentNode.querySelector(".print-alt-text")) {
                    const altText = document.createElement("span");
                    altText.textContent = ` (${img.alt || "No alt text available"})`;

                    /*altText.style.display = "block";
                    altText.style.fontSize = "12px";
                    altText.style.color = "#050505";
                    altText.style.maxWidth = "300px";
                    altText.style.wordBreak = "break-word";
                    altText.style.whiteSpace = "normal";
                    altText.style.lineHeight = "1.2";
                    altText.style.marginTop = "5px";
                    altText.style.alignContent = "left";*/
                    altText.classList.add("print-alt-text");

                    const wrapper = document.createElement("div");
                    wrapper.style.display = "flex";
                    wrapper.style.flexDirection = "column";
                    wrapper.style.alignItems = "flex-start";
                    wrapper.style.maxWidth = "100%";
                    wrapper.appendChild(img.cloneNode(true));
                    wrapper.appendChild(altText);

                    container.parentNode.insertBefore(altText, container.nextSibling);
                    container.parentNode.replaceChild(wrapper, container);
                }
            }
        });

        // Apply styles to buttons for print
        applyButtonPrintStyles();
    });

    window.addEventListener("afterprint", function () {
        document.querySelectorAll(".item__imagecontainer img, .gi-responsiveimage .gi-responsiveimage__image img").forEach(function (img) {
            img.style.maxWidth = "";
            img.style.height = "";
            img.style.marginLeft = "";
            img.style.marginBottom = "";
        });

        document.querySelectorAll(".print-alt-text").forEach(function (altText) {
            altText.remove();
        });

        resetButtonStyles();
    });
});

function applyButtonPrintStyles() {
    const buttonSelectors = [
        'a.a-body__link--btn-primary-teal-std',
        'a.a-body__link--btn-primary-teal-lge',
        'a.a-body__link--cta',
        'a.a-body__link--btn-primary-std',
        'a.a-body__link--btn-primary-std-dwn',
        'a.a-body__link--btn-primary-lge',
        '.a-body__link--btn-secondary',
        '.a-body__link--btn-inverted-secondary',
        '.a-body__link'
    ];

    document.querySelectorAll(buttonSelectors.join(", ")).forEach(function (button) {
        const buttonText = button.textContent.trim(); 
        const buttonHref = button.href; 

        button.textContent = "";

        if (buttonHref) {

            // Creare a Ptint conteiner
            const printContainer = document.createElement("span");
            printContainer.style.display = "inline";
            printContainer.style.fontSize = "12px";
            printContainer.style.whiteSpace = "nowrap";

            // Add text button
            const textElement = document.createElement("span");
            textElement.textContent = buttonText;
            textElement.style.color = "#050505";
            textElement.style.marginRight = "5px";

            // Add link
            const linkElement = document.createElement("a");
            linkElement.textContent = buttonHref;
            linkElement.href = buttonHref;
            linkElement.style.color = "#1F78C7";
            linkElement.style.textDecoration = "underline";

            // Add text and link to the conteiner              
            printContainer.appendChild(textElement);            
            printContainer.appendChild(linkElement);
            
            button.appendChild(printContainer);
            printContainer.classList.add("print-only-link");

            // Looking for a point in the parent node
            const parent = button.closest("p"); 
            if (parent && parent.textContent.includes(".")) {
                const textNodes = Array.from(parent.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

                textNodes.forEach(node => {
                    const dotIndex = node.textContent.indexOf(".");
                    if (dotIndex !== -1) {
                        // Cut the text before and after the period
                        const beforeDot = node.textContent.slice(0, dotIndex).trim();
                        const afterDot = node.textContent.slice(dotIndex + 1).trim();

                        // Update the text node
                        node.textContent = beforeDot;

                        // Add a period to the link
                       const dotNode = document.createTextNode("");
                        linkElement.appendChild(dotNode);

                        // Add text after the period, if any
                        if (afterDot) {
                            const afterDotNode = document.createTextNode(` ${afterDot}`);
                            parent.appendChild(afterDotNode);
                        }
                    }
                });
            }
        }

        // Button style
        button.style.color = "#050505"; 
        button.style.background = "none";
        button.style.border = "none";
        button.style.display = "inline";
    });
}
  