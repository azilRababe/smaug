import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const sendMail = async ({ name, email, phoneNumber, message }) => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.USER_EMAIL,
      subject: `SmaugX | New message from ${name}`,
      text: `You have received a new message from ${name} (${email}${
        phoneNumber ? `, ${phoneNumber}` : ""
      }):\n\n${message}`,
    });

    console.log(`Message successfully sent. ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, error };
  }
};

export default sendMail;
