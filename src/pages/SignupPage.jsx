import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage({ onSignup }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();

    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: fullName,
          email,
          password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newUser = await response.json();

      onSignup({ name: newUser.name, email: newUser.email });
      navigate('/dashboard');
    } catch (error) {
      setError('Account could not be created. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="single-auth-page">
      <section className="auth-card">
        <h2>Create account</h2>

        <form onSubmit={handleSignup} className="auth-form">
          <label>
            Full name
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Jane Student"
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create password"
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="primary-button">
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default SignupPage;
