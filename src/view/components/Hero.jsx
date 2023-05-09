const React = require('react');
const Layout = require('../layouts/Layout');
const Navbar = require('../components/Navbar');

module.exports = function Hero(props) {
  return (
    <Layout {...props}>
      <Navbar {...props} />
      <div className="hero-container">
        <div className="hero">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="hero-content-container">
            <h1>Welcome to the Numbers!</h1>
            <h2>
              Here you can get some information about a number, date, year or
              even mathematical expression.
            </h2>
            <div className="cases-container">
              <div className="case-exmple">
                <h4>Random number fact:</h4>
                <div className="box">
                  <p id="typed-number"></p>
                </div>
              </div>
              <div className="case-exmple">
                <h4>Random date fact:</h4>
                <div className="box">
                  <p id="typed-date"></p>
                </div>
              </div>
              <div className="case-exmple">
                <h4>Random mathematical fact:</h4>
                <div className="box">
                  <p id="typed-mathematical"></p>
                </div>
              </div>
              <div className="case-exmple">
                <h4>Random year fact:</h4>
                <div className="box">
                  <p id="typed-year"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/js/typed.js"></script>
    </Layout>
  );
};
