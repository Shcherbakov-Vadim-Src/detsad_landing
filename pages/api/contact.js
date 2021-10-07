

export default async function (req, res) {
    require('dotenv').config();

    let pass = await process.env.password;
    console.log('pass', pass);

    let nodemailer = require('nodemailer')

    let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",  
        port: 465,
        secure: true,
        auth: {
            user: 'bootmailer.ru@gmail.com',  
            pass: 'bootmailer1209.',         
        },
    });

    let mail = {
        name: req.body.name,
        phone: req.body.phone,
        mail: req.body.mail,
        site: req.body.site
    }

    let info = await transporter.sendMail({
        from: "bootmailer.ru@gmail.com",  
        to: `${mail.mail}`,        
        subject: "Your new Baby house ✔",
        text: `Добрый день ${mail.name}, Мы получили Ваш заказ на посещение детского сада`,
        html: `<b>Добрый день ${mail.name}, Мы получили Ваш заказ на посещение нашего Детского сада. Мы ожидаем Вас ${mail.site}. Проверьте, пожалуйста, Ваши контактные данные: ${mail.name}, ${mail.phone}, ${mail.mail}</b>`
    });


    console.log("Message sent", info);

    res.status(200)

}