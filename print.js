//Alt text for images
window.addEventListener("beforeprint", () => {
  document.querySelectorAll(".gi-responsiveimage__image").forEach(img => {
    let altText = img.getAttribute("alt");
    if (altText) {
      let caption = document.createElement("div");
      caption.textContent = altText;
      caption.style.fontSize = "12px";
      caption.style.textAlign = "center";
      caption.style.breakInside = "avoid"; 
      caption.style.pageBreakInside = "avoid"; 
      caption.style.display = "inline-block"; 
      caption.classList.add("print-alt-caption");
      caption.style.color = "black";
      img.parentNode.insertBefore(caption, img.nextSibling);
    }
  });
});

window.addEventListener("afterprint", () => {
  document.querySelectorAll(".print-alt-caption").forEach(caption => {
    caption.remove();
  });
});
