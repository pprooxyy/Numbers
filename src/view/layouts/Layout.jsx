const React = require('react');

module.exports = function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/hero.animation.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link rel="stylesheet" href="/css/registration.css" />
        <script
          defer
          src="https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js"
        />

        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};
