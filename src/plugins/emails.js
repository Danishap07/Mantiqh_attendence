// import nodemailer from 'nodemailer'

// async function main(){

//     const testAccount = await nodemailer.createTestAccount();

//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: testAccount.user,
//             pass: testAccount.pass
//         }
//     })

//     const info = await transporter.sendMail({
//         from: '"danish" <danish.mantiqh@gmail.com>',
//         to: "bar@example.com, baz@example.com",
//         subject: "Hello ✔", 
//         text: "Hello world?", 
//         html: "<b>Hello world?</b>"
//     })

//     console.log("message sent: %s", info.messageId);

//     console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// main.catch(console.error);