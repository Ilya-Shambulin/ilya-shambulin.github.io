(function () {
  'use strict';

  function getLenny() {
    return {
      face: document.querySelector('.lenny-face'),
      pupils: document.querySelectorAll('.pupil')
    };
  }

  function moveEyes(e) {
    if (window.innerWidth <= 720) return;
    const { face, pupils } = getLenny();
    if (!face || !pupils.length) return;
    const style = getComputedStyle(face);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    pupils.forEach(function (pupil) {
      const rect = pupil.getBoundingClientRect();
      const pupilX = rect.left + rect.width / 2;
      const pupilY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);
      const distance = 3;
      pupil.style.transform = 'translate(' + Math.cos(angle) * distance + 'px, ' + Math.sin(angle) * distance + 'px)';
    });
  }

  window.addEventListener('pointermove', moveEyes, { passive: true });

  // Copy email. Capture phase prevents the older embed listener from firing twice.
  document.addEventListener('click', function (event) {
    const button = event.target.closest && event.target.closest('#copyTextBtn');
    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const text = button.getAttribute('data-copy') || '';
    const showCopied = function () {
      button.classList.add('copied');
      window.clearTimeout(button.__copyTimer);
      button.__copyTimer = window.setTimeout(function () {
        button.classList.remove('copied');
      }, 2000);
    };

    function fallbackCopy() {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (_) {}
      textarea.remove();
      if (ok) showCopied();
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }, true);
})();
