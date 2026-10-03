import Link from "next/link";
export default function MarketingHeader() {
  return (
    <header className="marketing-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-badge">RV</span><span>RealVolt</span>
        </Link>
        <nav className="nav-row">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/property-websites">Property Websites</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-outline" href="/login">Log in</Link>
          <Link className="btn btn-primary" href="/signup">Start free</Link>
        </div>
      </div>
    </header>
  );
}
