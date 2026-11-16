import { statusLabel } from '@/lib/firm';

// One line of the cause list: parties set like a court listing, the area of
// law, what happened, and a status marker.
export default function CaseRow({ c, detailed = false }) {
  return (
    <li className="case-row">
      <div className="case-parties">
        <span>{c.claimant}</span>
        <span className="case-v" aria-label="versus">v</span>
        <span>{c.respondent}</span>
      </div>
      <div className="case-meta">
        <span className="case-area">{c.area}</span>
        {detailed && <p className="case-summary">{c.summary}</p>}
        <span className="case-outcome">{c.outcome}</span>
      </div>
      <span className={`status status-${c.status}`}>{statusLabel[c.status]}</span>
    </li>
  );
}
