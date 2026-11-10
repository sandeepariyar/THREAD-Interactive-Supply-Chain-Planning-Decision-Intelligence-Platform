
(()=>{
  const $=(selector)=>document.querySelector(selector);
  const $$=(selector)=>Array.from(document.querySelectorAll(selector));
  const root=document.documentElement;
  const colors={"light": {"canvas": "#F5F6FB", "surface": "#FFFFFF", "surface-muted": "#F7F8FC", "surface-elevated": "#FFFFFF", "surface-accent": "#F0EFFF", "text-primary": "#18223A", "text-secondary": "#596681", "text-tertiary": "#616E88", "border": "#E1E5F0", "border-strong": "#C8D0DE", "accent": "#5449D8", "accent-hover": "#4035C0", "accent-pressed": "#3026A1", "accent-on": "#FFFFFF", "focus": "#4C3DD6", "success": "#086C55", "success-bg": "#EAF8F2", "warning": "#965400", "warning-bg": "#FFF4DD", "danger": "#AA263C", "danger-bg": "#FFF0F2", "info": "#315B9E", "info-bg": "#ECF3FF", "track": "#D9DEEA", "baseline": "#9AA5BB", "scenario": "#5449D8", "projected": "#B3772E", "muted-flow": "#CBD3E2", "node-outline": "#D7DDED", "overlay": "#18223AB8"}, "dark": {"canvas": "#111628", "surface": "#1B2237", "surface-muted": "#222A40", "surface-elevated": "#293147", "surface-accent": "#302B58", "text-primary": "#F3F5FF", "text-secondary": "#BBC5DF", "text-tertiary": "#AAB6D1", "border": "#343E56", "border-strong": "#536078", "accent": "#ABA5FF", "accent-hover": "#C5C0FF", "accent-pressed": "#8E83F6", "accent-on": "#111628", "focus": "#C4BEFF", "success": "#80D9B8", "success-bg": "#173D35", "warning": "#F3CD7B", "warning-bg": "#493616", "danger": "#FF9DA8", "danger-bg": "#4C2531", "info": "#9DC0FF", "info-bg": "#223752", "track": "#4D5970", "baseline": "#95A3BF", "scenario": "#ABA5FF", "projected": "#F0C175", "muted-flow": "#556078", "node-outline": "#515C76", "overlay": "#0A0E1AD6"}};
  let toastTimeout;
  function toast(message){const node=$('#toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>node.classList.remove('show'),2600)}
  function reflectColors(){const theme=root.getAttribute('data-thread-theme');$$('[data-hex-for]').forEach(el=>{el.textContent=colors[theme][el.getAttribute('data-hex-for')]})}
  $$('[data-theme-btn]').forEach(button=>button.addEventListener('click',()=>{
    const theme=button.getAttribute('data-theme-btn');root.setAttribute('data-thread-theme',theme);
    $$('[data-theme-btn]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});reflectColors();
  }));
  $$('[data-density-btn]').forEach(button=>button.addEventListener('click',()=>{
    const density=button.getAttribute('data-density-btn');root.setAttribute('data-density',density);
    $$('[data-density-btn]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});
  }));
  function copy(text){if(navigator.clipboard&&location.protocol.startsWith('http'))navigator.clipboard.writeText(text).then(()=>toast('Copied: '+text)).catch(()=>toast('Asset: '+text));else toast('Asset: '+text)}
  $$('[data-copy-var]').forEach(button=>button.addEventListener('click',()=>copy(colors[root.getAttribute('data-thread-theme')][button.getAttribute('data-copy-var')])));
  $$('[data-toast]').forEach(button=>button.addEventListener('click',()=>toast(button.dataset.toast)));
  $$('[data-tab]').forEach(button=>button.addEventListener('click',()=>{const group=button.closest('.tabs');group.querySelectorAll('[data-tab]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-selected',String(b===button))});const notes={baseline:'Baseline: observed source values, before assumptions.',draft:'Draft: editable assumptions, not yet recalculated.',result:'Last run: snapshot of the most recent illustrative calculation.'};$('#tab-feedback').textContent=notes[button.dataset.tab]}));
  $$('#components .product-row').forEach(button=>button.addEventListener('click',()=>{$$('#components .product-row').forEach(b=>b.classList.toggle('selected',b===button));toast('Selected product: '+(button.dataset.product==='knit'?'Style Knit Crew':'Classic Cotton Tee'))}));
  $('#search-clear').addEventListener('click',()=>{$('#ds-product-search').value='';$('#ds-product-search').focus()});
  $('#uplift').addEventListener('input',(e)=>{$('#uplift-label').textContent='+'+e.target.value+'%';$('#uplift-note').textContent='Draft +'+e.target.value+'% · Not simulated. Last-run results would remain unchanged.'});
  $$('[data-node]').forEach(button=>button.addEventListener('click',()=>{$$('[data-node]').forEach(n=>n.classList.toggle('selected',n===button));const label=button.querySelector('strong').textContent;$('#node-caption').textContent='Selected: '+label+'. The contextual inspector would reveal dependencies and provenance.'}));
  const iconSearch=$('#icon-search');const tiles=$$('.icon-tile');iconSearch.addEventListener('input',()=>{const q=iconSearch.value.toLowerCase().trim();let visible=0;tiles.forEach(tile=>{const show=tile.dataset.icon.includes(q);tile.hidden=!show;if(show)visible++});$('#icon-count').textContent=visible+' / '+tiles.length});
  tiles.forEach(tile=>tile.addEventListener('click',()=>copy(tile.dataset.icon+'.svg')));
  const links=$$('.side-links a');
  links.forEach(link=>link.addEventListener('click',()=>{links.forEach(a=>a.classList.toggle('active',a===link))}));
  reflectColors();
})();
