const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/layout-ChoxWMkJ.js","assets/layout-DSYny25w.css"])))=>i.map(i=>d[i]);
import{I as h,m as b}from"./layout-ChoxWMkJ.js";import{E as g,T as w}from"./events-CdduMTY3.js";const S="modulepreload",D=function(n){return"/"+n},$={},L=function(s,t,o){let r=Promise.resolve();if(t&&t.length>0){let c=function(a){return Promise.all(a.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),m=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=c(t.map(a=>{if(a=D(a),a in $)return;$[a]=!0;const d=a.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const e=document.createElement("link");if(e.rel=d?"stylesheet":S,d||(e.as="script"),e.crossOrigin="",e.href=a,m&&e.setAttribute("nonce",m),document.head.appendChild(e),d)return new Promise((v,p)=>{e.addEventListener("load",v),e.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function l(c){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c}return r.then(c=>{for(const i of c||[])i.status==="rejected"&&l(i.reason);return s().catch(l)})},k=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],M=["January","February","March","April","May","June","July","August","September","October","November","December"];function E(){return[...g].sort((n,s)=>new Date(n.date)-new Date(s.date))}function T(n){const s=E().map(t=>{const o=new Date(`${t.date}T00:00:00`);return`
    <div class="event-list-row" id="${t.id}" data-reveal>
      <div class="date-badge">
        <span class="month">${o.toLocaleDateString("en-US",{month:"short"})}</span>
        <span class="day">${o.getDate()}</span>
      </div>
      <div class="event-list-info">
        <div class="event-list-tags"><span class="event-list-tag">${w[t.tier]||t.tier}</span></div>
        <h3>${t.title}</h3>
        ${t.blurb?`<p style="color:var(--color-text-muted);margin-bottom:var(--space-3);">${t.blurb}</p>`:""}
        <div class="event-list-meta">
          ${t.time?`<span>${h.clock}${t.time}</span>`:""}
          <span>${h.pin}${t.location||"TBD"}</span>
        </div>
      </div>
    </div>`}).join("");n.innerHTML=`<div class="event-list">${s}</div>`}function P(){const n=new Map;return g.forEach(s=>{const t=s.date,o=n.get(t)||[];o.push(s),n.set(t,o)}),n}function f(n,s){const t=s.getFullYear(),o=s.getMonth(),l=new Date(t,o,1).getDay(),c=new Date(t,o+1,0).getDate(),i=new Date(t,o,0).getDate(),m=P(),a=[];for(let e=0;e<l;e++){const v=i-l+e+1;a.push({dayNum:v,outside:!0})}for(let e=1;e<=c;e++)a.push({dayNum:e,outside:!1,key:`${t}-${String(o+1).padStart(2,"0")}-${String(e).padStart(2,"0")}`});for(;a.length%7!==0;)a.push({dayNum:a.length-(l+c)+1,outside:!0});const d=k.map(e=>`<div class="cal-grid-dow">${e}</div>`).join(""),u=a.map(e=>{const p=(e.key?m.get(e.key)||[]:[]).map(y=>`<div class="cal-event-pill" title="${y.title}">${y.shortTitle}</div>`).join("");return`<div class="cal-cell${e.outside?" is-outside":""}"><span class="cell-num">${e.dayNum}</span>${p}</div>`}).join("");n.innerHTML=`
    <div class="cal-grid-head">
      <button class="cal-nav-btn" id="cal-prev" aria-label="Previous month">${h.chevronLeft}</button>
      <h3>${M[o]} ${t}</h3>
      <button class="cal-nav-btn" id="cal-next" aria-label="Next month">${h.chevronRight}</button>
    </div>
    <div class="cal-grid">${d}${u}</div>`,n.querySelector("#cal-prev").addEventListener("click",()=>{s.setMonth(s.getMonth()-1),f(n,s)}),n.querySelector("#cal-next").addEventListener("click",()=>{s.setMonth(s.getMonth()+1),f(n,s)})}function N(){const n=document.getElementById("event-list-view"),s=document.getElementById("cal-grid-view"),t=document.querySelectorAll(".view-toggle button");if(!n||!s)return;T(n);const o=g.length?new Date(`${E()[0].date}T00:00:00`):new Date;return f(s,o),t.forEach(r=>{r.addEventListener("click",()=>{t.forEach(c=>c.classList.remove("is-active")),r.classList.add("is-active");const l=r.dataset.view;n.style.display=l==="list"?"block":"none",s.style.display=l==="grid"?"block":"none"})}),L(async()=>{const{initReveal:r}=await import("./layout-ChoxWMkJ.js").then(l=>l.r);return{initReveal:r}},__vite__mapDeps([0,1])).then(({initReveal:r})=>r(n))}b({activePath:"/calendar/"});N();
