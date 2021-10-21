# NodeMailing - Easily Send Emails in NodeJS

## Yes! No Configuration Needed

Nodemailing is a lightweight emailing system that takes advantage of SMTP to allow users to easily send emails with no configuration at all.

In fact, all you need do is to require the Nodemailing module and call the **send** funtion. Pass your SMTP Host, username, password, recipient, subject, body, and voila! Your messages gets sent immediately.

To get started run

```js
npm install nodemailing
```

or go the shorter route

```js
npm i nodemailing
```

Now, in your NodeJS project, require Nodemailing.

```js
const { Nodemailing } = require('nodemailing');
```

Now, easily send your email

```js
Nodemailing.send({
   Host: //your smtp host,
   Username: //your email,
   Password: //your email password or app password,
   To: //recipient email,
   From: //your email,
   Subject: //email subject,
   Body: //email body,
}).then((message) =>
//anything goes here....
    console.log("Email has been sent")
);
```

Tell your recipient to check thier mail, your email just got delivered...!

## You Can Also Send Dynamic HTML Email Templates

Create your HTML email template and add the variables you want to modify in **{{variable-name}}**. Below is a sample.

```html
<div>
  <h1>Welcome to Nodemailing 101</h1>

  <p>Dear {{username}},</p>
  <p>
    We are so excited to have you here. Nodemailing is a great package and we
    can be sure you will love it!
  </p>

  <p>
    Got any questions as regards this package? You can reach us on GitHub via
    this username: <strong>{{githubID}}</strong>
  </p>
</div>
```

Now that you have your HTML template ready. Call Nodemailing **render** function and pass in the path to your HTML template and the data object containing the values for the variables.

```js
// import nodemialing
const { Nodemailing } = require('nodemailing');
// import the path function
const path = require('path');

// define the path to the HTML template
const filePath = path.join(__dirname, 'relative/path/to/html/file');

// compute the data for the variables
data = {
  username: 'Perfection',
  githubID: 'Samperfect',
};

// this method uses the await syntax to avoid callback hell
async function createTemp() {
  // call nodemailing to render the email
  const emailToSend = await Nodemailing.render(filePath, data);

  //   now call nodemailing to send your mail
  Nodemailing.send({
   Host: , //your smtp host
   Username: , //your email
   Password: , //your email password or app password
   To: , //recipient email
   From:,  //your email
   Subject: "Welcome Message",
   Body: emailToSend,
}).then((message) =>
//anything goes here.... it returns **OK** by default
    console.log(message, "Email has been sent")
).catch(error=>{
// who knows, an error might just occur
    console.log(error)
});
}

// don't forget to call the function
createTemp()
```

And if you prefer to use .then() and .catch(), then you might as well fall into the callback hell below 😎

```js
// import nodemialing
const { Nodemailing } = require('nodemailing');
// import the path function
const path = require('path');

// define the path to the HTML template
const filePath = path.join(__dirname, 'relative/path/to/html/file');

// compute the data for the variables
data = {
  username: 'Perfection',
  githubID: 'Samperfect',
};

// call nodemailing to render the email
Nodemailing.render(filePath, data).then(emailToSend =>{
  // now call nodemailing to send your mail
  Nodemailing.send({
   Host: , //your smtp host
   Username: , //your email
   Password: , //your email password or app password
   To: , //recipient email
   From:,  //your email
   Subject: "Welcome Message",
   Body: emailToSend,
}).then((message) =>
//anything goes here.... it returns **OK** by default
    console.log(message, "Email has been sent")
).catch(error=>{
// who knows, an error might just occur
    console.log(error)
});
}).cath(error=>{
    console.log(error)
});
```

Tell your recipient to check thier mail, your email just got delivered...!
