import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface EmailData {
    to: string;
    from: {
        email: string;
        name: string;
    };
    subject: string;
    text: string;
    html: string;
}

export async function sendEmail({ to, from, subject, text }: EmailData): Promise<void> {
    try {
        const result = await sgMail.send({ to, from, subject, text });
        console.log("Email sent successfully: ", result);
    } catch (error: any) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error(error.response.body);
        }
        throw new Error(error.message);
    }
}
