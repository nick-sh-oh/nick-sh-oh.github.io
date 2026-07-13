import { MailIcon, GitHubIcon, XIcon, LinkedInIcon, SubstackIcon } from '../components/icons.jsx';

const socials = [
  { label: 'Email', href: 'mailto:nick.sh.oh@socius.org', icon: MailIcon },
  { label: 'GitHub', href: 'https://github.com/nick-sh-oh', icon: GitHubIcon },
  { label: 'X', href: 'https://x.com/nickshoh', icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nick-sh-oh/', icon: LinkedInIcon },
  { label: 'Substack', href: 'https://rawlog.substack.com/', icon: SubstackIcon },
];

export default function About() {
  return (
    <article className="page about">
      <div className="about-header">
        <div className="about-intro">
          <h1>Nick (Seungheon) Oh</h1>
          <p className="subtitle">
            Researcher @ <a href="https://www.socius.org/">socius labs</a>
          </p>
        </div>
        <img
          className="profile-img"
          src="/profile.jpg"
          alt="Nick (Seungheon) Oh"
          width="200"
          height="200"
        />
      </div>

      <div className="prose">
        <p>
          Hi there! I’m Nick (Seungheon) Oh, a researcher experimenting at the intersection between
          every field that ever studied “thinking” and every machine that’s trying to “think”
          (which is a long-winded way of saying cognitive science).
        </p>
        <p>
          These days, I’m advised by{' '}
          <a href="https://scholar.google.com/citations?user=jeJqwKsAAAAJ">
            Professor Fernand Gobet
          </a>
          , collaborating on bridging cognitive psychology and machine intelligence.
        </p>
        <p>
          <strong>A bit about myself</strong>: After studying Politics and Economics at{' '}
          <a href="https://www.lse.ac.uk/">LSE</a>, I worked as a Junior NLP Engineer at a
          London-based hedge fund while sketching out{' '}
          <a href="https://www.socialscience.ai">socialscience.ai</a> — a side project to bring ML
          models to social scientists. But building it revealed the more interesting question was
          the reverse. Instead of AI/ML serving social science, what if the disciplines that
          studied humans could advance machine intelligence? That flip became{' '}
          <a href="https://socius.org">socius labs</a>, now an independent research lab supported by
          LSE and LSE Generate exploring this convergence.
        </p>
        <p>
          <strong>Research interests</strong>: I use neural networks of varying scales and
          architectures (from RNNs to LLMs) as cognitive proxies, both to understand cognition at
          the individual level and to test social-scientific theories at scales impossible with
          human subjects. Increasingly, I’m drawn to their latent space: whether reasoning can
          unfold there without ever surfacing as text, and whether we can measure, and even steer,
          subjective “feelings” or “beliefs” in machines.
        </p>
      </div>

      <div className="socials">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            className="social-link"
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
