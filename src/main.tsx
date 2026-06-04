import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const betaHref =
  'mailto:socials@aquariumaudiolabs.com?subject=Electric%20Jellyfish%20beta%20updates';
const proHref =
  'mailto:socials@aquariumaudiolabs.com?subject=Electric%20Jellyfish%20Pro%20waitlist';
const supportHref = 'mailto:support@aquariumaudiolabs.com';

const navItems = [
  { label: 'Plugins', href: '#plugins' },
  { label: 'Beta', href: '#beta' },
  { label: 'Pro Waitlist', href: '#pro-waitlist' },
  { label: 'Socials', href: '#socials' },
];

const pluginHighlights = [
  'Colorful saturation for bright edges, warm bloom, and strange sparks',
  'Fast musical controls that keep the mix moving',
  'Underwater motion and electric tone for producers, engineers, and sound designers',
  'Beta release is in preparation, with updates shared by email',
];

const proTeasers = [
  'Deeper tone shaping for more detailed current control',
  'Expanded creative sound design ideas for future sessions',
  'Early interest helps shape what the Pro version becomes',
];

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@aquariumaudiolabs',
    href: 'https://www.instagram.com/aquariumaudiolabs/',
  },
  {
    label: 'YouTube',
    handle: '@AquariumAudioLabs',
    href: 'https://www.youtube.com/@AquariumAudioLabs',
  },
  {
    label: 'Reddit',
    handle: 'u/aquariumaudiolabs',
    href: 'https://www.reddit.com/user/aquariumaudiolabs/',
  },
];

function App() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="./assets/aquarium-hero.png"
          alt=""
          aria-hidden="true"
        />

        <header className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Aquarium Audio Labs home">
            <span className="brand__mark">AAL</span>
            <span>Aquarium Audio Labs</span>
          </a>
          <nav>
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero__content">
          <p className="eyebrow">Independent audio software from below the surface</p>
          <h1 id="hero-title">Aquarium Audio Labs</h1>
          <p className="hero__lede">
            Playful, charged audio tools for saturation, glow, current, and underwater motion.
            Electric Jellyfish is getting ready to surface, and Pro interest is open now.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary button--glow" href={betaHref}>
              Get beta updates
            </a>
            <a className="button button--secondary button--glow" href={proHref}>
              Join the Pro waitlist
            </a>
          </div>
        </div>
      </section>

      <section className="section section--plugins current-band" id="plugins" aria-labelledby="plugins-title">
        <div className="section__header">
          <p className="eyebrow">Plugins</p>
          <h2 id="plugins-title">Electric Jellyfish leads the tank.</h2>
          <p>
            A saturation plugin in preparation for musicians who want voltage, movement, and wet
            neon character without stopping the session.
          </p>
        </div>

        <article className="plugin-card">
          <div className="plugin-card__intro">
            <p className="status">Beta in preparation</p>
            <h3>Electric Jellyfish</h3>
            <p>
              Add bright bite, soft heat, and animated electric texture to synths, drums, guitars,
              vocals, and experimental sound design.
            </p>
            <div className="plugin-card__actions">
              <a className="button button--primary" href={betaHref}>
                Get beta updates
              </a>
              <a className="button button--ghost" href="#pro-waitlist">
                Explore Pro plans
              </a>
            </div>
          </div>

          <ul className="feature-list" aria-label="Electric Jellyfish highlights">
            {pluginHighlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section section--beta light-band" id="beta" aria-labelledby="beta-title">
        <div>
          <p className="eyebrow">Beta</p>
          <h2 id="beta-title">Follow the first public ripple.</h2>
          <p>
            Electric Jellyfish beta build work is underway. Send an email to get updates as the
            public download, release notes, and support details come together.
          </p>
        </div>
        <div className="callout">
          <span className="callout__label">Email updates</span>
          <h3>Updates go through email today.</h3>
          <p>
            Beta interest is handled by email while the public release is prepared. No account,
            checkout, or waitlist form is live on this site.
          </p>
          <a className="button button--dark button--glow" href={betaHref}>
            Get beta updates
          </a>
        </div>
      </section>

      <section
        className="section section--pro current-band"
        id="pro-waitlist"
        aria-labelledby="pro-title"
      >
        <div className="section__header">
          <p className="eyebrow">Pro Waitlist</p>
          <h2 id="pro-title">More voltage is planned.</h2>
          <p>
            Electric Jellyfish Pro is a future version, not a product for sale today. Join the
            waitlist to signal interest in a deeper, more flexible creative tool.
          </p>
        </div>

        <div className="pro-grid">
          {proTeasers.map((item) => (
            <article className="pro-card" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="pro-strip">
          <p>No checkout, account, activation, license system, or Pro purchase flow is live.</p>
          <a className="button button--primary button--glow" href={proHref}>
            Join the Pro waitlist
          </a>
        </div>
      </section>

      <section className="section section--socials light-band" id="socials" aria-labelledby="socials-title">
        <div>
          <p className="eyebrow">Socials</p>
          <h2 id="socials-title">Signals from the reef.</h2>
          <p>
            Follow Aquarium Audio Labs for plugin progress, sound clips, and release notes. For
            product help, use the support mailbox.
          </p>
          <a className="support-link" href={supportHref}>
            support@aquariumaudiolabs.com
          </a>
        </div>

        <div className="social-grid">
          {socialLinks.map((link) => (
            <a
              className="social-card"
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{link.label}</span>
              <strong>{link.handle}</strong>
            </a>
          ))}
          <a className="social-card social-card--mail" href="mailto:socials@aquariumaudiolabs.com">
            <span>Email</span>
            <strong>socials@aquariumaudiolabs.com</strong>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="footer__brand" href="#top">
          Aquarium Audio Labs
        </a>
        <nav aria-label="Footer navigation">
          <a href="#plugins">Plugins</a>
          <a href="#beta">Beta</a>
          <a href="#pro-waitlist">Pro Waitlist</a>
          <a href="#socials">Socials</a>
          <a href={supportHref}>Support</a>
        </nav>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
