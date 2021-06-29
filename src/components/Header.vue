<template lang="pug">
.header-bar
	.header-content.main-container
		a(href="/")
			img(src="../assets/img/logo-mafornu.svg")
		a.primary-link.white(href="/#formulario-contacto")
			span Envíanos un mensaje
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/components/header.scss";

</style>