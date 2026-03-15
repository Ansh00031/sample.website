/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const MENU = {
  starters:{label:"Starters",emoji:"🥗",desc:"Light bites to kickstart your meal",items:[
    {id:1,name:"Paneer Tikka",em:"🧀",type:"veg",desc:"Marinated cottage cheese grilled in tandoor",price:229,unit:"per plate",offer:""},
    {id:2,name:"Veg Manchurian",em:"🥦",type:"veg",desc:"Crispy veg balls in tangy Manchurian sauce",price:179,unit:"per plate",offer:""},
    {id:3,name:"Hara Bhara Kabab",em:"🥬",type:"veg",desc:"Spinach and pea patties with mint chutney",price:159,unit:"per plate",offer:""},
    {id:4,name:"Chicken 65",em:"🍗",type:"nonveg",desc:"Crispy fried chicken with curry leaves and chilies",price:249,unit:"per plate",offer:"20% OFF"},
    {id:5,name:"Chicken Tikka",em:"🔥",type:"nonveg",desc:"Boneless chicken marinated overnight, tandoor grilled",price:299,unit:"per plate",offer:""},
    {id:6,name:"Fish Fry",em:"🐟",type:"nonveg",desc:"Fresh fish fillets with turmeric and red chili",price:279,unit:"per plate",offer:""},
  ]},
  maincourse:{label:"Main Course",emoji:"🍛",desc:"Rich, hearty curries to satisfy your soul",items:[
    {id:7,name:"Paneer Butter Masala",em:"🧡",type:"veg",desc:"Creamy tomato-based curry with soft paneer cubes",price:249,unit:"per plate",offer:""},
    {id:8,name:"Dal Makhani",em:"🫘",type:"veg",desc:"Slow-cooked black lentils in butter and cream",price:199,unit:"per plate",offer:""},
    {id:9,name:"Palak Paneer",em:"💚",type:"veg",desc:"Cottage cheese in velvety spinach gravy",price:229,unit:"per plate",offer:""},
    {id:10,name:"Aloo Gobi",em:"🥔",type:"veg",desc:"Potato and cauliflower with aromatic spices",price:169,unit:"per plate",offer:""},
    {id:11,name:"Butter Chicken",em:"🍗",type:"nonveg",desc:"Tender chicken in rich, creamy tomato sauce",price:299,unit:"per plate",offer:""},
    {id:12,name:"Mutton Curry",em:"🥩",type:"nonveg",desc:"Slow-cooked mutton in spicy gravy, bone-in",price:379,unit:"per plate",offer:""},
    {id:13,name:"Fish Curry",em:"🐠",type:"nonveg",desc:"Tangy coconut-based fish curry, South Indian style",price:329,unit:"per plate",offer:""},
    {id:14,name:"Egg Bhurji",em:"🥚",type:"nonveg",desc:"Scrambled spiced eggs with onions and tomatoes",price:159,unit:"per plate",offer:"10% OFF"},
  ]},
  biryani:{label:"Biryani",emoji:"🍚",desc:"Aromatic basmati rice cooked with love",items:[
    {id:15,name:"Veg Biryani",em:"🌿",type:"veg",desc:"Fragrant basmati with mixed vegetables and whole spices",price:199,unit:"per plate",offer:""},
    {id:16,name:"Paneer Biryani",em:"🧀",type:"veg",desc:"Aromatic rice layered with spiced paneer and saffron",price:249,unit:"per plate",offer:""},
    {id:17,name:"Chicken Biryani",em:"🍗",type:"nonveg",desc:"Hyderabadi dum biryani with tender chicken, raita included",price:279,unit:"per plate",offer:"BESTSELLER"},
    {id:18,name:"Mutton Biryani",em:"🥩",type:"nonveg",desc:"Slow-dum cooked mutton biryani with caramelized onions",price:349,unit:"per plate",offer:""},
    {id:19,name:"Egg Biryani",em:"🥚",type:"nonveg",desc:"Spiced egg biryani with crispy fried onions",price:199,unit:"per plate",offer:""},
    {id:20,name:"Prawn Biryani",em:"🦐",type:"nonveg",desc:"Juicy prawns in aromatic biryani rice — coastal delight!",price:399,unit:"per plate",offer:""},
  ]},
  curries:{label:"Curries by the Kilo",emoji:"🫕",desc:"Order in bulk — the Kilocurry way!",items:[
    {id:21,name:"Paneer Masala (1kg)",em:"🧡",type:"veg",desc:"Rich paneer masala — perfect for parties",price:699,unit:"per kg",offer:""},
    {id:22,name:"Dal Tadka (1kg)",em:"🟡",type:"veg",desc:"Smoky yellow dal with garlic and cumin tempering",price:399,unit:"per kg",offer:""},
    {id:23,name:"Mixed Veg Curry (1kg)",em:"🥦",type:"veg",desc:"Seasonal vegetables in spiced tomato gravy",price:449,unit:"per kg",offer:""},
    {id:24,name:"Chicken Curry (1kg)",em:"🍗",type:"nonveg",desc:"Spicy bone-in chicken curry for bulk orders",price:799,unit:"per kg",offer:""},
    {id:25,name:"Mutton Curry (1kg)",em:"🥩",type:"nonveg",desc:"Tender mutton in rich, slow-cooked gravy",price:999,unit:"per kg",offer:""},
    {id:26,name:"Fish Curry (1kg)",em:"🐟",type:"nonveg",desc:"Tangy fish curry — South Indian style",price:899,unit:"per kg",offer:""},
  ]},
  combos:{label:"Combo Meals",emoji:"🍱",desc:"Complete meals for the best value",items:[
    {id:27,name:"Veg Thali",em:"🌿",type:"veg",desc:"Dal, 2 sabzis, rice, 3 rotis, salad & pickle",price:169,unit:"per plate",offer:""},
    {id:28,name:"Paneer Special Thali",em:"🧀",type:"veg",desc:"Paneer masala, dal makhani, rice, 4 rotis & raita",price:229,unit:"per plate",offer:"10% OFF"},
    {id:29,name:"Chicken Combo",em:"🍗",type:"nonveg",desc:"Butter chicken + rice + 3 rotis + salad + drink",price:299,unit:"per plate",offer:""},
    {id:30,name:"Biryani Combo",em:"🍚",type:"nonveg",desc:"Chicken biryani + chicken curry + raita + pickle",price:349,unit:"per plate",offer:"BESTSELLER"},
    {id:31,name:"Family Pack (4 pax)",em:"👨‍👩‍👧‍👦",type:"nonveg",desc:"4 biryanis + 1kg curry + 8 rotis + dessert",price:999,unit:"per pack",offer:"Best Value"},
    {id:32,name:"Veg Family Pack",em:"🌿",type:"veg",desc:"4 veg thalis + dal + 1kg paneer curry + pickle",price:799,unit:"per pack",offer:"Best Value"},
  ]}
};

