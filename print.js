// Alt text for gallery images and single image
window.addEventListener("beforeprint", () => {
  document.querySelectorAll('.gi-responsiveimage__image').forEach(img => {
    const wrapper = img.closest('.grid__cell');
    const altText = img.alt || '';
    const existingCaption = wrapper 
      ? wrapper.querySelector('.print-alt-caption')
      : img.nextElementSibling?.classList?.contains('print-alt-caption');

    if (existingCaption) return;

    const caption = document.createElement('div');
    caption.className = 'print-alt-caption';
    caption.textContent = altText;

    // Single image styles
    if (!wrapper) {
      caption.style.fontSize = "12px";
      caption.style.textAlign = "center";
      caption.style.breakInside = "avoid";
      caption.style.pageBreakInside = "avoid";
      caption.style.display = "inline-block";
      caption.style.color = "#050505";
      img.parentNode.insertBefore(caption, img.nextSibling);
    } else {
      wrapper.appendChild(caption);
    }
  });
});

window.addEventListener("afterprint", () => {
  document.querySelectorAll(".print-alt-caption").forEach(caption => {
    caption.remove();
  });
});

