import Image from 'next/image';
import Link from 'next/link';
import Seo from '@/components/Seo';
import { firm, mission } from '@/lib/firm';

export default function About() {
  return (
    <>
      <Seo
        title="About the firm"
        description="TelimissionHills & Co. is a Port Harcourt firm of legal practitioners, property consultants and allied services, led by three partners with over 30 years post-call experience."
        path="/about"
      />
      <section className="page-head">
        <div className="wrap">
          <h1 className="page-title">About the firm</h1>
          <p className="lede">
            {firm.name} is a firm of legal practitioners, property consultants and allied services, constituted by
            three partners with over 30 years post-call experience between them.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap office">
          <Image
            src="/office-sign.jpg"
            alt="Law office sign at No. 197 Odili Road, Port Harcourt"
            width={720}
            height={418}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <dl className="mission">
            <div><dt>What we aim for</dt><dd>{mission.aim}</dd></div>
            <div><dt>How we work</dt><dd>{mission.commitment}</dd></div>
            <div><dt>Where we are going</dt><dd>{mission.vision}</dd></div>
          </dl>
        </div>
        <div className="wrap">
          <div className="cta-band">
            <p>See the matters we have handled, or meet the partners.</p>
            <div className="actions">
              <Link href="/cases" className="btn btn-primary">View cases</Link>
              <Link href="/team" className="btn btn-quiet">Meet the partners</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
