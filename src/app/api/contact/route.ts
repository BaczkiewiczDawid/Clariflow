import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Brak wymaganych pól" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: "Clariflow <no-reply@clariflow.pl>",
            to: ["kontakt@clariflow.pl"],
            replyTo: email,
            subject: `Wiadomość z formularza od ${name}`,
            html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <h2>Nowa wiadomość z formularza Clariflow</h2>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Wiadomość:</strong><br/>${message}</p>
          <hr/>
          <p style="font-size:12px;color:#777">Wysłano automatycznie przez formularz na stronie clariflow.pl</p>
        </div>
      `,
        });

        if (error) {
            console.error("Błąd Resend:", error);
            return NextResponse.json({ error: "Nie udało się wysłać wiadomości" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("Błąd przy wysyłaniu maila:", err);
        return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
    }
}
