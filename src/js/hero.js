export function initHero() {
  const video = document.getElementById('hero-video');
  if (video) {
    video.addEventListener('loadeddata', () => video.classList.add('is-ready'));
    video.addEventListener('error', () => video.remove());
  }
}
