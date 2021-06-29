<template lang="pug">
.call-to-action
		img(src="../assets/img/eres_lo_que_comes.jpg")
		.text
			h2.center.white.title
				span.rwd-line Eres lo que comes 
				span.rwd-line ¿Qué te gustaría ser?
		.envianos-un-mensaje
			a.big-button(href="/#formulario-contacto") Envíanos un mensaje
</template>
<script>

  export default {
    name: 'BannerFooter',
  }
</script>
<style lang="scss" scoped>
@import "../assets/styles/components/footer.scss";

</style>