<template lang="pug">
section.formulario-contacto
	.row-flex.row-formulario-contacto
		.seguimos-creciendo
			p.center.description.white
				span.rwd-line Aquí empieza el balance de un mejor 
				span.rwd-line futuro, <span class="strong"> desde 1974 </span>
			h1.title.center.white
				span.rwd-line Seguimos creciendo y 
				span.rwd-line queremos que seas parte de 
				span.rwd-line nuestra familia
		.formulario(id="formulario-contacto" @submit.prevent="sendContactMessage()")
			h2.center.description.blue ¡A sus órdenes!
			form.form-container#contact-form
				.row-form
					.input
						label.blue Nombre*
						input(type="text" name="Nombre" required v-model="nombre")
					.input
						label.blue Correo*
						input(type="email" name="Correo" required v-model="correo")
				.row-form
					.input
						label.blue Teléfono*
						input(type="tel" pattern="[0-9]{10}" name="telefono" required v-model="telefono")
					.input
						label.blue Me interesa saber sobre:
						.row-flex
							.radio
								label.container(for="distribuidor")
									span.label Distribuidores
									input(type="radio" id="distribuidor" name="tipo-cliente" @change="distribuidor = !distribuidor" value="Distribuidores" checked v-model="interes")
									span.checkmark
							.radio
								label.container(for="productos") 
									span.label Productos
									input(type="radio" id="productos" name="tipo-cliente" @change="distribuidor = !distribuidor" value="Productos" v-model="interes")
									span.checkmark
				.row-form.no-wrap(v-if="distribuidor")
					.input
						label.blue Estado*
						input(type="text" name="estado" required v-model="estado")
					.input
						label.blue Municipio*
						input(type="text" name="municipio" required v-model="municipio")
				.row-form(v-if="distribuidor")
					.input
						label.blue Colonia*
						input(type="text" name="colonia" required v-model="colonia")
					.input
						label.blue Mensaje*
						input(type="text" name="mensaje" required v-model="mensaje")
				.row-form(v-if="!distribuidor")
					.input
						label.blue Selecciona un producto
						select(name="producto" required v-model="producto")
							option(disabled value="") Productos
							option(value="Alimentos para Aves") Alimentos para Aves
							option(value="Alimentos para Cerdos") Alimentos para Cerdos
							option(value="Alimentos para Caballos") Alimentos para Caballos
							option(value="Alimentos para Borregos") Alimentos para Borregos
							option(value="Alimentos para Ganado de Engorda") Alimentos para Ganado de Engorda
							option(value="Alimentos para Ganado Lechero") Alimentos para Ganado Lechero
					.input
						label.blue Mensaje*
						input(type="text" required v-model="mensaje")
				input(type="submit" value="Enviar")
.row-flex.somos-el-resultado
	.shape
		img(src="../assets/img/background-formulario.png")
	.text()
		p.center.blue.description
			span.rwd-line Somos el resultado de lo que 
			span.rwd-line comemos, por eso nos 
			span.rwd-line comprometemos con el 
				strong cuidado y 
			span.rwd-line 
				strong bientestar animal, 
				| creando alimentos 
			span.rwd-line 
				strong balanceados, palatables y altos en 
			span.rwd-line
				strong energía.

	.img
		img(src="../assets/img/Foto-Vacas.png")
</template>
<script>

export default {
	name: 'FormularioContacto',
	data () {
		return {
			nombre: '',
			correo: '',
			telefono: '',
			interes: '',
			estado: '',
			municipio: '',
			colonia: '',
			mensaje: '',
			producto: '',
			distribuidor: true
		}
	},
	methods: {
		sendContactMessage() {
			if(this.distribuidor) {
				const url = `https://us-central1-mafornu-1f72f.cloudfunctions.net/sendEmail?email_from=${this.correo}&message=${this.mensaje}&phone=${this.telefono}&name=${this.nombre}&municipio=${this.municipio}&estado=${this.estado}&colonia=${this.colonia}`;
				const requestOptions = {
					method: "GET",
					headers: { "Content-Type" : "application/json", "Access-Control-Allow-Origin" : "firestore.googleapis.com"}
				};
				fetch(url, requestOptions);
				this.$router.push('gracias-por-tu-mensaje');
			} else {
				const url = `https://us-central1-mafornu-1f72f.cloudfunctions.net/sendEmailProduct?email_from=${this.correo}&product=${this.producto}&phone=${this.telefono}&name=${this.nombre}&message=${this.mensaje}`;
				const requestOptions = {
					method: "GET",
					headers: { "Content-Type" : "application/json", "Access-Control-Allow-Origin" : "firestore.googleapis.com"}
				};
				fetch(url, requestOptions);
				this.$router.push('gracias-por-tu-mensaje');
			}
			
			
		}
	}
	
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/components/formulario-contacto.scss";

</style>