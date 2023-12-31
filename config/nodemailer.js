require('dotenv').config;
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

// define the transporter object for sending emails using nodemailer
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASS,
    },
});

// function for rendering ejs templates
let renderTemplate = function (data, relativePath) {
    let mailHTML;
    // use ejs to render the ejs template located at the given path using the provided data object
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function (err, template) {
            if (err) {
                console.log('Error : ', err);
                return;
            }
            // set the mailHTML variable to the rendered ejs template
            mailHTML = template;
        }
    );
    // return the rendered ejs template as a string
    return mailHTML;
};

// export the transporter and renderTemplate functions for use in other modules
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate,
};
