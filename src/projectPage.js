export function loadProjectPage() {
    const content = document.querySelector('.content');

    const title = document.createElement('h1');
    title.innerHTML = 'Projects';
    title.classList.add('title');

    content.appendChild(title)
}