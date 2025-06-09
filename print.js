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

// Video
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('figure.videoplayer').forEach(function (figure) {
    const source = figure.querySelector('source');
    if (!source || !source.src) return;

    // 1. Create a link
    const link = document.createElement('a');
    link.href = source.src;
    link.className = 'video-print-link';
    link.textContent = 'Video source: ' + source.src;

    // 2. Search and clone transcript
    const transcript = figure.querySelector('.transcript__caption');
    let transcriptClone = null;
    if (transcript) {
      transcriptClone = transcript.cloneNode(true);
      transcriptClone.classList.add('video-print-transcript');
    }

    // 3. Create a title
    const transcriptHeader = document.createElement('h2');
    transcriptHeader.className = 'video-dialog__header';
    transcriptHeader.textContent = 'Video transcript text';

    // 4. Inserting elements before <figure>
    const parent = figure.parentNode;

    // Inserting link
    parent.insertBefore(link, figure);

    // If there is a transcript, insert the title and the transcript itself
    if (transcriptClone) {
      parent.insertBefore(transcriptHeader, figure);
      parent.insertBefore(transcriptClone, figure);
    }
  });
});
