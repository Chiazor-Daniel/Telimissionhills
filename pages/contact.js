import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import { firm, fullAddress, practiceAreas } from '@/lib/firm';

const EMPTY = { name: '', phone: '', email: '', area: '', message: '' };

// No server is involved: submitting opens the visitor's email app with the
// message addressed to the firm, so nothing can be silently lost.
function mailtoFor(f) {
  const subject = `Consultation request${f.area ? `: ${f.area}` : ''} from ${f.name}`;
  const body = [
    f.message,
    '',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.email && `Email: ${f.email}`,
    f.area && `Area: ${f.area}`,
  ].filter((l) => l !== false && l !== undefined).join('\n');
  return `mailto:${firm.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [opened, setOpened] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    window.location.href = mailtoFor(form);
    setOpened(true);
  };

  return (
    <>
      <Seo
        title="Contact and consultations"
        description="Book a consultation with TelimissionHills & Co. at No. 197 Odili Road, Trans-Amadi, Port Harcourt. Call 0803 869 4203, 0703 671 9282 or 0806 437 1940."
        path="/contact"
      />
      <section className="page-head">
        <div className="wrap">
          <h1 className="page-title">Book a consultation</h1>
          <p className="lede">Call the office, or describe your matter below and a partner will get back to you.</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap contact-grid">
          <form className="form" onSubmit={submit}>
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input required autoComplete="name" value={form.name} onChange={set('name')} />
              </label>
              <label className="field">
                <span>Phone</span>
                <input required type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} />
              </label>
            </div>
            <label className="field">
              <span>Email <em className="optional">optional</em></span>
              <input type="email" autoComplete="email" value={form.email} onChange={set('email')} />
            </label>
            <label className="field">
              <span>Area of law <em className="optional">optional</em></span>
              <select value={form.area} onChange={set('area')}>
                <option value="">Not sure</option>
                {practiceAreas.map((a) => <option key={a.slug}>{a.title}</option>)}
              </select>
            </label>
            <label className="field">
              <span>What happened</span>
              <textarea required rows={6} value={form.message} onChange={set('message')} />
            </label>
            <button type="submit" className="btn btn-primary">Continue in your email app</button>
            <p className="form-note" role="status">
              {opened
                ? `Your email app should now be open with the message ready. Press send there. If nothing opened, email ${firm.email} or call ${firm.phones[0].display}.`
                : 'This opens your email app with your message ready to send to the firm.'}
            </p>
          </form>

          <aside className="contact-card">
            <div className="contact-item">
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2>Phone</h2>
                <ul className="plain">
                  {firm.phones.map((p) => (
                    <li key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2>Email</h2>
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2>Office</h2>
                <address>{fullAddress}</address>
              </div>
            </div>
            <iframe
              className="map"
              title="Map to the TelimissionHills & Co. office"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(firm.mapQuery)}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
