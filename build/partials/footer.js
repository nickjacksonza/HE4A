const site = require('../content/site');

function footer() {
  const officesLine = site.offices.map((o) => `${o.city}, ${o.country}`).join('<br>');

  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
      <div class="footer-brand-row">
        <img src="assets/logo/mark-transparent-76.webp" alt="Health Equity 4 All" width="39" height="34" class="footer-logo">
        <span class="footer-wordmark">Equity Is the Word</span>
      </div>
      <p class="footer-blurb">A global health equity collective working with the communities healthcare has left out.</p>
      <div class="footer-motto">${site.tagline}</div>
    </div>
    <div class="footer-col">
      <div class="footer-heading">Services</div>
      <a href="non-profit-leadership.html" class="footer-link">Non-Profit Leadership</a>
      <a href="organizational-development.html" class="footer-link">Organizational Development</a>
      <a href="trainings.html" class="footer-link">Trainings</a>
      <a href="public-speaking.html" class="footer-link">Public Speaking</a>
    </div>
    <div class="footer-col">
      <div class="footer-heading">Organization</div>
      <a href="about-us.html" class="footer-link">About Us</a>
      <a href="contact.html" class="footer-link">Contact</a>
      <div class="footer-text">${officesLine}</div>
    </div>
    <div class="footer-col">
      <div class="footer-heading">Business Hours</div>
      <div class="footer-text">${site.hours.weekday}<br>${site.hours.weekend}</div>
      <div class="footer-text">Available in ${site.languages.join(', ')}</div>
      <a href="contact.html" class="footer-cta">Contact Us →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${site.copyrightYear} ${site.legalName}</span>
    <span>${site.siteName}</span>
  </div>
</footer>`;
}

module.exports = footer;
