const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="navbar-container">
      <a className="logo-link" href="/">
        <img className="navbar-logo" src="/assets/logo.png" alt="logo" />
      </a>
      <ul className="navbar-ul">
        <li>
          <a href="/number">Number</a>
        </li>
        <li>
          <a href="/date">Date</a>
        </li>
        <li>
          <a href="/year">Year</a>
        </li>
        <li>
          <a href="/mathematical">Mathematical</a>
        </li>
      </ul>
      {user ? (
        <div className="navbar-profile-container-user">
          <a href="">{user.name}</a>
          <a href="/logout">
            <i
              className="fa fa-sign-out"
              style={({ fontSize: 48 + 'px' }, { color: 'blue' })}
            ></i>
          </a>
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="/assets/profile-img.png"
              alt="profile-img"
            />
          </div>
        </div>
      ) : (
        <div className="navbar-profile-container">
          <a href="/register">Register</a>
          <a href="/login">Log In</a>
        </div>
      )}
    </div>
  );
};
