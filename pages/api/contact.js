import sendMail from "../../utils/nodemailer";

const contactHandler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, phoneNumber, message } = req.body;

    try {
      await sendMail({ name, email, phoneNumber, message });
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: `Failed to send message | ${error}` });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default contactHandler;
