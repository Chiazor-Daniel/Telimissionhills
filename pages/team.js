import Image from 'next/image';
import Seo from '@/components/Seo';
import { partners } from '@/lib/firm';

export default function Team() {
  return (
    <>
      <Seo
        title="Team"
        description="The partners of TelimissionHills & Co.: Nwoke Godwin Okezie (Lead Partner), Noel Eloho Ighota and Regina Oreighe Ovoro, legal practitioners in Port Harcourt."
        path="/team"
      />
      <section className="page-head">
        <div className="wrap">
          <h1 className="page-title">The partners</h1>
          <p className="lede">Three partners with over 30 years post-call between them. Every matter is led by one of them.</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap team-list">
          {partners.map((p, i) => (
            <article key={p.slug} id={p.slug} className="profile">
              <Image
                src={p.image}
                alt={`Portrait of ${p.name}`}
                width={720}
                height={1080}
                priority={i === 0}
                sizes="(max-width: 700px) 100vw, 320px"
              />
              <div>
                <h2 className="profile-name">{p.name}</h2>
                <p className="profile-role">{p.role}</p>
                <ul className="credentials">
                  {p.credentials.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
