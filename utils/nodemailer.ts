import nodemailer from "nodemailer";

interface MailData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL || "azilrababe@gmail.com",
    pass: process.env.USER_PASSWORD || "gzpm aaui cyfd dzaf",
  },
});

// export const sendMail = async ({
//   name,
//   email,
//   phoneNumber,
//   message,
// }: MailData) => {
//   const info = await transporter.sendMail({
//     from: email,
//     to: process.env.USER_EMAIL,
//     subject: `SmaugX | New message from ${name}`,
//     text: message,
//   });

//   console.log("Message sent: %s", info.messageId);
// };

export const sendMail = async ({
  name,
  email,
  phoneNumber,
  message,
}: MailData) => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.USER_EMAIL || "azilrababe@gmail.com",
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
