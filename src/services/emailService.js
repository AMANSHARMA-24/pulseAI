import emailjs from "@emailjs/browser";

export async function sendEmergencyEmail(contact, message, location) {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: contact.name,
        relation: contact.relation,
        message: message,
        location: location,
        time: new Date().toLocaleString(),
        to_email: contact.email
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent:", response);
    return true;

  } catch (error) {
    console.log("Email error:", error);
    return false;
  }
}