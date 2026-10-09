const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.querySelector('.site-header').classList.toggle('menu-open', open);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.click(); menu.focus();
  }
});
const dialog = document.querySelector('#cv-dialog');
if (dialog) {
  const designs = [['cv-1.png'], ['cv-2.png'], ['cv-3.png'], ['cv-4.png'], ['cv-5-1.png', 'cv-5-2.png'], ['cv-6-1.png', 'cv-6-2.png']];
  let design = 0, page = 0, opener;
  const previous = document.querySelector('#previous-page');
  const next = document.querySelector('#next-page');
  function render() {
    const src = '/assets/' + designs[design][page];
    document.querySelector('#viewer-title').textContent = `CV ${design + 1}`;
    document.querySelector('#viewer-image').src = src;
    document.querySelector('#viewer-image').alt = `CV ${design + 1}, original page ${page + 1}`;
    document.querySelector('#page-count').textContent = `${page + 1} / ${designs[design].length}`;
    document.querySelector('#original-link').href = src;
    previous.disabled = page === 0;
    next.disabled = page === designs[design].length - 1;
    document.querySelector('.viewer-content').scrollTop = 0;
  }
  document.querySelectorAll('[data-design]').forEach(button => button.addEventListener('click', () => {
    opener = button; design = Number(button.dataset.design) - 1; page = 0;
    render(); dialog.showModal(); document.body.classList.add('modal-open');
  }));
  previous.addEventListener('click', () => { if (page > 0) {page--; render();} });
  next.addEventListener('click', () => {if (page < designs[design].length - 1) {page++; render();} });
  document.querySelector('#close-viewer').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {if (e.target === dialog) dialog.close();});
  dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); opener?.focus();});
  dialog.addEventListener('keydown', e => {
    if(e.key === 'ArrowRight') next.click();
    if(e.key === 'ArrowLeft') previous.click();
  });
}
