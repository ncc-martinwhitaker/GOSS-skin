//Alt text for images
window.addEventListener("beforeprint", () => {
  document.querySelectorAll(".gi-responsiveimage__image").forEach(img => {
    let altText = img.getAttribute("alt");
    if (altText) {
      let caption = document.createElement("div");
      caption.textContent = altText;
      caption.style.fontSize = "12px";
      caption.style.textAlign = "center";
      caption.classList.add("print-alt-caption"); 
      img.parentNode.insertBefore(caption, img.nextSibling);
    }
  });
});

window.addEventListener("afterprint", () => {
  document.querySelectorAll(".print-alt-caption").forEach(caption => {
    caption.remove(); 
  });
});