<template lang="pug">
section.mensaje-agradecimiento
	.row-flex.row-formulario-contacto
		.seguimos-creciendo
			p.center.description.white
				span.rwd-line Aquí empieza el balance de un mejor 
				span.rwd-line futuro, <span class="strong"> desde 1974 </span>
			h1.title.center.white
				span.rwd-line Seguimos creciendo y 
				span.rwd-line queremos que seas parte de 
				span.rwd-line nuestra familia
		.formulario(id="formulario-contacto")
			h2.center.orange 
				span.rwd-line ¡Ya nos llegó tu mensaje,
				span.rwd-line compadre!
			h3.center.description.blue Nuestro equipo se pondrá en contacto
			.center
				a.btn-primary(href="/#formulario-contacto") Envíanos otro mensaje
</template>
<script>
export default {
	name: 'MensajeAgradecimiento',
	data () {
		return {
			distribuidor: true
		}
	},
	
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/components/mensaje-agradecimiento.scss";

</style>