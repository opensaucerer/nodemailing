# NodeMailing - Easily Send Emails in NodeJS

Nodemailing is a lightweight emailing system that takes advantage of SMTP to allow users to easily send emails with little to no configuration at all.

In fact, you only configuration you need is to require the Nodemailing module and call the **send** funtion! Pass your SMTP Host, username, password, recipient, subject, body, and Voila! Your messages gets sent immediately.

To get started run

'''
npm install nodemailing
'''

or go the shorter route

'''
npm i nodemailing
'''

Now, in your NodeJS project, require Nodemailing.

'''
const { Nodemailing } = require('nodemailing')
'''

Now, easily send your email

'''
Nodemailing.send({
Host: //your smtp host,
Username: //your email,
Password: //your email password or app password,
To: //recipient email,
From: //your mail,
Subject: //email subject,
Body: //email body,
}).then((message) =>
//anything goes here....
// console.log("Email has been sent")
);
'''

Tell your recipient to check thier mail, your email just go delivered...!

### Credits to the open source [https://smtpjs.com/](smtpjs)
