document.addEventListener("DOMContentLoaded", function () {
  addPrintAttributes();
  addLogoToPrintVersion();
  addGiInfoStylesToPrint();
  replaceVideosWithLinksForPrint();

  window.addEventListener("beforeprint", handleBeforePrint);
  window.addEventListener("afterprint", handleAfterPrint);
});

/* Adds date and URL for printing */ 
function addPrintAttributes() {
  const printDate = new Date().toLocaleDateString();
  const printURL = window.location.href;
  document.body.setAttribute("data-print-date", printDate);
  document.body.setAttribute("data-print-url", printURL);
}

// Pre-press processor
function handleBeforePrint() {
  addVideoURLsToPrint();
  styleImagesForPrint();
  applyPrintStyles();
}

// Post-printing processor
function handleAfterPrint() {
  resetImageStyles();
  resetStyles();
}

/* Adds a video URL to a printed page */
function addVideoURLsToPrint() {
  document.querySelectorAll("p iframe").forEach(iframe => {
      const videoLinkText = document.createElement("span");
      videoLinkText.textContent = `Video URL: ${iframe.src}`;
      videoLinkText.classList.add("print-only-video-url");
      iframe.parentElement.appendChild(videoLinkText);
  });
}

/* Styles the "See more" button for printing */ 
function applyPrintStyles() {
  document.querySelectorAll('.a-panel__link.a-panel__link--pt').forEach(button => {
      button.style.background = 'none';
      button.style.color = '#050505';
      button.style.border = 'none';
  });
}

// Reset button styles after printing
function resetStyles() {
  document.querySelectorAll('.a-panel__link.a-panel__link--pt').forEach(button => {
      button.style.cssText = "";
  });
}

/* Adds a logo to the printed version */ 
function addLogoToPrintVersion() {
  const logo = document.querySelector('.gi-sitelogo__image');
  if (!logo) return;

  const clonedLogo = logo.cloneNode(true);
  const printLogoContainer = document.createElement('div');
  printLogoContainer.classList.add('print-logo-container');
  printLogoContainer.style.textAlign = 'left';
  printLogoContainer.style.marginBottom = '20px';
  printLogoContainer.appendChild(clonedLogo);
  document.body.prepend(printLogoContainer);

  const style = document.createElement('style');
  style.textContent = `
      @media print {
          .print-logo-container {
              display: block;
          }
          .gi-sitelogo__image {
              max-width: 200px;
              height: auto;
          }
      }
      @media screen {
          .print-logo-container {
              display: none;
          }
      }
  `;
  document.head.appendChild(style);
}

/* Adds styles for information blocks in the printed version */ 
function addGiInfoStylesToPrint() {
  const style = document.createElement('style');
  style.textContent = `
      @media print {
          .gi-info {
              background-color: #f9f9f9;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              margin-bottom: 10px;
          }
          .gi-info--alert {
              background-color: #ffe5e5;
              border-color: #ff9999;
              color: #a94442;
          }
          .gi-info--primary {
              background-color: #e5f1ff;
              border-color: #99caff;
              color: #31708f;
          }
          .gi-info--secondary {
              background-color: #f5f5f5;
              border-color: #d6d6d6;
              color: #6c757d;
          }
      }
  `;
  document.head.appendChild(style);
}

/* Replaces video with a link in the printed version */ 
function replaceVideosWithLinksForPrint() {
  window.addEventListener('beforeprint', () => {
      document.querySelectorAll('.videoplayer .videoplayer__video').forEach(video => {
          const videoSrc = video.getAttribute('src');
          const altText = video.getAttribute('alt') || 'Video content';

          const link = document.createElement('a');
          link.textContent = videoSrc ? 'Watch video here' : altText;
          if (videoSrc) link.href = videoSrc;
          link.classList.add('videoplayer__link');
          link.style.textDecoration = 'underline';
          link.style.color = '#1F78C7';

          video.replaceWith(link);
      });
  });

  const style = document.createElement('style');
  style.textContent = `
      @media print {
          .videoplayer__video {
              display: none;
          }
          .videoplayer__link {
              font-size: 14px;
              display: inline-block;
              margin-bottom: 10px;
          }
      }
  `;
  document.head.appendChild(style);
}

/* Alt text for group images */
/* Ensure alt text stays with images in the printed version */
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("beforeprint", function () {
        // Process group images
        document.querySelectorAll(".gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
            const img = container.tagName === "IMG" ? container : container.querySelector("img");
            if (img) {
                // Check if the alt text is already added
                if (container.parentNode.classList.contains("print-container")) {
                    return; // Skip if already wrapped
                }

                // Create a wrapper container to hold the image and its alt text
                const printWrapper = document.createElement("div");
                printWrapper.style.display = "block";
                printWrapper.style.pageBreakInside = "avoid"; // Prevent page breaks inside the container
                printWrapper.style.marginBottom = "15px"; // Space between groups
                printWrapper.classList.add("print-container");

                // Move the image into the wrapper
                container.parentNode.insertBefore(printWrapper, container);
                printWrapper.appendChild(container);

                // Create a span for alt text
                const altText = document.createElement("span");
                altText.textContent = img.alt || "No alt text available";

                // Apply styles to handle long alt text
                altText.style.display = "block";
                altText.style.fontSize = "10px"; // Clear font size
                altText.style.color = "#050505"; // Clear text color
                altText.style.marginTop = "5px"; // Small spacing between image and text
                altText.style.padding = "0";
                altText.style.maxWidth = "100%"; // Ensure proper wrapping
                altText.style.wordBreak = "break-word"; // Allow line breaks within words
                altText.style.overflowWrap = "break-word"; 
                altText.style.textAlign = "left"; 
                altText.style.lineHeight = "1.4"; 
                altText.style.boxSizing = "border-box";
                altText.style.whiteSpace = "normal"; // Ensure long text wraps
                altText.classList.add("print-alt-text");

                // Append alt text to the wrapper
                printWrapper.appendChild(altText);
            }
        });
    });
});

//CTA Link
function fixCtaLinksForPrint() {
    const ctaLinks = document.querySelectorAll('.a-body__link.a-body__link--cta');
  
    ctaLinks.forEach(link => {
      const linkText = link.textContent.trim(); 
      const linkHref = link.getAttribute('href'); 
  
      // Clean up existing content
      link.textContent = '';
  
      // Add the button text
      const textSpan = document.createElement('span');
      textSpan.textContent = linkText;
      textSpan.style.color = '#050505';
      textSpan.style.display = 'block';
      textSpan.style.marginBottom = '5px'; 
      link.appendChild(textSpan);
  
      // Adding URL
      const urlSpan = document.createElement('span');
      urlSpan.textContent = `(${linkHref})`;
      urlSpan.style.color = '#1F78C7';
      urlSpan.style.display = 'block';
      urlSpan.style.textDecoration = 'underline';
      link.appendChild(urlSpan);
    });
  }
  
  // Pre-printing
  window.addEventListener('beforeprint', fixCtaLinksForPrint);
  