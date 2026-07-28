export function initHero() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  const markReady = () => video.classList.add('is-ready');

  // On a fast connection/CDN, the video can finish loading before this
  // script even runs (module scripts execute after the browser has already
  // started preloading media from the parsed HTML) — readyState >= 2 means
  // 'loadeddata' already fired and we'd never hear about it otherwise.
  if (video.readyState >= 2) {
    markReady();
  } else {
    video.addEventListener('loadeddata', markReady, { once: true });
  }

  video.addEventListener('error', () => video.remove());
}
