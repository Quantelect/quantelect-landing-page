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
    port: process.env.SMTP_PORT,  
    secure: false, // false for STARTTLS  
    auth: {  
      user: process.env.EMAIL_USER, // your SMTP username from .env  
      pass: process.env.EMAIL_PASS, // your SMTP token from .env  
    },  
    tls: {  
      rejectUnauthorized: false  
    }  
  });  

  const mailOptions = {  
    from: email,  
    to: 'info@quantelect.com',  
    subject: `New Contact Form Submission from ${name}`,  
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,  
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
