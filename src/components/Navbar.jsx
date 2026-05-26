import { Link } from 'react-router-dom';

function Navbar({ currentUser, onLogout }) {
  return (
    <nav className="navbar">
      <Link to={currentUser ? '/dashboard' : '/login'} className="logo">
        QuickHire
      </Link>

      {currentUser ? (
        <div className="nav-actions">
          <span>{currentUser.email}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Create account</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
