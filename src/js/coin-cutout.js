// Real-time chroma-key: the source video has a plain black background
// (no browser reliably supports alpha-channel WebM across the board), so we
// draw each frame to a canvas and zero out near-black pixels ourselves.
// Throttled to the source's own ~24fps and rendered small — this runs on
// modest school-issued laptops too, not just dev machines.
const THRESHOLD = 46; // brightness at/below this is fully transparent
const FEATHER = 34; // soft ramp width above THRESHOLD, avoids a hard cutout edge
const RENDER_SIZE = 220;
const FRAME_INTERVAL_MS = 1000 / 24;

export function initCoinCutout() {
  const container = document.querySelector('.hero-coin');
  const video = container?.querySelector('video');
  if (!container || !video) return;

  // Loop manually — see hero.js for why native `loop` is avoided here too.
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  const canvas = document.createElement('canvas');
  canvas.width = RENDER_SIZE;
  canvas.height = RENDER_SIZE;
  canvas.setAttribute('aria-hidden', 'true');
  // Appended after the video so it paints on top (see hero.css) — the video
  // itself stays visibility:visible so Safari doesn't pause it.
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  let lastDraw = 0;
  let rafId = null;

  function draw(now) {
    rafId = requestAnimationFrame(draw);
    if (now - lastDraw < FRAME_INTERVAL_MS) return;
    lastDraw = now;
    if (video.readyState < 2) return;

    ctx.drawImage(video, 0, 0, RENDER_SIZE, RENDER_SIZE);
    const frame = ctx.getImageData(0, 0, RENDER_SIZE, RENDER_SIZE);
    const data = frame.data;
    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (brightness <= THRESHOLD) {
        data[i + 3] = 0;
      } else if (brightness < THRESHOLD + FEATHER) {
        data[i + 3] = Math.round(((brightness - THRESHOLD) / FEATHER) * 255);
      }
    }
    ctx.putImageData(frame, 0, 0);
  }

  // Pause the loop when the tab/section isn't visible to avoid burning CPU.
  const io = new IntersectionObserver((entries) => {
    const visible = entries[0]?.isIntersecting;
    if (visible && rafId === null) {
      rafId = requestAnimationFrame(draw);
    } else if (!visible && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
  io.observe(container);
}
