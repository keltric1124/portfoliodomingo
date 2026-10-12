import './navbar.css';

const links = [
  { href: '#about', label: 'Approach' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Toolkit' },
];

const Navbar = () => (
  <header className="site-header">
    <nav className="navbar section-shell" aria-label="Main navigation">
      <a className="nav-logo" href="#hero" aria-label="Yuriz Ronell Domingo, home">
        <span className="nav-monogram">Y</span>
        <span>Yuriz Ronell Domingo<small>Experienced developer &middot; Digital experiences</small></span>
      </a>
      <ul className="nav-links">
        {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
      </ul>
      <a href="#contact" className="nav-contact">Let's talk <span aria-hidden="true">{'\u2197'}</span></a>
    </nav>
  </header>
);

export default Navbar;
