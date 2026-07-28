(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const d=4,l={chapterName:"Vista Ridge DECA",schoolName:"Vista Ridge High School",district:"Leander ISD"},f=[{name:"Israel Martinez Jr.",email:"israel.martinez@leanderisd.org",role:"Chapter Advisor"},{name:"[Second Advisor Name]",email:"[second.advisor@leanderisd.org]",role:"Chapter Advisor"}],u={interestForm:"#",handbook:"#",decaJapan:"#"},L={title:"DECA Japan",blurb:"A once-in-a-lifetime international trip for Vista Ridge DECA members — details, fundraising, and payment deadlines coming soon.",deadline:"[Payment deadline TBD]"},c=["Welcome to the new VRHS DECA site — under construction, updated often.","General Chapter Meeting — [Date] — Room [###]","District CDC registration opens soon — talk to your officer team."],i="/",h=[{label:"Members",href:`${i}members/`},{label:"Competitors",href:`${i}competitors/`},{label:"Parents",href:`${i}parents/`},{label:"Volunteers",href:`${i}volunteers/`},{label:"Calendar",href:`${i}calendar/`}],v=[{label:"Instagram",href:"#",icon:"instagram"},{label:"Remind",href:"#",icon:"bell"}],g=[{title:"Explore",links:[{label:"Home",href:i},{label:"Members",href:`${i}members/`},{label:"Competitors",href:`${i}competitors/`},{label:"Parents",href:`${i}parents/`},{label:"Volunteers",href:`${i}volunteers/`},{label:"Full Calendar",href:`${i}calendar/`}]},{title:"Resources",links:[{label:"Join DECA",href:`${i}members/#join`},{label:"Study Materials",href:`${i}competitors/#study-materials`},{label:"Officer Applications",href:`${i}members/#leadership`},{label:"Scholarships",href:`${i}parents/#scholarships`},{label:"Chapter Handbook (PDF)",href:u.handbook}]},{title:"Connect",links:[{label:"Contact the Chapter",href:"#contact"},...f.map(t=>({label:`Email ${t.name}`,href:`mailto:${t.email}`})),{label:"DECA Inc.",href:"https://www.deca.org"}]}];function b(t="/"){const o=h.map(n=>{const r=n.href===t;return`<a href="${n.href}"${r?' aria-current="page"':""}>${n.label}</a>`}).join("");return`
  <header class="site-header" id="site-header">
    <div class="nav-inner">
      <a href="/" class="brand-mark" aria-label="Vista Ridge DECA home">
        <img src="/assets/images/vrhs-deca-logo.jpg?v=${d}" alt="Vista Ridge High School Rangers star and horseman crest" width="56" height="56" />
        <span class="brand-mark-text">Vista Ridge<span>DECA</span></span>
      </a>
      <nav class="nav-links" id="nav-links">
        ${o}
        <a href="#contact" class="btn btn-primary nav-mobile-cta" data-contact-open>Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary" data-contact-open>Contact</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`}const y=[{lang:"English",body:["The Leander Independent School District offers Career and Technical Education programs in sixteen different career cluster areas. Admission to these programs is based on interests and aptitude, age appropriateness, and available class space.","It is the policy of Leander Independent School District not to discriminate on the basis of race, color, national origin, sex or handicap in its vocational programs, services or activities as required by Title VI of the Civil Rights Act of 1964, as amended; Title IX of the Education Amendments of 1972; and Section 504 of the Rehabilitation Act of 1973, as amended.","Leander Independent School District will take steps to assure that lack of English language skills will not be a barrier to admission and participation in all educational and vocational programs."]},{lang:"Español",body:["El Distrito Escolar Independiente de Leander ofrece programas de Educación Técnica y Vocacional en dieciséis áreas ocupacionales diferentes. La admisión a estos programas se basa en el interés y la aptitud, la edad apropiada y el espacio disponible en las clases.","Es norma del Distrito Escolar Independiente de Leander no discriminar por motivos de raza, color, origen nacional, sexo o impedimento en sus programas, servicios o actividades vocacionales, conforme lo exige el Título VI de la Ley de Derechos Civiles de 1964, según enmienda; el Título IX de las Enmiendas en la Educación de 1972; y la Sección 504 de la Ley de Rehabilitación de 1973, según enmienda.","El Distrito Escolar Independiente de Leander tomará las medidas necesarias para asegurar que la falta de dominio del idioma inglés no sea un obstáculo para la admisión y participación en todos los programas educativos y vocacionales."]}],m={instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="4"/><circle cx="9" cy="12.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15" cy="12.5" r="1.4" fill="currentColor" stroke="none"/><path d="M8 6 9 3h6l1 3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>'};function E(){const t=g.map(r=>`
    <div class="footer-col">
      <h4>${r.title}</h4>
      <ul>
        ${r.links.map(e=>`<li><a href="${e.href}">${e.label}</a></li>`).join("")}
      </ul>
    </div>`).join(""),o=v.map(r=>`
    <a href="${r.href}" aria-label="${r.label}" target="_blank" rel="noopener">${m[r.icon]||""}</a>`).join(""),n=y.map(r=>`
    <div>
      <strong>${r.lang}</strong>
      ${r.body.map(e=>`<p>${e}</p>`).join("")}
    </div>`).join("");return`
  <footer class="site-footer" id="contact-anchor">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand">
            <img src="/assets/images/vrhs-deca-logo.jpg?v=${d}" alt="Vista Ridge Rangers crest" width="52" height="52" />
            <span class="footer-brand-text">Vista Ridge DECA</span>
          </div>
          <p style="max-width:34ch;font-size:var(--fs-small);">Cedar Park, TX — an official chartered chapter of DECA Inc., preparing emerging leaders and entrepreneurs in business, marketing, finance, hospitality, and management.</p>
          <div class="footer-social">${o}</div>
        </div>
        ${t}
      </div>
      <div class="footer-legal">
        <div class="footer-bottom-row">
          <span>&copy; <span id="footer-year"></span> ${l.chapterName}. Built by students, for students.</span>
          <span>${l.schoolName} &middot; ${l.district}</span>
        </div>
        <details>
          <summary>Non-Discrimination Statement</summary>
          <div class="statement-block">${n}</div>
        </details>
      </div>
    </div>
  </footer>
  <div class="site-credit">
    <a href="https://tjmorales.github.io/portfolio-v5/#top" target="_blank" rel="noopener">Site by Tony Joe Designs</a>
  </div>`}function w(){if(c.length===0)return"";const t=c.map(o=>`<span class="marquee-item"><span class="dot">&bull;</span>${o}</span>`).join("");return`
  <div class="marquee" role="status" aria-label="Chapter announcements">
    <div class="marquee-track">
      <div style="display:flex;">${t}</div>
      <div style="display:flex;" aria-hidden="true">${t}</div>
    </div>
  </div>`}function C(){return`
  <div class="modal-overlay" id="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
    <div class="modal-card">
      <button class="modal-close" id="contact-modal-close" aria-label="Close">${m.close}</button>
      <p class="eyebrow">Get in touch</p>
      <h3 id="contact-modal-title" style="font-family:var(--font-display);font-size:1.8rem;text-transform:uppercase;margin:var(--space-2) 0 var(--space-5);">Reach the Chapter</h3>
      <form id="contact-form">
        <div class="form-field">
          <label for="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required autocomplete="name" />
        </div>
        <div class="form-field">
          <label for="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autocomplete="email" />
        </div>
        <div class="form-field">
          <label for="cf-role">I am a...</label>
          <select id="cf-role" name="role">
            <option>Prospective Member</option>
            <option>Current Member</option>
            <option>Parent / Guardian</option>
            <option>Community Partner / Judge</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-field">
          <label for="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
        <p style="font-size:var(--fs-small);color:var(--color-text-muted);margin-top:var(--space-3);text-align:center;">This form isn't wired up to an inbox yet — for now, reach out directly to the chapter advisor in the footer.</p>
      </form>
    </div>
  </div>`}function p(t=document){const o=t.querySelectorAll("[data-reveal]");if(!o.length)return;if(!("IntersectionObserver"in window)){o.forEach(e=>e.classList.add("is-visible"));return}const n=new Map;o.forEach(e=>{const a=e.closest("[data-reveal-group]");if(a){const s=n.get(a)||[];s.push(e),n.set(a,s)}}),n.forEach(e=>{e.forEach((a,s)=>a.style.setProperty("--reveal-index",s))});const r=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),r.unobserve(a.target))})},{threshold:.15,rootMargin:"0px 0px -8% 0px"});o.forEach(e=>r.observe(e))}const S=Object.freeze(Object.defineProperty({__proto__:null,initReveal:p},Symbol.toStringTag,{value:"Module"}));function A({activePath:t="/"}={}){const o=document.getElementById("header-root"),n=document.getElementById("marquee-root"),r=document.getElementById("footer-root"),e=document.getElementById("modal-root");o&&(o.innerHTML=b(t)),n&&(n.innerHTML=w()),r&&(r.innerHTML=E()),e&&(e.innerHTML=C()),k(),I(),x(),$(),p()}function k(){const t=document.getElementById("site-header");if(!t)return;const o=()=>{t.classList.toggle("is-scrolled",window.scrollY>12)};o(),window.addEventListener("scroll",o,{passive:!0})}function I(){const t=document.getElementById("nav-toggle"),o=document.getElementById("nav-links");!t||!o||(t.addEventListener("click",()=>{const n=o.classList.toggle("is-open");t.setAttribute("aria-expanded",String(n))}),o.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{o.classList.remove("is-open"),t.setAttribute("aria-expanded","false")})}))}function x(){const t=document.getElementById("contact-modal");if(!t)return;const o=document.getElementById("contact-modal-close"),n=document.getElementById("contact-form"),r=a=>{var s;a&&a.preventDefault(),t.classList.add("is-open"),document.body.style.overflow="hidden",(s=t.querySelector("input"))==null||s.focus()},e=()=>{t.classList.remove("is-open"),document.body.style.overflow=""};document.querySelectorAll("[data-contact-open]").forEach(a=>{a.addEventListener("click",r)}),o==null||o.addEventListener("click",e),t.addEventListener("click",a=>{a.target===t&&e()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.classList.contains("is-open")&&e()}),n==null||n.addEventListener("submit",a=>{a.preventDefault(),n.innerHTML=`<p style="font-weight:700;">Thanks — this form isn't connected yet, so nothing was sent. Please email the advisor directly for now (see footer).</p>`})}function $(){const t=document.getElementById("footer-year");t&&(t.textContent=new Date().getFullYear())}export{u as E,m as I,L as J,A as m,S as r};
