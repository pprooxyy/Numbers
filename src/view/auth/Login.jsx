const React = require('react');
const Layout = require('../layouts/Layout');

module.exports = function Registration(props) {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <h2 className="card-title text-center">Login</h2>
          <div className="card-body py-md-4">
            <form
              action="/login"
              method="POST"
              className="login-form"
              name="login-form"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  required
                ></input>
              </div>
              <div>
                <a href="/register">Register</a>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
