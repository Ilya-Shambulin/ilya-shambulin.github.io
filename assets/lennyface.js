(() => {
  const MAX_WIDTH = 720;
  const MAX_DISTANCE = 3;

  function updatePupils(event) {
    if (window.innerWidth <= MAX_WIDTH) return;

    const lennyFace = document.querySelector('.lenny-face');
    if (!lennyFace) return;

    const style = getComputedStyle(lennyFace);
    if (style.display === 'none' || style.visibility === 'hidden') return;

    document.querySelectorAll('.pupil').forEach((pupil) => {
      const rect = pupil.getBoundingClientRect();
      const pupilX = rect.left + rect.width / 2;
      const pupilY = rect.top + rect.height / 2;
      const angle = Math.atan2(event.clientY - pupilY, event.clientX - pupilX);
      const moveX = Math.cos(angle) * MAX_DISTANCE;
      const moveY = Math.sin(angle) * MAX_DISTANCE;
      pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }

  window.addEventListener('pointermove', updatePupils, { passive: true });
})();