/* Live database — accumulates all user-submitted data during the session */
const DB = {
  orders: [
    {orderId:"#KC1001",ts:"2026-03-14 18:30",name:"Ravi Sharma",phone:"+91 98765 43210",email:"ravi@example.com",address:"12 MG Road Banjara Hills",city:"Hyderabad",pin:"500034",items:"Chicken Biryani ×2, Butter Chicken ×1",subtotal:827,delivery:0,gst:41,total:868,payment:"Cash on Delivery",status:"Delivered"},
    {orderId:"#KC1002",ts:"2026-03-14 20:15",name:"Priya Nair",phone:"+91 87654 32109",email:"priya@example.com",address:"45 Jubilee Hills Road 36",city:"Hyderabad",pin:"500033",items:"Veg Thali ×3, Paneer Tikka ×1",subtotal:676,delivery:0,gst:34,total:710,payment:"UPI",status:"Delivered"}
  ],
  enquiries: [
    {num:1,ts:"2026-03-13 11:20",name:"Kiran Babu",phone:"+91 76543 21098",email:"kiran@example.com",message:"Do you deliver to Kukatpally? Need bulk order for 20 people.",status:"Replied"}
  ],
  oc: 1003  /* order counter */
};

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
let cart=[], cartOpen=false, mobOpen=false, menuFilter='all', featF='all';
let toastTimer;

function ts(){
  const d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')+
    ' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

function toast(ic,tx){
  document.getElementById('t-ic').textContent=ic;
  document.getElementById('t-tx').textContent=tx;
  const t=document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3200);
}

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',scrollY>20);
});

function go(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nl').forEach(l=>l.classList.remove('act'));
  const map={home:0,menu:1,about:2,contact:3,admin:4};
  if(map[page]!==undefined) document.querySelectorAll('.nl')[map[page]]?.classList.add('act');
  window.scrollTo(0,0);
  if(page==='menu') renderMenu();
  if(page==='home') renderFeat();
  if(page==='admin') renderAdmin('overview');
  if(page==='checkout') renderCheckout();
}

function toggleMob(){
  mobOpen=!mobOpen;
  document.getElementById('mob-menu').classList.toggle('open',mobOpen);
}

