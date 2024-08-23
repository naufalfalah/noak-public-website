import { NextRequest, NextResponse } from "next/server";

import { sendEmail } from "@/lib/sendgrid";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const { text, html } = await req.json();

    try {
        await sendEmail({
            to: "hello@noak.sg",
            from: {
                email: "no-reply@noak.sg",
                name: "Noak",
            },
            subject: "Noak Book Demo",
            text,
            html,
        });
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error: any) {
        return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}
