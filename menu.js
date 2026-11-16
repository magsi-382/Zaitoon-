// Draws the menu from menu-data.js and connects the Add buttons to the cart.
const fmt=n=>"Rs "+Number(n).toLocaleString("en-US");
const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const slug=t=>t.toLowerCase().replace(/[^a-z]+/g,"-");
const ITEMS=[];
let chips="",cats="";
for(const [t,top,items] of M){
  chips+=`<a href="#m-${slug(t)}">${t}</a>`;
  cats+=`<div class="cat" id="m-${slug(t)}"><h3>${t}</h3>`+(top?`<p class="top">${top}</p>`:"")+"<ul>"+items.map(i=>{
    const [n,p,note]=i.split("|");
    const id=ITEMS.push({n,p:+p||0,note:note||""})-1;
    return `<li><span class="n">${esc(n)}${note?`<small>${esc(note)}</small>`:""}</span><span class="p">${p?fmt(p):"Ask"}<button type="button" class="add" data-i="${id}" aria-label="Add ${esc(n)} to order"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Add</button></span></li>`;
  }).join("")+"</ul></div>";
}
document.getElementById("chips").innerHTML=chips;
const box=document.getElementById("cats");
box.innerHTML=cats;
box.addEventListener("click",e=>{
  const b=e.target.closest(".add");if(!b)return;
  window.Cart.add(ITEMS[b.dataset.i]);
});
if(location.hash){const t=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t)t.scrollIntoView();}
