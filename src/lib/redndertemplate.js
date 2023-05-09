require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(reactComponent, props, res, req) {
  // const reactElement = React.createElement(reactComponent, props)
  const reactElement = React.createElement(reactComponent, {
    ...props,
    ...res.app.locals,
    ...res.locals,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  res.send(`<!DOCTYPE html>${html}`);
  res.end();
}

module.exports = renderTemplate;
