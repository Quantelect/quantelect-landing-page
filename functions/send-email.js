const nodemailer = require('nodemailer');  
require('dotenv').config();  
  
exports.handler = async (event, context) => {  
    if (event.httpMethod !== 'POST') {  
        return {  
            statusCode: 405,  
            body: JSON.stringify({ status: 'forbidden' }),  
        };  
    }  
  
    const { name, email, message } = JSON.parse(event.body);  
  
    if (!name || !email || !message) {  
        return {  
            statusCode: 400,  
            body: JSON.stringify({ status: 'validation_error' }),  
        };  
    }  
  
    const transporter = nodemailer.createTransport({  
        host: process.env.SMTP_HOST,  
        port: parseInt(process.env.SMTP_PORT, 10),  
        secure: false, // true for 465, false for other ports  
        auth: {  
            user: process.env.EMAIL_USER,  
            pass: process.env.EMAIL_PASS,  
        },  
        tls: {  
            rejectUnauthorized: false  
        }  
    });  
  
    const mailOptions = {  
        from: `"${name}" <${email}>`, // sender address  
        to: 'info@quantelect.com', // list of receivers  
        subject: `New Contact Form Submission from ${name}`, // Subject line  
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body  
    };  
  
    try {  
        await transporter.sendMail(mailOptions);  
        return {  
            statusCode: 200,  
            body: JSON.stringify({ status: 'success' }),  
        };  
    } catch (error) {  
        return {  
            statusCode: 500,  
            body: JSON.stringify({ status: 'error', error: error.message }),  
        };  
    }  
};  
