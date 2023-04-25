(()=>{"use strict";(()=>{const e=()=>{const e=window.location.search;return new URLSearchParams(e)},t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,o=(e,t,o)=>{const a=e.nextElementSibling;o?(a.textContent=t.success,a.classList.remove("error"),a.classList.add("success")):(a.textContent=t.error,a.classList.remove("success"),a.classList.add("error"))},a=e=>{const a=""!=e.value;return a?(e=>{const a=!!e.value.toLowerCase().match(t);return o(e,{success:"This email is valid!",error:"The email is not valid."},a),!!a})(e):(o(e,{success:"Thanks for filling your email.",error:"The email field is required."},a),!1)},n=(e,t,o)=>{((e,t)=>{e.classList.add("hidden"),t.classList.add("hidden")})(t,o),e.value="",e.nextElementSibling.textContent=""},l={keys:["category","order"],values:["all","most-popular"]},r=t=>{(e=>{const t=e.querySelector('[data-element="handle"');t.onclick=o=>{o.preventDefault(),[t,...t.children].forEach((a=>{o.target===a&&(e.classList.toggle("opened"),t.children[1].classList.toggle("opened"))}))}})(t),(t=>{const o=t.querySelector('[data-element="content"'),a=t.getAttribute("data-name");o.onclick=t=>{t.preventDefault(),[...o.children].forEach((o=>{if(t.target===o){const t=o.getAttribute("data-value");window.location.replace(((t,o)=>{const a=window.location.href.split("?")[0],n=e();let r=[],s="?";return l.keys.forEach(((e,a)=>{r[a]=e===t?o:n.has(e)?n.get(e):l.values[a]})),r.forEach(((e,t)=>{s+=`${l.keys[t]}=${e}&`})),s=s.slice(0,-1),a+s})(a,t))}}))}})(t),window.location.href.includes("?")&&(t=>{const o=e(),a=t.querySelector('[data-element="handle"').children[0];[...t.querySelector('[data-element="content"').children].forEach((e=>{e.getAttribute("data-value")===o.get(t.getAttribute("data-name"))&&(a.textContent=e.getAttribute("data-text"))}))})(t)};var s;(function(e){const t=e.querySelector('[data-element="nav-burger"]'),o=e.querySelector('[data-element="nav-menu"]'),a=[t,...t.children];e.onclick=n=>{a.forEach((a=>{n.target===a&&(t.classList.toggle("open"),o.classList.toggle("open"),0===window.scrollY&&e.classList.toggle("white"))}))}})(s=document.querySelector('[data-component="navbar"]')),function(e){["shop","contact-us","register-login","blog"].forEach((t=>{(()=>{const e=window.location.href;return e.split("/")[e.split("/").length-1].split(".")[0]})()===t&&e.querySelector(`[data-page="${t}"]`).classList.add("current")}))}(s),window.onscroll=()=>{window.scrollY>0?s.classList.add("white"):s.classList.remove("white")};const c=document.querySelectorAll('[data-component="category-card"]');null!=c&&c.forEach((e=>{(e=>{const t=e.querySelector('[data-element="ovelay"]'),o=e.querySelector('[data-element="background"]');e.onmouseover=e=>{t.classList.add("hovering"),o.classList.add("hovering")}})(e),(e=>{const t=e.querySelector('[data-element="ovelay"]'),o=e.querySelector('[data-element="background"]');e.onmouseout=e=>{t.classList.remove("hovering"),o.classList.remove("hovering")}})(e)}));const i=document.querySelectorAll('[data-component="slider"]');null!=i&&i.forEach((e=>{(e=>{let t,o,a=0,n=0;const l=e=>{e.style.transform=`translateX(${n}px)`},r=e=>{e.classList.remove("disabled")},s=e=>{e.classList.add("disabled")},c=e=>{e.forEach(((e,t)=>{e.classList.remove("active"),e.setAttribute("data-is-active","false"),t===a&&(e.classList.add("active"),e.setAttribute("data-is-active","true"))}))},i=e.querySelector('[data-element="slider-mask"]'),d=i.children,u=e.querySelectorAll('[data-element="dot"]'),m=e.querySelector('[data-element="button-previous"]'),h=e.querySelector('[data-element="button-next"]');t=d.length-1,((e,t,i,d)=>{const u=[i,...i.children];i.onclick=m=>{m.preventDefault(),o=t[0].offsetWidth+32,n+=o,u.forEach((t=>{m.target===t&&(l(e),a--,r(i.nextElementSibling),0===a&&s(i),c(d))}))}})(i,d,m,u),((e,i,d,u)=>{const m=[d,...d.children];d.onclick=h=>{h.preventDefault(),o=i[0].offsetWidth+32,n-=o,m.forEach((o=>{h.target===o&&(l(e),a++,r(d.previousElementSibling),a===t&&s(d),c(u))}))}})(i,d,h,u),window.onresize=e=>{a=0,n=0,l(i),c(u),s(m),r(h)}})(e)}));const d=document.querySelector('[data-component="newsletter-form"]'),u=document.querySelector('[data-component="newsletter-modal"]'),m=document.querySelector('[data-component="overlay"]');null!=d&&((e,t,o)=>{const l=e.querySelector("#email");l.onchange=e=>{a(l)},e.onsubmit=e=>{e.preventDefault(),a(l)&&((e,t)=>{e.classList.remove("hidden"),t.classList.remove("hidden")})(t,o)},t.querySelector("a").onclick=e=>{e.preventDefault(),n(l,t,o)},o.onclick=e=>{e.preventDefault(),n(l,t,o)}})(d,u,m);const h=document.querySelectorAll('[data-element="drop-down"]');null!=h&&h.forEach((e=>{r(e)}))})()})();