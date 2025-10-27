const tagsEl = document.getElementById('tags');
const textAreaEl = document.getElementById('textarea');

textAreaEl.focus();

textAreaEl.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    // optional: prevent newline flash
    e.preventDefault?.();
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // split on comma or newline, trim, drop empties
  const tags = input
    .split(/,|\n/)
    .map(tag => tag.trim())
    .filter(tag => tag !== '');

  // clear container (correct property name)
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    // safer than innerHTML when inserting plain text
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    if (!randomTag) return; // nothing to highlight yet
    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      if (randomTag) highlightTag(randomTag);
    }, 0);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  if (tags.length === 0) return null;
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
