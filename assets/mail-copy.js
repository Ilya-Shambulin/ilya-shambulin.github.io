(() => {
  const COPY_SELECTOR = '#copyTextBtn, .copy-text[data-copy]';
  let resetTimer = null;

  async function fallbackCopy(text) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    area.style.pointerEvents = 'none';
    document.body.appendChild(area);
    area.select();
    area.setSelectionRange(0, area.value.length);
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } finally {
      area.remove();
    }
    if (!ok) throw new Error('Clipboard copy failed');
  }

  async function copyEmail(button) {
    const text = button.getAttribute('data-copy');
    if (!text) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        await fallbackCopy(text);
      }

      button.classList.add('copied');
      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => button.classList.remove('copied'), 2000);
    } catch (error) {
      console.error('Ошибка копирования:', error);
    }
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest(COPY_SELECTOR);
    if (!button) return;
    event.preventDefault();
    copyEmail(button);
  });
})();
