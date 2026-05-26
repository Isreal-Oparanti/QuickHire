import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-content">
        <p className="tag">QuickHire</p>
        <h1>Welcome, QuickHire</h1>
        <p>Quick help for finding simple job opportunities.</p>

        <div className="landing-actions">
          <Link to="/login">Login</Link>
          <Link to="/signup">Create account</Link>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
