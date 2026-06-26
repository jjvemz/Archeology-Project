import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { error } = await resend.emails.send({
    from: "Congreso del Pacífico <contacto@congresopacifico.cl>",
    to: process.env.CONTACT_TO_EMAIL ?? "",
    reply_to: email,
    subject: `[Congreso Pacífico] ${subject}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) return res.status(500).json({ error });
  res.status(200).json({ success: true });
}
