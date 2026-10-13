(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

// Mobile menu
const nav=$('#nav'),mb=$('.menu-btn');
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu'});
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');mb.setAttribute('aria-expanded',false);mb.textContent='Menu'}));

// Donation prototype
const custom=$('#custom'),summary=$('#summary');
const fmt=n=>'₹'+Number(n).toLocaleString('en-IN');
function update(){
  const freq=$('input[name=freq]:checked').value;
  const amt=custom.value?Number(custom.value):Number($('input[name=amt]:checked')?.value);
  summary.textContent=amt>0?`${fmt(amt)} ${freq==='monthly'?'every month':'one time'}`:'Choose or enter an amount';
  return amt;
}
$$('#give-form input[name=amt]').forEach(r=>r.addEventListener('change',()=>{custom.value='';update()}));
$$('#give-form input[name=freq]').forEach(r=>r.addEventListener('change',update));
custom.addEventListener('input',()=>{if(custom.value)$$('input[name=amt]').forEach(r=>r.checked=false);else $('input[name=amt][value="1000"]').checked=true;update()});
$('#give-form').addEventListener('submit',e=>{
  e.preventDefault();const a=update(),m=$('#give-msg');
  m.textContent=a>0?`Prototype: ${summary.textContent} selected. In a live site this would open a secure payment step. Nothing was charged.`:'Please choose or enter an amount greater than zero.';
});
update();

// Campaign buttons: prefill the purpose in the donation card
$$('[data-cause]').forEach(b=>b.addEventListener('click',()=>{
  const c=$('#cause');c.textContent='Supporting: '+b.dataset.cause;c.hidden=false;
  $('#give-msg').textContent='Prototype state: this button would open the initiative page. For now it takes you to giving.';
  $('#donate').scrollIntoView({behavior:'smooth'});
}));

// Impact disclosure and stories
function toggle(btn,panel){btn.addEventListener('click',()=>{const o=panel.hidden;panel.hidden=!o;btn.setAttribute('aria-expanded',o)})}
toggle($('#measure-btn'),$('#measure'));toggle($('#more-stories'),$('#more-msg'));

// Volunteer form validation
const f=$('#vol-form'),ok=$('#vol-ok');
const rules={name:v=>v.trim().length>1||'Please enter your full name.',
  email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Please enter a valid email, like name@example.com.',
  interest:v=>!!v||'Please choose an area of interest.',avail:v=>!!v||'Please choose your availability.'};
function check(id){const el=$('#'+id),r=rules[id](el.value),e=$('#e-'+id);
  el.setAttribute('aria-invalid',r!==true);el.setAttribute('aria-describedby','e-'+id);e.textContent=r===true?'':r;return r===true}
Object.keys(rules).forEach(id=>$('#'+id).addEventListener('blur',()=>check(id)));
f.addEventListener('submit',e=>{
  e.preventDefault();ok.hidden=true;
  const res=Object.keys(rules).map(check);
  const c=$('#consent'),ce=$('#e-consent');ce.textContent=c.checked?'':'Please tick this box so we know you are happy to be contacted.';res.push(c.checked);
  if(res.includes(false)){$$('[aria-invalid=true]',f)[0]?.focus();if(!c.checked&&!$$('[aria-invalid=true]',f).length)c.focus();return}
  ok.textContent=`Thank you, ${$('#name').value.trim().split(' ')[0]}. This is a demo, so your details were not sent or saved anywhere.`;ok.hidden=false;f.reset();
});

// Design notes (review mode)
const notes={1:['Donation Transparency','Clear amounts, a recurring option and a visible note on where funds go build donor trust.'],
2:['Campaign Discovery','Distinct initiative cards help visitors find a cause and act on it.'],
3:['Verified Impact Metrics','Confirmed outcomes show visitors the difference the work makes. Figures here are placeholders.'],
4:['Volunteer Registration','A short, accessible form turns interest into a first step.'],
5:['Community Stories & Testimonials','Consent-based voices make impact human and credible.']};
$$('[data-note]').forEach(s=>{const n=s.dataset.note,d=document.createElement('aside');d.className='callout';
  d.innerHTML=`<b><i>${n}</i>${notes[n][0]}</b>${notes[n][1]}`;s.prepend(d)});
const nt=$('.notes-toggle');
nt.addEventListener('click',()=>{const o=document.body.classList.toggle('notes');nt.setAttribute('aria-pressed',o);nt.textContent=o?'Hide design notes':'Show design notes'});
})();
