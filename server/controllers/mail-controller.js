const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {
    const  {email}  = req.body;
    console.log(req.body);

    if(!email){
        console.log("Email Not Found");
    }

    const emailhtml = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Indian Tourism</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                text-align: center;
            }
    
            .header h1 {
                color: #333;
            }
    
            .content {
                margin-top: 20px;
                text-align: center;
            }
    
            .content p {
                color: #555;
                font-size: 16px;
                line-height: 1.6;
            }
    
            .footer {
                margin-top: 20px;
                text-align: center;
                color: #777;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Indian Tourism!</h1>
            </div>
            <div class="content">
                <p>Dear User,</p>
                <p>Thank you for joining our community! We are thrilled to have you on board.</p>
                <p>Explore and enjoy the features of our website. If you have any questions or need assistance, feel free to
                    contact us.</p>
                    <a href="#" style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;" class="cta-button">Get Started</a>
            </div>
            <div class="footer">
                <p>Best Regards,<br>Team Harikesh</p>
            </div>
        </div>
    </body>
    
    </html>
    
    `;


try {
    let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
    },
});




let info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: `${email}`,
    subject: "Email Verification",
    html: emailhtml,
});


console.log("Message sent: %s", info.messageId);

res.json(info);

console.log("Mail Successfully Sent");

// Modify the catch block to log the error details
} catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
}

};

module.exports = sendMail;