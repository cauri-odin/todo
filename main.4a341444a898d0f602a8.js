(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(n){t(1,arguments);var o=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===o?new Date(n.getTime()):"number"==typeof n||"[object Number]"===o?new Date(n):("string"!=typeof n&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t,e){return e instanceof Date?e.toJSON():e}function s(e,o){switch(e){case"":return o.map((t=>t));case"date":return function(e){if(t(1,arguments),"string"==typeof e){var o=e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return o?new Date(Date.UTC(+o[1],+o[2]-1,+o[3],+o[4]-(+o[9]||0)*("-"==o[8]?-1:1),+o[5]-(+o[10]||0)*("-"==o[8]?-1:1),+o[6],+((o[7]||"0")+"00").substring(0,3))):new Date(NaN)}return n(e)}(o);default:return o}}var r,a,i,c=function(t,e,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(t):o?o.value:e.get(t)};r=new WeakSet,a=function(){return!!localStorage.getItem("tasks")},i=function(t){localStorage.setItem("tasks",JSON.stringify([])),localStorage.setItem("projects",JSON.stringify(t))};const l='<div class="row align-items-start justify-content-between"> <span class="col-1 pt-1"> <input type="checkbox" class="form-check-input"> </span> <div class="col"> <div id="task__title" class="fw-semibold"></div> <div id="task__duedate" class="text-secondary"></div> <div id="task__description" class="mb-3"></div> </div> <span class="col-1 pt-1" id="task__button-group"> <button class="btn btn-light">x</button> </span> </div>';function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function u(e){const o=document.createElement("li");return o.classList.add("list-group-item"),o.setAttribute("data-id",""+e.id),o.innerHTML=l,o.querySelector("#task__title").textContent=e.title,o.querySelector("#task__duedate").textContent=function(e){return function(e){if(t(1,arguments),!function(e){return t(1,arguments),e instanceof Date||"object"===d(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var o=n(e);return!isNaN(Number(o))}(e.date)?e.date.toLocaleString([],{year:"2-digit",month:"2-digit",day:"2-digit",hour:(o=e.hasTime)?"2-digit":void 0,minute:o?"2-digit":void 0}):"";var o}(e),o.querySelector("#task__description").textContent=e.description,o.querySelector("button").addEventListener("click",(()=>function(t){const e=k.getTasks(),n=e.findIndex((e=>e.id===t));e.splice(n,1),k.setTasks(e),D()}(e.id))),o}const m='<form method="dialog" class="border p-4 rounded-4"> <div class="mb-3"> <span class="h3 fw-bold">New Project</span> </div> <div class="form-floating mb-3"> <input type="text" class="form-control" id="new-project__title" placeholder="Title"> <label class="form-label" for="new-project__title">Title</label> </div> <div> <button class="btn btn-success" id="new-project__confirm-btn" value="add">Add task</button> <button class="btn btn-outline-secondary">Cancel</button> </div> </form>';const p='<form method="dialog" class="border p-4 rounded-4"> <div class="mb-3"> <span class="h3 fw-bold">New Task</span> </div> <div class="form-floating mb-3"> <input type="text" class="form-control" id="new-task__title" placeholder="Title"> <label class="form-label" for="new-task__title">Title</label> </div> <div class="input-group"> <span class="form-floating mb-3"> <input type="date" class="form-control" id="new-task__date"> <label class="form-label" for="new-task__date">Due Date</label> </span> <span class="form-floating mb-3"> <input type="time" class="form-control" id="new-task__time"> <label class="form-label" for="new-task__time">Time</label> </span> </div> <div class="form-floating mb-3"> <div clasS="form-floating"></div> <textarea class="form-control" id="new-task__description" placeholder="Description" style="height:8rem"></textarea> <label class="form-label" for="new-task__description">Description</label> </div> <div> <button class="btn btn-success" id="new-task__confirm-btn" value="add">Add task</button> <button class="btn btn-outline-secondary">Cancel</button> </div> </form>';function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}const y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let g;const h=new Uint8Array(16);function v(){if(!g&&(g="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(h)}const w=[];for(let t=0;t<256;++t)w.push((t+256).toString(16).slice(1));const S=function(t,e,n){if(y.randomUUID&&!e&&!t)return y.randomUUID();const o=(t=t||{}).random||(t.rng||v)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=o[t];return e}return function(t,e=0){return(w[t[e+0]]+w[t[e+1]]+w[t[e+2]]+w[t[e+3]]+"-"+w[t[e+4]]+w[t[e+5]]+"-"+w[t[e+6]]+w[t[e+7]]+"-"+w[t[e+8]]+w[t[e+9]]+"-"+w[t[e+10]]+w[t[e+11]]+w[t[e+12]]+w[t[e+13]]+w[t[e+14]]+w[t[e+15]]).toLowerCase()}(o)};function _(e){const o=document.createElement("button");o.id="new-task__btn",o.classList.add("btn"),o.classList.add("btn-success"),o.innerHTML="Add&nbsp;New&nbsp;Task",o.type="button";const s=function(e){const o=document.createElement("dialog");return o.innerHTML=p,o.style.width="min(100vw, 28rem)",o.classList.add("border","rounded-4"),o.addEventListener("close",(()=>function(e,o){const s=e.querySelector("#new-task__title"),r=e.querySelector("#new-task__description"),a=e.querySelector("#new-task__date"),i=e.querySelector("#new-task__time");if("add"===e.returnValue){const e=s.value,{date:c,hasTime:l}=function(e,o){const s=!!o;let r=new Date(e);if(s){const[e,s]=o.split(":").map((t=>+t));r=function(e,o){if(t(2,arguments),"object"!==b(o)||null===o)throw new RangeError("values parameter must be an object");var s=n(e);return isNaN(s.getTime())?new Date(NaN):(null!=o.year&&s.setFullYear(o.year),null!=o.month&&(s=function(e,o){t(2,arguments);var s=n(e),r=f(o),a=s.getFullYear(),i=s.getDate(),c=new Date(0);c.setFullYear(a,r,15),c.setHours(0,0,0,0);var l=function(e){t(1,arguments);var o=n(e),s=o.getFullYear(),r=o.getMonth(),a=new Date(0);return a.setFullYear(s,r+1,0),a.setHours(0,0,0,0),a.getDate()}(c);return s.setMonth(r,Math.min(i,l)),s}(s,o.month)),null!=o.date&&s.setDate(f(o.date)),null!=o.hours&&s.setHours(f(o.hours)),null!=o.minutes&&s.setMinutes(f(o.minutes)),null!=o.seconds&&s.setSeconds(f(o.seconds)),null!=o.milliseconds&&s.setMilliseconds(f(o.milliseconds)),s)}(r,{hours:e,minutes:s})}return{date:r,hasTime:s}}(a.value,i.value);e&&function(t){const e=k.getTasks();e.push(t),k.setTasks(e),D()}({id:S(),title:e,project:o,description:r.value,date:c,hasTime:l})}s.value="",a.value=""}(o,e))),o}(e);return document.body.appendChild(s),o.addEventListener("click",(()=>s.showModal())),o}let k,T;function j(t){T=t,D()}function D(){!function(t,e){const n=document.querySelector("#project-selection-container");n.innerHTML="",n.appendChild(function(t,e){const n=document.createElement("div");n.classList.add("input-group");const o=document.createElement("span");return o.classList.add("input-group-text"),o.textContent="Project",n.appendChild(o),n.appendChild(function(t,e){const n=document.createElement("select");n.classList.add("form-select"),n.id="project-selection",n.style.minWidth="10rem";for(const o of t){const t=document.createElement("option");t.value=o,t.textContent=o,o===e&&(t.selected=!0),n.appendChild(t)}return n.addEventListener("change",(()=>{j(n.value)})),n}(t,e)),n.appendChild(function(){const t=function(){const t=document.createElement("dialog");return t.innerHTML=m,t.style.width="min(100vw, 28rem)",t.classList.add("border","rounded-4"),t.addEventListener("close",(()=>function(t){const e=document.querySelector("#new-project__title");"add"===t.returnValue&&function(t){const e=k.getProjects();e.push(t),k.setProjects(e),D()}(e.value),e.value=""}(t))),t}();document.body.appendChild(t);const e=document.createElement("button");return e.classList.add("btn","btn-secondary"),e.type="button",e.textContent="+",e.addEventListener("click",(()=>t.showModal())),e}()),n}(t,e));const o=document.querySelector("#new-task-container");o.innerHTML="",o.appendChild(_(e))}(k.getProjects(),T),function(t){const e=document.querySelector("main"),n=function(t){const e=document.createElement("ul");e.classList.add("mb-4","list-group","list-group-flush"),t.length>0&&e.classList.add("border-top","border-bottom");for(const n of t)e.appendChild(u(n));return e}(t);e.innerHTML="",e.appendChild(n)}(k.getTasks(T))}T="Inbox",k=new class{constructor(t){r.add(this),c(this,r,"m",a).call(this)||c(this,r,"m",i).call(this,t)}getProjects(){const t=localStorage.getItem("projects");return JSON.parse(t)}setProjects(t){localStorage.setItem("projects",JSON.stringify(t))}getTasks(t=""){const e=(n=localStorage.getItem("tasks"),JSON.parse(n,s));var n;return t?e.filter((e=>e.project===t)):e}setTasks(t){localStorage.setItem("tasks",function(t){return JSON.stringify(t,o)}(t))}}([T]),D()})();