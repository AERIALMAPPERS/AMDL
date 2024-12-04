const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.post("/send-feedback", async (req, res) => {
    const { firstName, lastName, email, date, rating, comments } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password",
        },
    });

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "recipient-email@gmail.com",
        subject: "New Feedback Received",
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Date: ${date}
            Rating: ${rating}
            Comments: ${comments}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Feedback sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ message: "Failed to send feedback." });
    }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
