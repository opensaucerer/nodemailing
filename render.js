// importing required packages
const { readFile } = require('fs');
const handlebars = require('handlebars');

// defining the Render class
class Render {
  constructor() {
    // instantiaing the class
  }

  // helper function for opening files
  openFile(path) {
    return new Promise((resolve, reject) => {
      readFile(path, { encoding: 'utf-8' }, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  // helper function for rending the HTML template
  async renderTemplate(path, data) {
    const template = await this.openFile(path);

    const render = handlebars.compile(template);

    return render(data);
  }
}

module.exports = { Render };
