import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const user = users.find((person) => person.email === email);

      onLogin({
        name: user ? user.name : 'QuickHire User',
        email,
      });
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="single-auth-page">
      <section className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin} className="auth-form">
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
              placeholder="Enter password"
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="primary-button">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="switch-text">
          New to QuickHire? <Link to="/signup">Create account</Link>
        </p>
      </section>
    </main>
  );
}

export default LoginPage;
