import Link from 'next/link';
import Seo from '@/components/Seo';
import { practiceAreas, SITE_URL } from '@/lib/firm';

export default function PracticeAreas() {
  return (
    <>
      <Seo
        title="Practice areas"
        description="Property and land, family and matrimonial, inheritance, commercial and debt recovery, arbitration, maritime, election and fundamental rights matters in Port Harcourt and Rivers State."
        path="/practice-areas"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: practiceAreas.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: a.title,
            url: `${SITE_URL}/practice-areas#${a.slug}`,
          })),
        }}
      />
      <section className="page-head">
        <div className="wrap">
          <h1 className="page-title">Practice areas</h1>
          <p className="lede">
            We take matters from first advice to judgment, and into settlement when that serves the client better.
            These are the areas we handle most.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap">
          <dl className="areas">
            {practiceAreas.map((a) => (
              <div key={a.slug} id={a.slug} className="area">
                <dt>{a.title}</dt>
                <dd>{a.text}</dd>
              </div>
            ))}
          </dl>
          <div className="cta-band">
            <p>Not sure which of these your matter falls under? Tell us what happened and we will advise.</p>
            <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
