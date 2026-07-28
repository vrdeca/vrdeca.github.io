import{J as u,E as g,m as I}from"./layout-ChoxWMkJ.js";import{E as L,T}from"./events-CdduMTY3.js";function C(){const t=document.getElementById("hero-video");if(!t)return;const i=()=>t.classList.add("is-ready");t.readyState>=2?i():t.addEventListener("loadeddata",i,{once:!0}),t.addEventListener("ended",()=>{t.currentTime=0,t.play().catch(()=>{})}),t.addEventListener("error",()=>t.remove())}const m="vrhs-deca-coin-loader-seen",E=3,b=350,q=700,A=E*b+q+2500;function w(){const t=document.getElementById("coin-loader"),i=document.getElementById("coin-loader-coin"),s=document.getElementById("coin-loader-count"),n=document.getElementById("hero-coin-slot");if(!t||!i||!s||!n){t==null||t.remove();return}const o=()=>{i.style.transform="",i.style.transition="",n.appendChild(i),t.remove()};if(sessionStorage.getItem(m)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){o();return}sessionStorage.setItem(m,"1");const d=setTimeout(o,A);let r=E;s.textContent=String(r);const p=setInterval(()=>{r-=1,r<=0?(clearInterval(p),l()):s.textContent=String(r)},b);function l(){s.style.opacity="0";const e=i.getBoundingClientRect(),a=n.getBoundingClientRect(),f=a.width/e.width,S=a.left+a.width/2-(e.left+e.width/2),$=a.top+a.height/2-(e.top+e.height/2);i.style.transition=`transform ${q}ms cubic-bezier(0.65,0,0.35,1)`,t.style.transition="opacity 500ms ease 200ms",i.offsetWidth,i.style.transform=`translate(${S}px, ${$}px) scale(${f})`,t.style.opacity="0",t.style.pointerEvents="none",i.addEventListener("transitionend",()=>{clearTimeout(d),o()},{once:!0})}}const y={district:"linear-gradient(135deg,#2a0a0e,#5c1019)",state:"linear-gradient(135deg,#1a0507,#8c1522)",icdc:"linear-gradient(135deg,#0a0a0b,#cb1a26)"};function M(t){const i=new Date(`${t.date}T00:00:00`),s={month:"short",day:"numeric"};if(t.endDate&&t.endDate!==t.date){const n=new Date(`${t.endDate}T00:00:00`);return`${i.toLocaleDateString("en-US",s)} – ${n.toLocaleDateString("en-US",{...s,year:"numeric"})}`}return i.toLocaleDateString("en-US",{...s,year:"numeric"})}function B(t){if(!t)return;const i=L.filter(s=>s.featured);t.innerHTML=i.map(s=>`
    <a class="event-card" href="/calendar/#${s.id}" data-reveal>
      <div style="position:absolute;inset:0;background:${y[s.tier]||y.district};"></div>
      <div class="event-card-scrim"></div>
      <div class="event-card-body">
        <span class="event-card-tag">${T[s.tier]||s.tier}</span>
        <h3 class="event-card-title">${s.shortTitle}</h3>
        <div class="event-card-meta">
          <span>${M(s)}</span>
          <span>${s.location}</span>
        </div>
      </div>
    </a>`).join("")}const c=[{year:2010,qualifiers:9,finalists:0},{year:2011,qualifiers:13,finalists:0},{year:2012,qualifiers:12,finalists:0},{year:2013,qualifiers:17,finalists:0},{year:2014,qualifiers:24,finalists:3},{year:2015,qualifiers:30,finalists:2},{year:2016,qualifiers:34,finalists:11},{year:2017,qualifiers:26,finalists:11},{year:2018,qualifiers:43,finalists:12},{year:2019,qualifiers:44,finalists:21},{year:2020,qualifiers:44,finalists:0},{year:2021,qualifiers:35,finalists:26},{year:2022,qualifiers:49,finalists:18},{year:2023,qualifiers:32,finalists:23},{year:2024,qualifiers:28,finalists:21},{year:2025,qualifiers:38,finalists:3},{year:2026,qualifiers:27,finalists:7}],h=260;function _(t){if(!t)return;const i=Math.max(...c.map(e=>Math.max(e.qualifiers,e.finalists))),s=c.map(e=>{const a=Math.round(e.qualifiers/i*h),f=Math.round(e.finalists/i*h);return`
      <div class="chart-col">
        <div class="chart-bars">
          <div class="bar qual" style="height:${a}px;" title="${e.qualifiers} ICDC Qualifiers">
            <span class="bar-value">${e.qualifiers}</span>
          </div>
          <div class="bar fin" style="height:${f}px;" title="${e.finalists} ICDC Finalists">
            <span class="bar-value">${e.finalists||""}</span>
          </div>
        </div>
        <span class="chart-year">'${String(e.year).slice(2)}</span>
      </div>`}).join("");t.innerHTML=`<div class="chart" id="icdc-chart">${s}</div>`;const n=t.querySelector("#icdc-chart"),o=c.reduce((e,a)=>e+a.qualifiers,0),d=c.reduce((e,a)=>e+a.finalists,0),r=c.reduce((e,a)=>a.qualifiers>e.qualifiers?a:e);if(document.querySelectorAll("[data-stat]").forEach(e=>{const a=e.dataset.stat;a==="total-qualifiers"&&(e.textContent=`${o}+`),a==="total-finalists"&&(e.textContent=`${d}+`),a==="best-year"&&(e.textContent=r.year)}),!("IntersectionObserver"in window)){n.classList.add("is-visible");return}const l=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(n.classList.add("is-visible"),l.unobserve(a.target))})},{threshold:.3});l.observe(n)}function x(t){t&&(t.innerHTML=`
    <section class="japan-trip-section" id="japan-trip">
      <div class="container japan-trip-inner">
        <div class="japan-trip-copy" data-reveal>
          <p class="eyebrow" style="color:var(--color-red-400);">Special trip</p>
          <h2>${u.title}</h2>
          <p class="japan-trip-blurb">${u.blurb}</p>
          <div class="japan-trip-meta">
            <span>${u.deadline}</span>
          </div>
          <div class="japan-trip-actions">
            <a href="${g.decaJapan}" class="btn btn-primary" target="_blank" rel="noopener">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#contact" class="btn btn-ghost" data-contact-open>Ask About Fundraising</a>
          </div>
        </div>
        <div class="japan-trip-mark" data-reveal aria-hidden="true">
          <span>DECA</span>
          <span>JAPAN</span>
        </div>
      </div>
    </section>`)}B(document.getElementById("calendar-preview-grid"));_(document.getElementById("icdc-chart-wrap"));x(document.getElementById("japan-trip-root"));I({activePath:"/"});C();w();const v=document.getElementById("interest-form-link");v&&(v.href=g.interestForm);
