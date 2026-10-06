(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    function setOpen(open) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    toggle.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Build a clean mailto: link from the contact form (no backend).
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var subject = 'Superb Voice free pilot: ' + (v('f-company') || v('f-name'));
      var body = [
        'Name: ' + v('f-name'),
        'Company: ' + v('f-company'),
        'Phone: ' + v('f-phone'),
        'Trade: ' + v('f-trade'),
        '',
        v('f-message')
      ].join('\n');
      window.location.href = 'mailto:superbvoice.shawnh@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
