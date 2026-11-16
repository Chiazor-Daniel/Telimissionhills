import { useState } from 'react';
import Link from 'next/link';
import Seo from '@/components/Seo';
import CaseRow from '@/components/CaseRow';
import { cases, statusLabel } from '@/lib/firm';

const FILTERS = ['all', 'won', 'settled', 'pending'];

export default function Cases() {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? cases : cases.filter((c) => c.status === filter);
  const count = (s) => (s === 'all' ? cases.length : cases.filter((c) => c.status === s).length);

  return (
    <>
      <Seo
        title="Cases"
        description="Matters handled by TelimissionHills & Co. in Port Harcourt: matrimonial and custody judgments, property titles restored, inheritance rights established, and cases pending at the Rivers State High Court."
        path="/cases"
      />
      <section className="page-head">
        <div className="wrap">
          <h1 className="page-title">Cases</h1>
          <p className="lede">
            A record of matters the firm has handled, with where each one stands. Results depend on the facts
            of every case, and past outcomes do not guarantee future ones.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter cases by status">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className="filter"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : statusLabel[f]}
                <span className="filter-count">{count(f)}</span>
              </button>
            ))}
          </div>
          <ol className="docket docket-detailed">
            {shown.map((c) => <CaseRow key={c.id} c={c} detailed />)}
          </ol>
          <div className="cta-band">
            <p>Facing something similar? Talk to a partner about your matter.</p>
            <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
