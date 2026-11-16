import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found | TelimissionHills & Co.</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="page-head page-404">
        <div className="wrap">
          <h1 className="page-title">This page does not exist</h1>
          <p className="lede">It may have moved when the site was rebuilt.</p>
          <div className="actions">
            <Link href="/" className="btn btn-primary">Go to the home page</Link>
            <Link href="/contact" className="btn btn-quiet">Contact the office</Link>
          </div>
        </div>
      </section>
    </>
  );
}
