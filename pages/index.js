import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import CaseRow from '@/components/CaseRow';
import { cases, firm, fullAddress, partners, practiceAreas, testimonials } from '@/lib/firm';

const featured = cases.filter((c) => c.featured);
const mainPhone = firm.phones[0];

export default function Home() {
  return (
    <>
      <Seo
        title="TelimissionHills & Co. | Lawyers in Port Harcourt"
        description="Port Harcourt law firm for property and land, family, inheritance, commercial and maritime matters. Three partners at 197 Odili Road, Trans-Amadi. Call 0803 869 4203."
        path="/"
      />

      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/partners.jpg"
            alt={`The partners of ${firm.name}: ${partners[0].name}, ${partners[2].name} and ${partners[1].name}`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 70vw"
          />
        </div>
        <div className="wrap">
          <div className="hero-text rise">
            <h1 className="display">From first advice to judgment</h1>
            <p className="lede">Property, family and business law, handled by three partners.</p>
            <div className="actions">
              <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
              <a href={`tel:${mainPhone.tel}`} className="btn btn-quiet">
                <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                {mainPhone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split-head">
          <div>
            <h2 className="h2">Selected matters</h2>
            <p className="sub">Cases the firm has handled, listed as they appear before the court</p>
          </div>
          <Link href="/cases" className="link-arrow">All {cases.length} cases <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
        </div>
        <div className="wrap">
          <ol className="docket">
            {featured.map((c) => <CaseRow key={c.id} c={c} />)}
          </ol>
        </div>
      </section>

      <section className="section section-raised">
        <div className="wrap split-head">
          <div>
            <h2 className="h2">Practice areas</h2>
            <p className="sub">Where most of our work comes from</p>
          </div>
          <Link href="/practice-areas" className="link-arrow">Details <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
        </div>
        <div className="wrap">
          <ul className="areas-compact">
            {practiceAreas.map((a) => (
              <li key={a.slug}><Link href={`/practice-areas#${a.slug}`}>{a.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split-head">
          <div>
            <h2 className="h2">The partners</h2>
            <p className="sub">Over 30 years post-call between them</p>
          </div>
          <Link href="/team" className="link-arrow">Profiles <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></Link>
        </div>
        <div className="wrap partner-grid">
          {partners.map((p) => (
            <Link key={p.slug} href={`/team#${p.slug}`} className="partner">
              <Image src={p.image} alt={p.name} width={720} height={1080} sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="partner-name">{p.name}</span>
              <span className="partner-role">{p.role}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-raised">
        <div className="wrap">
          <h2 className="h2">From clients</h2>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure key={t.name} className="quote">
                <blockquote>{t.quote}</blockquote>
                <figcaption><span>{t.name}</span> {t.org}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap office">
          <Image
            src="/office-sign.jpg"
            alt="Law office sign at No. 197 Odili Road, Port Harcourt"
            width={720}
            height={430}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div>
            <h2 className="h2">Visit the office</h2>
            <address className="office-address">{fullAddress}</address>
            <ul className="plain office-phones">
              {firm.phones.map((p) => (
                <li key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></li>
              ))}
            </ul>
            <div className="actions">
              <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
              <a
                className="btn btn-quiet"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firm.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
