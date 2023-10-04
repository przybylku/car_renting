import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";




export default async function sendEmail(to: string){
const mailerSend = new MailerSend({
  apiKey: 'mlsn.d93d86af891ac312348915a37473c6032626951ed2e0f2a4bbc2797d0f2cfa05',
});

const sentFrom = new Sender("you@yourdomain.com", "Your name");


const recipients = [
  new Recipient(to,to)
];
    const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("This is a Subject")
  .setHtml("<strong>This is the HTML content</strong>")
  .setText("This is the text content")
    await fetch("https://api.mailersend.com/v1/email", {
        method: "POST",
        body: JSON.stringify(emailParams),
        headers: {
            "Authorization": "Bearer mlsn.d93d86af891ac312348915a37473c6032626951ed2e0f2a4bbc2797d0f2cfa05",
            "Access-Control-Allow-Origin": "https://car-renting-przybylku.vercel.app",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
            "Content-Type": "application/json",
            "Accept": "application/json"
    
        }
    })
}