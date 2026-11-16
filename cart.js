// Shared order cart. Loads on every page, remembers the order while the customer
// moves between pages, and sends the finished order to WhatsApp.
(function(){
const WA="923062939049";            // restaurant WhatsApp number, country code first, no + or spaces
const KEY="zaitoon-cart";
const fmt=n=>"Rs "+Number(n).toLocaleString("en-US");
const esc=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const $=id=>document.getElementById(id);
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
let cart=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(cart))}catch(e){}}

document.body.insertAdjacentHTML("beforeend",`
<button type="button" id="cartbar" class="btn main" hidden></button>
<dialog id="cart" aria-labelledby="ct">
  <div class="cin">
    <div class="chead"><h3 id="ct">Your order</h3><button type="button" class="x" id="cx" aria-label="Close">×</button></div>
    <ul id="clines"></ul>
    <p class="tot"><span>Total</span><span id="ctot"></span></p>
    <p class="hint" id="chint"></p>
    <label>Order type<select id="otype"><option>Delivery</option><option>Pickup</option><option>Dine-in</option></select></label>
    <label>Your name<input id="oname" autocomplete="name"></label>
    <label>Phone number<input id="ophone" type="tel" autocomplete="tel"></label>
    <label id="addrl">Delivery address<textarea id="oaddr" rows="2" autocomplete="street-address"></textarea></label>
    <label>Notes (for example half or full, spice level)<textarea id="onote" rows="2"></textarea></label>
    <p class="err" id="oerr" role="alert"></p>
    <button type="button" class="btn main" id="osend">Send order on WhatsApp</button>
    <p class="hint">Your order opens in WhatsApp and you press send. The restaurant confirms the final price, delivery charge and timing.</p>
  </div>
</dialog>`);

const bar=$("cartbar"),dlg=$("cart");
const cnt=()=>Object.values(cart).reduce((a,l)=>a+l.q,0);
const sum=()=>Object.values(cart).reduce((a,l)=>a+l.p*l.q,0);

function render(){
  const c=cnt();
  bar.hidden=c===0;
  bar.textContent="View order · "+c+(c===1?" item":" items")+(sum()?" · "+fmt(sum()):"");
  let h="",hf=false,unp=false;
  for(const [k,l] of Object.entries(cart)){
    if(l.note==="Half, full")hf=true;if(!l.p)unp=true;
    h+=`<li><span>${esc(l.n)}${l.note?`<small>${esc(l.note)}</small>`:""}</span><span class="q"><button type="button" data-k="${esc(k)}" data-d="-1" aria-label="Remove one ${esc(l.n)}">−</button><b>${l.q}</b><button type="button" data-k="${esc(k)}" data-d="1" aria-label="Add one ${esc(l.n)}">+</button></span><span>${l.p?fmt(l.p*l.q):"Ask"}</span></li>`;
  }
  $("clines").innerHTML=h;
  $("ctot").textContent=fmt(sum());
  $("chint").textContent=(hf?"For karahi and handi, write half or full in the notes. ":"")+(unp?"Items marked Ask are priced by the restaurant and not in the total.":"");
  if(c===0&&dlg.open)dlg.close();
}

window.Cart={add(item){
  const k=item.n;
  if(cart[k])cart[k].q++;else cart[k]={n:item.n,p:item.p,note:item.note,q:1};
  save();render();
}};

$("clines").addEventListener("click",e=>{
  const b=e.target.closest("button[data-d]");if(!b)return;
  const k=b.dataset.k;if(!cart[k])return;
  cart[k].q+=Number(b.dataset.d);
  if(cart[k].q<=0)delete cart[k];
  save();render();
});
bar.onclick=()=>dlg.showModal();
$("cx").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$("otype").onchange=()=>{$("addrl").hidden=$("otype").value!=="Delivery"};

$("osend").onclick=()=>{
  const t=$("otype").value,name=$("oname").value.trim(),ph=$("ophone").value.trim(),ad=$("oaddr").value.trim(),nt=$("onote").value.trim();
  const err=m=>{$("oerr").textContent=m};
  if(!cnt())return err("Add at least one dish.");
  if(!name)return err("Enter your name.");
  if(ph.replace(/\D/g,"").length<10)return err("Enter a phone number we can call.");
  if(t==="Delivery"&&!ad)return err("Enter your delivery address.");
  err("");
  let m="Hello Zaitoon, I would like to place an order.\n\nOrder type: "+t+"\nName: "+name+"\nPhone: "+ph+(t==="Delivery"?"\nAddress: "+ad:"")+"\n\nItems:\n";
  for(const l of Object.values(cart)){
    m+=l.q+" x "+l.n+(l.note&&l.note!=="Half, full"?" ("+l.note+")":"")+(l.p?" - "+fmt(l.p*l.q):" - price on request")+"\n";
  }
  m+="\nTotal: "+fmt(sum())+(Object.values(cart).some(l=>!l.p)?" (plus items with price on request)":"")+(nt?"\nNotes: "+nt:"");
  const url="https://wa.me/"+WA+"?text="+encodeURIComponent(m);
  if(!window.open(url,"_blank"))location.href=url;
};
render();
})();
