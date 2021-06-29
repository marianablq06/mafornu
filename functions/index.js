const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, 
  auth: {
    user: "apikey",
    pass: "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"
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
	const email_from = request.query.email_from;
	const phone = request.query.phone;
	const name = request.query.name;
	const municipio = request.query.municipio;
	const estado = request.query.estado;
	const colonia = request.query.colonia;
	const message = request.query.message;

	const mailOptions = {
		from: 'Mafornu <ventas@mafornu.mx>',
		to: 'ventas@mafornu.mx, ventas@mafornu.com',
		subject: 'Me interesa ser distribuidor | Nuevo formulario de contacto ',
		html: `Nombre: ${name}<br>
		Correo Electrónico: ${email_from}<br>
		Teléfono: ${phone}<br>
		Estado: ${estado}, Municipio: ${municipio}, Colonia: ${colonia}<br>
		Mensaje: ${message}`
	}

	transporter.sendMail(mailOptions, (error, info) =>{
		if(error) {
			console.log('Error');
			response.send(error.toString());
		}
		response.send('Mensaje Enviado');
	});
})

exports.sendEmailProduct = functions.https.onRequest((request, response) => {
	const email_from = request.query.email_from;
	const message = request.query.message;
	const product = request.query.product;
	const phone = request.query.phone;
	const name = request.query.name;

	const mailOptions = {
		from: 'Mafornu <ventas@mafornu.mx>',
		to: 'ventas@mafornu.mx, ventas@mafornu.com',
		subject: 'Me interesa un producto | Nuevo formulario de contacto ',
		html: `Nombre: ${name}<br>Correo Electrónico: ${email_from}<br>Teléfono: ${phone}<br>Producto de interés: ${product}<br>Mensaje: ${message}`
	}

	transporter.sendMail(mailOptions, (error, info) =>{
		if(error) {
			console.log('Error');
			response.send(error.toString());
		}
		response.send('Mensaje Enviado');
	});
})