import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, role, isEmergency } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const colors = {
      emerald: "#002A26",
      gold: "#D4AF37",
      bg: "#f4f4f4",
      white: "#ffffff",
      text: "#333333",
      alert: "#dc2626"
    }



    // رابط اللوجو
    const logoUrl = `https://alftian.vercel.app/images/FullLogo_Transparent.png`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: ${colors.text}; margin: 0; padding: 0; background-color: ${colors.bg}; }
          .container { max-width: 600px; margin: 20px auto; background-color: ${colors.white}; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background-color: ${colors.emerald}; padding: 30px; text-align: center; border-bottom: 3px solid ${colors.gold}; }
          .content { padding: 30px; }
          .tag { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
          .tag-role { background-color: ${colors.emerald}; color: ${colors.white}; }
          .tag-urgent { background-color: ${colors.alert}; color: ${colors.white}; }
          .field { margin-bottom: 20px; }
          .label { display: block; font-size: 12px; color: #888; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 16px; font-weight: 500; color: ${colors.text}; }
          .message-box { background-color: #f9f9f9; padding: 20px; border-left: 4px solid ${colors.gold}; margin-top: 20px; border-radius: 4px; }
          .footer { background-color: #eee; padding: 20px; text-align: center; font-size: 12px; color: #888; }
          .logo-img { max-width: 180px; height: auto; display: block; margin: 0 auto; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${logoUrl}" alt="Alftian Facility & Bau" class="logo-img" />
            
            </div>

          <div class="content">
            <div style="margin-bottom: 25px;">
              <span class="tag tag-role">${role === 'investor' ? 'Investor / Partner' : 'Tenant / Resident'}</span>
              ${isEmergency ? `<span class="tag tag-urgent" style="margin-left: 10px;">🚨 URGENT PRIORITY</span>` : ''}
            </div>

            <div class="field">
              <span class="label">Sender Name</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email Address</span>
              <div class="value"><a href="mailto:${email}" style="color: ${colors.emerald}; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Alftian Facility & Bau GmbH. Automated System.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@alftian-bau.com",
      subject: `${isEmergency ? "🚨 URGENT:" : "New Inquiry:"} ${name} - Alftian Website`,
      html: emailHtml,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Server Error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}