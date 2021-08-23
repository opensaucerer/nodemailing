/* Nodemailing - v1.0.4 */
const { mailer } = require('./mailer');
const { Render } = require('./render');
// instantiating the render class
const render = new Render();

// creating the Nodemailing object to contain necessary functions
var Nodemailing = {
  send: mailer.send,
  render: (path, data) => {
    return render.renderTemplate(path, data);
  },
};

module.exports = { Nodemailing };
