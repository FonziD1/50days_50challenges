const tagsEl = document.getElementById('tags');
const textAreaEl = document.getElementById('textarea');

textAreaEl.focus();

textAreaEl.addEventListener( 'keyup', (e) => {
    createTags(e.target.valuye);
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
}