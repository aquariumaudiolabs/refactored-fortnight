import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const betaHref =
  'mailto:socials@aquariumaudiolabs.com?subject=Electric%20Jellyfish%20beta%20updates';
const proHref =
  'mailto:socials@aquariumaudiolabs.com?subject=Electric%20Jellyfish%20Pro%20waitlist';
const supportHref = 'mailto:support@aquariumaudiolabs.com';

const navItems = [
  { label: 'Coming Soon', href: '#launch-kit' },
  { label: 'Plugins', href: '#plugins' },
  { label: 'Beta', href: '#beta' },
  { label: 'Worlds', href: '#brand-worlds' },
  { label: 'Pro Waitlist', href: '#pro-waitlist' },
  { label: 'Socials', href: '#socials' },
];

const pluginHighlights = [
  'Colorful saturation for bright edges, warm bloom, and strange sparks',
  'Fast musical controls that keep the mix moving',
  'Underwater motion and electric tone for producers, engineers, and sound designers',
  'Beta release is in preparation, with updates shared by email',
];

const pluginLineup = [
  {
    label: 'Free fun utility',
    name: 'Beta Fish',
    detail: 'A tiny visual companion with a little channel motion, still getting its fins in order.',
  },
];

const proTeasers = [
  'Deeper tone shaping for more detailed current control',
  'Expanded creative sound design ideas for future sessions',
  'Early interest helps shape what the Pro version becomes',
];

const launchSlots = [
  {
    label: 'First listen',
    title: 'Sound clips are surfacing soon',
    detail: 'Short before-and-after moments will show how Electric Jellyfish bends tone.',
  },
  {
    label: 'Voltage check',
    title: 'Beta notes are warming up',
    detail: 'Release notes, supported formats, and download details will appear when the build is ready.',
  },
  {
    label: 'Tank cam',
    title: 'Interface previews are in motion',
    detail: 'Small looks at the plugin, glowing controls, and underwater motion are next in the current.',
  },
];

const brandWorlds = [
  'Creative tools with motion, color, and a little electricity under the glass',
  'Fast controls that feel playful without slowing down a session',
  'A brand world built around texture, tone, and tactile musical decisions',
];

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@aquariumaudiolabs',
    href: 'https://www.instagram.com/aquariumaudiolabs/',
  },
  {
    label: 'Facebook',
    handle: 'Aquarium Audio Labs',
    href: 'https://www.facebook.com/profile.php?id=61590404774856',
  },
  {
    label: 'YouTube',
    handle: '@AquariumAudioLabs',
    href: 'https://www.youtube.com/@AquariumAudioLabs',
  },
  {
    label: 'TikTok',
    handle: '@aquariumaudiolabs',
    href: 'https://www.tiktok.com/@aquariumaudiolabs',
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
            <span className="brand__mark" aria-hidden="true">
              <img src="./assets/social/aquarium-profile-avatar-320.png" alt="" />
            </span>
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

      <section
        className="section section--launch light-band"
        id="launch-kit"
        aria-labelledby="launch-kit-title"
      >
        <div className="section__header">
          <p className="eyebrow">Coming Soon</p>
          <h2 id="launch-kit-title">The first signals are swimming up.</h2>
          <p>
            Electric Jellyfish is getting its public demos, release notes, and beta download details
            ready. Until then, this is the launch current to follow.
          </p>
        </div>

        <div className="launch-grid">
          {launchSlots.map((slot) => (
            <article className="launch-card" key={slot.title}>
              <span>{slot.label}</span>
              <h3>{slot.title}</h3>
              <p>{slot.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--plugins current-band" id="plugins" aria-labelledby="plugins-title">
        <div className="section__header">
          <p className="eyebrow">Plugins</p>
          <h2 id="plugins-title">Electric Jellyfish leads the tank.</h2>
          <p>
            Electric Jellyfish is first up, with a few smaller creatures moving around behind the
            glass. Downloads are still being prepared.
          </p>
        </div>

        <div className="lineup-grid" aria-label="More Aquarium plugins in progress">
          {pluginLineup.map((plugin) => (
            <article className="lineup-card" key={plugin.name}>
              <span>{plugin.label}</span>
              <h3>{plugin.name}</h3>
              <p>{plugin.detail}</p>
            </article>
          ))}
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
            Electric Jellyfish beta work is underway. Send an email to get updates as the public
            download, release notes, and support details come together.
          </p>
        </div>
        <div className="callout">
          <span className="callout__label">Email updates</span>
          <h3>Updates are email-first for now.</h3>
          <p>
            Beta interest is handled by email while the release is prepared. No account, checkout,
            or signup form is live on this site.
          </p>
          <a className="button button--dark button--glow" href={betaHref}>
            Get beta updates
          </a>
        </div>
      </section>

      <section
        className="section section--free-beta current-band"
        id="free-beta-plugin"
        aria-labelledby="free-beta-title"
      >
        <div className="free-beta-panel">
          <div>
            <p className="eyebrow">Free Beta Plugin</p>
            <h2 id="free-beta-title">A tiny wave-rider is in the tank.</h2>
            <p>
              Beta Fish is a tiny visual companion for channel motion: playful, bright, and easy to
              keep in the corner of a session.
            </p>
            <a className="button button--primary button--glow" href={betaHref}>
              Get beta updates
            </a>
          </div>
          <div className="wave-rider" aria-hidden="true">
            <span className="wave-rider__fish" />
            <span className="wave-rider__line wave-rider__line--one" />
            <span className="wave-rider__line wave-rider__line--two" />
            <span className="wave-rider__line wave-rider__line--three" />
          </div>
        </div>
      </section>

      <section
        className="section section--brand light-band"
        id="brand-worlds"
        aria-labelledby="brand-worlds-title"
      >
        <div className="section__header">
          <p className="eyebrow">Worlds</p>
          <h2 id="brand-worlds-title">A little nature. A little voltage.</h2>
          <p>
            Aquarium Audio Labs is building creative tools that feel alive in the hand: vivid,
            musical, tactile, and just strange enough to make a session light up.
          </p>
        </div>

        <ul className="brand-list" aria-label="Brand world themes">
          {brandWorlds.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
            Electric Jellyfish Pro is planned as a deeper version for people who want more control,
            more color, and more room to push sounds around. Join the waitlist to shape what comes next.
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
          <p>Pro is not for sale yet; there is no checkout, account, activation, or license flow live.</p>
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
          <span className="footer__mark" aria-hidden="true">
            <img src="./assets/social/aquarium-profile-avatar-320.png" alt="" />
          </span>
          <span>Aquarium Audio Labs</span>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#launch-kit">Coming Soon</a>
          <a href="#plugins">Plugins</a>
          <a href="#beta">Beta</a>
          <a href="#brand-worlds">Worlds</a>
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