/* ═══════════════════════════════════════
   DISH CARD
═══════════════════════════════════════ */
function dishCard(item){
  const inC=cart.find(c=>c.id===item.id);
  return `<div class="dc">
    <div class="dc-img">
      <div class="dc-em">${item.em}</div>
      <div class="dc-bdg"><span class="badge ${item.type==='veg'?'bveg':'bnveg'}"><span class="dot ${item.type==='veg'?'dveg':'dnveg'}"></span>${item.type==='veg'?'Veg':'Non-Veg'}</span></div>
      ${item.offer?`<div class="dc-off">${item.offer}</div>`:''}
    </div>
    <div class="dc-info">
      <div class="dc-name">${item.name}</div>
      <div class="dc-desc">${item.desc}</div>
      <div class="dc-foot">
        <div class="dc-price">₹${item.price} <span class="dc-unit">${item.unit}</span></div>
        <button class="ac-btn${inC?' added':''}" onclick="addCart(${item.id})">${inC?'✓':'+'}</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════
   FEATURED
═══════════════════════════════════════ */
function renderFeat(){
  const all=Object.values(MENU).flatMap(c=>c.items).slice(0,8);
  const items=featF==='all'?all:all.filter(i=>i.type===featF);
  const g=document.getElementById('feat-grid');
  if(g) g.innerHTML=items.map(dishCard).join('');
}
function featFilter(f,btn){
  featF=f;
  document.querySelectorAll('.cb').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  renderFeat();
}

/* ═══════════════════════════════════════
   MENU
═══════════════════════════════════════ */
function renderMenu(){
  const q=(document.getElementById('menu-srch')?.value||'').toLowerCase();
  let html='';
  Object.entries(MENU).forEach(([k,cat])=>{
    const items=cat.items.filter(i=>{
      const mt=menuFilter==='all'||i.type===menuFilter;
      const mq=!q||i.name.toLowerCase().includes(q)||i.desc.toLowerCase().includes(q);
      return mt&&mq;
    });
    if(!items.length) return;
    html+=`<div class="menu-sec">
      <div class="sub-title">${cat.emoji} ${cat.label}</div>
      <div class="sub-desc">${cat.desc}</div>
      <div class="grid">${items.map(dishCard).join('')}</div>
    </div>`;
  });
  if(!html) html=`<div style="text-align:center;padding:72px 20px;color:var(--tm)"><div style="font-size:60px;margin-bottom:14px">🔍</div><h3 style="font-family:'Playfair Display',serif;color:var(--br);margin-bottom:7px">No dishes found</h3><p>Try a different search or filter.</p></div>`;
  document.getElementById('menu-content').innerHTML=html;
}
function setFilter(f){
  menuFilter=f;
  document.querySelectorAll('.ft').forEach(t=>t.className='ft');
  document.getElementById('ft-'+f).className='ft f'+f;
  renderMenu();
}

/* ═══════════════════════════════════════
   CART
═══════════════════════════════════════ */
function addCart(id){
  const item=Object.values(MENU).flatMap(c=>c.items).find(i=>i.id===id);
  if(!item) return;
  const ex=cart.find(c=>c.id===id);
  if(ex) ex.qty++; else cart.push({...item,qty:1});
  updateCart();
  toast('✅',`${item.em} ${item.name} added to cart!`);
  renderMenu(); renderFeat();
}
function chgQty(id,d){
  const i=cart.findIndex(c=>c.id===id);
  if(i<0) return;
  cart[i].qty+=d;
  if(cart[i].qty<=0) cart.splice(i,1);
  updateCart(); renderMenu(); renderFeat();
}
function updateCart(){
  const cnt=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-cnt').textContent=cnt;
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const gst=Math.round(sub*.05);
  const del=sub>499?0:40;
  const grand=sub+gst+del;
  const csub=document.getElementById('ct-sub');
  if(csub){
    csub.textContent='₹'+sub;
    document.getElementById('ct-del').textContent=del===0?'₹0 (Free!)':'₹'+del;
    document.getElementById('ct-gst').textContent='₹'+gst;
    document.getElementById('ct-grand').textContent='₹'+grand;
  }
  const bd=document.getElementById('cart-bd');
  const ft=document.getElementById('cart-ft');
  if(!bd) return;
  if(!cart.length){
    bd.innerHTML=`<div class="cart-empty"><div class="cart-empty-ic">🍽️</div><h3>Your cart is empty</h3><p>Add some delicious dishes!</p></div>`;
    ft.style.display='none';
  } else {
    ft.style.display='block';
    bd.innerHTML=cart.map(item=>`<div class="ci">
      <div class="ci-em">${item.em}</div>
      <div class="ci-info"><div class="ci-name">${item.name}</div><div class="ci-price">₹${item.price} × ${item.qty} = ₹${item.price*item.qty}</div></div>
      <div class="ci-qty">
        <button class="qb" onclick="chgQty(${item.id},-1)">−</button>
        <span class="qn">${item.qty}</span>
        <button class="qb" onclick="chgQty(${item.id},1)">+</button>
      </div>
    </div>`).join('');
  }
}
function toggleCart(){
  cartOpen=!cartOpen;
  document.getElementById('cart-sb').classList.toggle('open',cartOpen);
  document.getElementById('cart-ov').classList.toggle('open',cartOpen);
}
function goCheckout(){
  toggleCart();
  go('checkout');
}

/* ═══════════════════════════════════════
   CHECKOUT
═══════════════════════════════════════ */
function renderCheckout(){
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const gst=Math.round(sub*.05);
  const del=sub>499?0:40;
  const grand=sub+gst+del;
  if(!cart.length){
    document.getElementById('co-body').innerHTML=`<div class="success-box"><div class="suc-ic">🍽️</div><h2>No items in cart</h2><p>Add dishes from our menu to checkout.</p><button class="btn btn-p" onclick="go('menu')">Go to Menu</button></div>`;
    return;
  }
  document.getElementById('co-body').innerHTML=`
    <div class="co-layout">
      <div>
        <div class="co-card">
          <h3><span class="step">1</span> Delivery Details</h3>
          <div class="fr">
            <div class="fg"><label>Full Name *</label><input class="fi" id="co-name" placeholder="Your name"></div>
            <div class="fg"><label>Phone *</label><input class="fi" id="co-phone" placeholder="+91 98765 43210"></div>
          </div>
          <div class="fg"><label>Email</label><input type="email" class="fi" id="co-email" placeholder="you@example.com"></div>
          <div class="fg"><label>Delivery Address *</label><input class="fi" id="co-addr" placeholder="House/Flat No., Street, Area"></div>
          <div class="fr">
            <div class="fg"><label>City</label><input class="fi" id="co-city" value="Hyderabad"></div>
            <div class="fg"><label>PIN Code</label><input class="fi" id="co-pin" placeholder="500034"></div>
          </div>
        </div>
        <div class="co-card">
          <h3><span class="step">2</span> Payment Method</h3>
          <div class="pay-opts">
            <div class="po sel" onclick="selPay(this)"><input type="radio" name="pay" checked><div><div class="po-lbl">💵 Cash on Delivery</div><div class="po-sub">Pay when your order arrives</div></div></div>
            <div class="po" onclick="selPay(this)"><input type="radio" name="pay"><div><div class="po-lbl">📱 UPI</div><div class="po-sub">GPay, PhonePe, Paytm, BHIM</div></div></div>
            <div class="po" onclick="selPay(this)"><input type="radio" name="pay"><div><div class="po-lbl">💳 Card</div><div class="po-sub">Debit or Credit card</div></div></div>
          </div>
        </div>
      </div>
      <div class="os-card">
        <h3>🧾 Order Summary</h3>
        ${cart.map(i=>`<div class="os-item"><span>${i.em} ${i.name} ×${i.qty}</span><span>₹${i.price*i.qty}</span></div>`).join('')}
        <div class="os-item" style="margin-top:10px"><span>Subtotal</span><span>₹${sub}</span></div>
        <div class="os-item"><span>Delivery</span><span>${del===0?'Free!':'₹'+del}</span></div>
        <div class="os-item"><span>GST (5%)</span><span>₹${gst}</span></div>
        <div class="os-total"><span>Total</span><span>₹${grand}</span></div>
        <button class="btn btn-p" style="width:100%;justify-content:center;margin-top:18px;font-size:15px;padding:16px" onclick="placeOrder()">🎉 Place Order</button>
        <div style="display:flex;justify-content:center;gap:14px;margin-top:12px;flex-wrap:wrap">
          <span style="font-size:11px;color:var(--tm)">🔒 Secure</span>
          <span style="font-size:11px;color:var(--tm)">⚡ Fast Delivery</span>
          <span style="font-size:11px;color:var(--tm)">✅ FSSAI Certified</span>
        </div>
      </div>
    </div>`;
}
function selPay(el){
  document.querySelectorAll('.po').forEach(o=>{o.classList.remove('sel');o.querySelector('input').checked=false});
  el.classList.add('sel');
  el.querySelector('input').checked=true;
}
function placeOrder(){
  const name=document.getElementById('co-name')?.value?.trim();
  const phone=document.getElementById('co-phone')?.value?.trim();
  const addr=document.getElementById('co-addr')?.value?.trim();
  const email=document.getElementById('co-email')?.value?.trim()||'';
  const city=document.getElementById('co-city')?.value?.trim()||'Hyderabad';
  const pin=document.getElementById('co-pin')?.value?.trim()||'';
  if(!name||!phone||!addr){toast('⚠️','Please fill Name, Phone and Address');return;}
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const gst=Math.round(sub*.05);
  const del=sub>499?0:40;
  const total=sub+gst+del;
  const items=cart.map(i=>`${i.name} ×${i.qty}`).join(', ');
  const payEl=document.querySelector('.po.sel .po-lbl');
  const payment=payEl?payEl.textContent.replace(/^[^\w]+/,'').trim():'Cash on Delivery';
  const orderId='#KC'+DB.oc++;
  DB.orders.push({orderId,ts:ts(),name,phone,email,address:addr,city,pin,items,subtotal:sub,delivery:del,gst,total,payment,status:'Preparing'});
  cart=[];
  updateCart();
  document.getElementById('co-body').innerHTML=`
    <div class="success-box">
      <div class="suc-ic" style="font-size:76px;margin-bottom:20px;animation:bounce .6s ease">🎉</div>
      <div class="suc-box">
        <h2>Order Placed Successfully!</h2>
        <p>Thank you, <strong>${name}</strong>! Your food is being prepared and will arrive in 30–45 minutes.<br>We'll call on <strong>${phone}</strong> once it's on the way.</p>
        <div class="order-ref"><strong>📋 Order ID: ${orderId}</strong><span>Saved to database · Download Excel from Admin → Overview</span></div>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:10px">
          <button class="btn btn-p" onclick="go('home')">🏠 Back to Home</button>
          <button class="btn btn-o" onclick="go('menu')">🍽️ Order More</button>
          <button class="btn btn-xl" onclick="go('admin')">📊 View in Admin</button>
        </div>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════
   CONTACT
═══════════════════════════════════════ */
function submitContact(){
  const name=document.getElementById('c-name')?.value?.trim();
  const phone=document.getElementById('c-phone')?.value?.trim();
  const email=document.getElementById('c-email')?.value?.trim()||'';
  const msg=document.getElementById('c-msg')?.value?.trim()||'';
  if(!name||!phone){toast('⚠️','Please enter your Name and Phone');return;}
  if(!msg){toast('⚠️','Please write a message');return;}
  DB.enquiries.push({num:DB.enquiries.length+1,ts:ts(),name,phone,email,message:msg,status:'New'});
  toast('✅',`✉️ Message received! ${DB.enquiries.length} enquiries logged.`);
  document.getElementById('c-name').value='';
  document.getElementById('c-phone').value='';
  document.getElementById('c-email').value='';
  document.getElementById('c-msg').value='';
}

/* ═══════════════════════════════════════
   ADMIN
═══════════════════════════════════════ */
function aTab(tab,el){
  document.querySelectorAll('.at').forEach(t=>t.classList.remove('act'));
  el.classList.add('act');
  renderAdmin(tab);
}
function renderAdmin(tab){
  const body=document.getElementById('adm-body');
  const totalItems=Object.values(MENU).reduce((s,c)=>s+c.items.length,0);
  const totalRev=DB.orders.reduce((s,o)=>s+o.total,0);

  if(tab==='overview'){
    body.innerHTML=`
      <div class="excel-banner">
        <div class="excel-banner-left">
          <div class="excel-ic">📊</div>
          <div>
            <h3>Export All Data to Excel</h3>
            <p>Download a formatted .xlsx file with Orders, Enquiries, Menu Items & Dashboard</p>
            <div class="count-chips">
              <span class="chip">📦 ${DB.orders.length} Orders</span>
              <span class="chip">📬 ${DB.enquiries.length} Enquiries</span>
              <span class="chip">🍽️ ${totalItems} Menu Items</span>
            </div>
          </div>
        </div>
        <button class="btn btn-xl" onclick="exportExcel()" style="font-size:15px;padding:14px 28px">📥 Download Excel</button>
      </div>
      <div class="adm-stats">
        <div class="asc"><div class="asc-label">Total Orders</div><div class="asc-val oc">${DB.orders.length}</div></div>
        <div class="asc"><div class="asc-label">Total Revenue</div><div class="asc-val oc">₹${totalRev.toLocaleString('en-IN')}</div></div>
        <div class="asc"><div class="asc-label">Enquiries</div><div class="asc-val">${DB.enquiries.length}</div></div>
        <div class="asc"><div class="asc-label">Menu Items</div><div class="asc-val">${totalItems}</div></div>
      </div>
      <div class="tbl-wrap">
        <div class="tbl-hd"><h3>📦 Recent Orders</h3><button class="btn btn-xl" onclick="exportExcel()" style="font-size:12px;padding:8px 18px;border-radius:8px">📥 Export Excel</button></div>
        <div class="tbl-scroll"><table>
          <thead><tr><th>Order ID</th><th>Date/Time</th><th>Customer</th><th>Phone</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th></tr></thead>
          <tbody>${DB.orders.slice().reverse().map(o=>`<tr>
            <td><strong style="color:var(--o)">${o.orderId}</strong></td>
            <td style="color:var(--tm);font-size:12px">${o.ts}</td>
            <td><strong>${o.name}</strong></td>
            <td style="font-size:12px">${o.phone}</td>
            <td style="max-width:180px;color:var(--tm);font-size:12px">${o.items}</td>
            <td><strong style="color:var(--o)">₹${o.total.toLocaleString('en-IN')}</strong></td>
            <td style="font-size:12px">${o.payment}</td>
            <td><span class="badge ${o.status==='Delivered'?'bveg':o.status==='Preparing'?'bnveg':''}">${o.status}</span></td>
          </tr>`).join('')}</tbody>
        </table></div>
      </div>`;
  } else if(tab==='orders'){
    body.innerHTML=`
      <div class="tbl-wrap">
        <div class="tbl-hd"><h3>📦 All Orders <span style="font-size:13px;font-weight:400;color:var(--tm)">(${DB.orders.length} records)</span></h3><button class="btn btn-xl" onclick="exportExcel()" style="font-size:12px;padding:8px 18px;border-radius:8px">📥 Export Excel</button></div>
        <div class="tbl-scroll"><table>
          <thead><tr><th>Order ID</th><th>Date/Time</th><th>Customer</th><th>Phone</th><th>Email</th><th>Address</th><th>Items</th><th>Sub</th><th>Del</th><th>GST</th><th>Total</th><th>Payment</th><th>Status</th></tr></thead>
          <tbody>${DB.orders.slice().reverse().map(o=>`<tr>
            <td><strong style="color:var(--o)">${o.orderId}</strong></td>
            <td style="font-size:11px;color:var(--tm)">${o.ts}</td>
            <td><strong>${o.name}</strong></td>
            <td style="font-size:12px">${o.phone}</td>
            <td style="font-size:11px;color:var(--tm)">${o.email||'—'}</td>
            <td style="font-size:11px;color:var(--tm)">${o.address}, ${o.city} ${o.pin}</td>
            <td style="font-size:11px;color:var(--tm);max-width:160px">${o.items}</td>
            <td>₹${o.subtotal}</td><td>₹${o.delivery}</td><td>₹${o.gst}</td>
            <td><strong style="color:var(--o)">₹${o.total}</strong></td>
            <td style="font-size:12px">${o.payment}</td>
            <td><select class="sel-inp" style="width:130px;padding:4px 8px;font-size:11px" onchange="updOrderStatus('${o.orderId}',this.value)">
              <option ${o.status==='Preparing'?'selected':''}>Preparing</option>
              <option ${o.status==='Out for Delivery'?'selected':''}>Out for Delivery</option>
              <option ${o.status==='Delivered'?'selected':''}>Delivered</option>
              <option ${o.status==='Cancelled'?'selected':''}>Cancelled</option>
            </select></td>
          </tr>`).join('')}</tbody>
        </table></div>
      </div>`;
  } else if(tab==='enquiries'){
    body.innerHTML=`
      <div class="tbl-wrap">
        <div class="tbl-hd"><h3>📬 Contact Enquiries <span style="font-size:13px;font-weight:400;color:var(--tm)">(${DB.enquiries.length} records)</span></h3><button class="btn btn-xl" onclick="exportExcel()" style="font-size:12px;padding:8px 18px;border-radius:8px">📥 Export Excel</button></div>
        <div class="tbl-scroll"><table>
          <thead><tr><th>#</th><th>Date/Time</th><th>Name</th><th>Phone</th><th>Email</th><th>Message</th><th>Status</th></tr></thead>
          <tbody>${DB.enquiries.slice().reverse().map(e=>`<tr>
            <td>${e.num}</td>
            <td style="font-size:11px;color:var(--tm)">${e.ts}</td>
            <td><strong>${e.name}</strong></td>
            <td>${e.phone}</td>
            <td style="font-size:12px;color:var(--tm)">${e.email||'—'}</td>
            <td style="max-width:260px;font-size:12px;color:var(--tm)">${e.message}</td>
            <td><span class="badge ${e.status==='Replied'?'bveg':'bnveg'}">${e.status}</span></td>
          </tr>`).join('')}</tbody>
        </table></div>
      </div>`;
  } else if(tab==='menu'){
    const allItems=Object.values(MENU).flatMap(c=>c.items);
    body.innerHTML=`
      <div class="tbl-wrap">
        <div class="tbl-hd"><h3>🍽️ Menu Items</h3><button class="btn btn-p" onclick="aTab('add',document.querySelectorAll('.at')[4])">+ Add Item</button></div>
        <div class="tbl-scroll"><table>
          <thead><tr><th>Dish</th><th>Category</th><th>Type</th><th>Price</th><th>Available</th><th>Actions</th></tr></thead>
          <tbody>${allItems.map(item=>{
            const cat=Object.entries(MENU).find(([k,c])=>c.items.some(i=>i.id===item.id));
            return `<tr>
              <td><strong>${item.em} ${item.name}</strong></td>
              <td style="color:var(--tm)">${cat?cat[1].label:''}</td>
              <td><span class="badge ${item.type==='veg'?'bveg':'bnveg'}">${item.type==='veg'?'Veg':'Non-Veg'}</span></td>
              <td><input class="pri-inp" value="${item.price}" type="number" onchange="updPrice(${item.id},this.value)"></td>
              <td><label class="tog"><input type="checkbox" checked onchange="toast('✅','Availability updated!')"><span class="tog-sl"></span></label></td>
              <td style="display:flex;gap:7px">
                <button class="abtn aedit" onclick="toast('✏️','Editing ${item.name}')">Edit</button>
                <button class="abtn adel" onclick="toast('🗑️','${item.name} removed!')">Delete</button>
              </td>
            </tr>`;
          }).join('')}</tbody>
        </table></div>
      </div>`;
  } else if(tab==='add'){
    body.innerHTML=`
      <div class="adm-form">
        <h3>➕ Add New Menu Item</h3>
        <div class="fr"><div class="fg"><label>Item Name *</label><input class="fi" id="ai-name" placeholder="e.g. Paneer Tikka"></div><div class="fg"><label>Emoji</label><input class="fi" id="ai-em" placeholder="e.g. 🧀"></div></div>
        <div class="fg"><label>Description *</label><input class="fi" id="ai-desc" placeholder="Short description"></div>
        <div class="fr">
          <div class="fg"><label>Category</label><select class="sel-inp" id="ai-cat"><option value="starters">Starters</option><option value="maincourse">Main Course</option><option value="biryani">Biryani</option><option value="curries">Curries</option><option value="combos">Combos</option></select></div>
          <div class="fg"><label>Type</label><select class="sel-inp" id="ai-type"><option value="veg">Veg</option><option value="nonveg">Non-Veg</option></select></div>
        </div>
        <div class="fr">
          <div class="fg"><label>Price (₹) *</label><input class="fi" type="number" id="ai-price" placeholder="249"></div>
          <div class="fg"><label>Unit</label><select class="sel-inp" id="ai-unit"><option>per plate</option><option>per kg</option><option>per pack</option></select></div>
        </div>
        <div class="fg"><label>Offer Label</label><input class="fi" id="ai-offer" placeholder="e.g. 20% OFF (optional)"></div>
        <button class="btn btn-p" onclick="addMenuItem()" style="margin-top:6px">✅ Add to Menu</button>
      </div>`;
  }
}
function updOrderStatus(id,status){
  const o=DB.orders.find(o=>o.orderId===id);
  if(o){o.status=status;toast('✅',`${id} → ${status}`);}
}
function updPrice(id,val){
  for(const cat of Object.values(MENU)){
    const item=cat.items.find(i=>i.id===id);
    if(item){item.price=parseInt(val)||item.price;toast('✅','Price updated!');break;}
  }
}
function addMenuItem(){
  const name=document.getElementById('ai-name')?.value?.trim();
  const em=document.getElementById('ai-em')?.value?.trim()||'🍽️';
  const desc=document.getElementById('ai-desc')?.value?.trim();
  const cat=document.getElementById('ai-cat')?.value;
  const type=document.getElementById('ai-type')?.value;
  const price=parseInt(document.getElementById('ai-price')?.value)||199;
  const unit=document.getElementById('ai-unit')?.value;
  const offer=document.getElementById('ai-offer')?.value?.trim()||'';
  if(!name||!desc){toast('⚠️','Please fill Name and Description');return;}
  const newId=Math.max(...Object.values(MENU).flatMap(c=>c.items.map(i=>i.id)))+1;
  MENU[cat].items.push({id:newId,name,em,type,desc,price,unit,offer});
  toast('✅',`${em} ${name} added to menu!`);
}

/* ═══════════════════════════════════════
   EXCEL EXPORT  (SheetJS)
═══════════════════════════════════════ */
function exportExcel(){
  if(typeof XLSX==='undefined'){toast('⚠️','Loading Excel library, please try again in a moment...');return;}
  const wb=XLSX.utils.book_new();

  /* ── Sheet 1: Orders ── */
  const oHdr=['Order ID','Date & Time','Customer Name','Phone','Email',
    'Delivery Address','City','PIN','Items Ordered',
    'Subtotal (₹)','Delivery (₹)','GST (₹)','Total (₹)','Payment Method','Status'];
  const oRows=DB.orders.map(o=>[
    o.orderId,o.ts,o.name,o.phone,o.email,
    o.address,o.city,o.pin,o.items,
    o.subtotal,o.delivery,o.gst,o.total,o.payment,o.status
  ]);
  const wsO=XLSX.utils.aoa_to_sheet([
    ['KILOCURRY — Orders Database'],
    ['Deliciousness by the Kilo | kilocurry.in | Generated: '+ts()],
    [],
    oHdr,
    ...oRows,
    [],
    ['','','','','','','','','TOTALS →',
      DB.orders.reduce((s,o)=>s+o.subtotal,0),
      DB.orders.reduce((s,o)=>s+o.delivery,0),
      DB.orders.reduce((s,o)=>s+o.gst,0),
      DB.orders.reduce((s,o)=>s+o.total,0),'','']
  ]);
  wsO['!cols']=[{wch:12},{wch:18},{wch:18},{wch:16},{wch:24},{wch:32},{wch:12},{wch:9},{wch:38},{wch:12},{wch:12},{wch:10},{wch:12},{wch:18},{wch:14}];
  XLSX.utils.book_append_sheet(wb,wsO,'Orders');

  /* ── Sheet 2: Contact Enquiries ── */
  const eHdr=['#','Date & Time','Full Name','Phone','Email','Message','Status'];
  const eRows=DB.enquiries.map(e=>[e.num,e.ts,e.name,e.phone,e.email,e.message,e.status]);
  const wsE=XLSX.utils.aoa_to_sheet([
    ['KILOCURRY — Contact Form Enquiries'],
    ['All messages submitted via Contact page | Generated: '+ts()],
    [],
    eHdr,
    ...eRows
  ]);
  wsE['!cols']=[{wch:5},{wch:18},{wch:20},{wch:16},{wch:26},{wch:50},{wch:12}];
  XLSX.utils.book_append_sheet(wb,wsE,'Contact Enquiries');

  /* ── Sheet 3: Menu Items ── */
  const mHdr=['ID','Category','Dish Name','Type','Description','Price (₹)','Unit','Available'];
  let mid=1;
  const mRows=[];
  Object.entries(MENU).forEach(([k,cat])=>{
    cat.items.forEach(item=>{
      mRows.push([mid++,cat.label,item.name,item.type==='veg'?'Veg':'Non-Veg',item.desc,item.price,item.unit,'Yes']);
    });
  });
  const wsM=XLSX.utils.aoa_to_sheet([
    ['KILOCURRY — Menu Items & Prices'],
    ['Admin view — current live menu | Generated: '+ts()],
    [],
    mHdr,
    ...mRows
  ]);
  wsM['!cols']=[{wch:5},{wch:14},{wch:24},{wch:10},{wch:42},{wch:10},{wch:12},{wch:10}];
  XLSX.utils.book_append_sheet(wb,wsM,'Menu Items');

  /* ── Sheet 4: Dashboard ── */
  const totalRev=DB.orders.reduce((s,o)=>s+o.total,0);
  const avgOrd=DB.orders.length?Math.round(totalRev/DB.orders.length):0;
  const totalItems=Object.values(MENU).reduce((s,c)=>s+c.items.length,0);
  const wsD=XLSX.utils.aoa_to_sheet([
    ['KILOCURRY — Business Dashboard'],
    ['Auto-generated summary | Generated: '+ts()],
    [],
    ['Metric','Value'],
    ['Total Orders',DB.orders.length],
    ['Total Revenue (₹)',totalRev],
    ['Average Order Value (₹)',avgOrd],
    ['Total Contact Enquiries',DB.enquiries.length],
    ['Total Menu Items',totalItems],
    [],
    ['Sheets in this file',''],
    ['Orders','All customer orders with full details'],
    ['Contact Enquiries','All contact form submissions'],
    ['Menu Items','Current menu with prices'],
    ['Dashboard','This summary sheet'],
  ]);
  wsD['!cols']=[{wch:30},{wch:24}];
  XLSX.utils.book_append_sheet(wb,wsD,'Dashboard');

  /* Download */
  const date=new Date().toISOString().slice(0,10);
  XLSX.writeFile(wb,`Kilocurry_Data_${date}.xlsx`);
  toast('📥',`Excel downloaded! ${DB.orders.length} orders · ${DB.enquiries.length} enquiries`);
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
renderFeat();
updateCart();