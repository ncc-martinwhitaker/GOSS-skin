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

/* Stylise images for printing */ 
function styleImagesForPrint() {
  document.querySelectorAll(".item__imagecontainer img, .gi-responsiveimage img").forEach(img => {
      img.style.maxWidth = "100px";
      img.style.height = "auto";
      img.style.marginLeft = "15px";
      img.style.marginBottom = "10px";

      const altText = document.createElement("span");
      altText.textContent = ` (${img.alt || "no alt text"})`;
      altText.classList.add("print-alt-text");
      altText.style.cssText = `
          display: block;
          font-size: 8px;
          color: #050505;
          max-width: 300px;
          word-break: break-word;
      `;
      img.parentElement.insertAdjacentElement("afterend", altText);
  });
}

// Reset image styles after printing
function resetImageStyles() {
  document.querySelectorAll(".item__imagecontainer img, .gi-responsiveimage img").forEach(img => {
      img.style.cssText = "";
  });

  document.querySelectorAll(".print-alt-text").forEach(altText => altText.remove());
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
  printLogoContainer.style.textAlign = 'center';
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
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("beforeprint", function () {
      // Processing group images
      document.querySelectorAll(".gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
          const img = container.tagName === "IMG" ? container : container.querySelector("img");
          if (img) {
              // Adding alt text
              const altText = document.createElement("span");
              altText.textContent = ` (${img.alt || "no alt text"})`;
              altText.style.display = "block";
              altText.style.fontSize = "10px";
              altText.style.color = "#050505";
              altText.style.marginTop = "5px";
              altText.style.maxWidth = "100%";
              altText.style.wordBreak = "break-word";
              altText.classList.add("print-alt-text");

              // Insert alt text under an image
              container.parentNode.insertBefore(altText, container.nextSibling);

              // Customise styles for a clear layout
              container.style.display = "block";
              container.style.marginBottom = "10px";
              container.style.textAlign = "center"; 
          }
      });
  });

  window.addEventListener("afterprint", function () {
      // Removing alt text after printing
      document.querySelectorAll(".print-alt-text").forEach(function (altText) {
          altText.remove();
      });

      // Reset image styles
      document.querySelectorAll(".gi-responsiveimage .gi-responsiveimage__image").forEach(function (container) {
          container.style.display = "";
          container.style.marginBottom = "";
          container.style.textAlign = "";
      });
  });
});
