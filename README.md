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

### Credits to the open source [smtpjs](https://smtpjs.com/)
