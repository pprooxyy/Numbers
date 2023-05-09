const React = require('react');
const Layout = require('../layouts/Layout');
const Navbar = require('../components/Navbar');

module.exports = function Hero(props) {
  return (
    <Layout {...props}>
      <Navbar {...props} />
      <div className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="forms-wrapper">
          <h1>Random mathematical fact about given number</h1>
          <div className="form-container">
            <form
              className="form"
              id="mathematical"
              method="POST"
              name="number"
              action="/number/get-info"
            >
              <label htmlFor="number">Type a number:</label>
              <input className="form-input" name="number" type="text" />
              <button className="button-31" type="submit">
                save
              </button>
            </form>
          </div>
          <div className="result-container">
            <h1 className="number-container"></h1>
            <h3 className="info-container"></h3>
          </div>
        </div>
      </div>
      <script src="/js/index.js"></script>
    </Layout>
  );
};
