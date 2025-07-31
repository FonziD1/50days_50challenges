const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    // activate the panel
    panel.classList.add('active');
    // activate its text
    const txt = panel.querySelector('.text');
    if (txt) txt.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
    const txt = panel.querySelector('.text');
    if (txt) txt.classList.remove('active');
  });
}
