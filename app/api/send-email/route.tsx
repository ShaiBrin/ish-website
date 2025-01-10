import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
  const { name, email, subject, message } = await req.json();

  // Set up the email transporter (using Outlook)
  const transporter = nodemailer.createTransport({
    service: 'hotmail', // Use 'hotmail' for Outlook
    auth: {
      user: process.env.EMAIL_USER, // Your Outlook email address
      pass: process.env.EMAIL_PASS, // Your app password or OAuth2 token
    },
  });

  // Define the email content
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: subject,
    text: `You have received a message from: ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Error sending email.' }),
      { status: 500 }
    );
  }
};
