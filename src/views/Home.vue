<template>
	<Header/>
	<FormularioContacto/>
	<SliderProductos/>
	<div class="footer-container">
		<BannerFooter/>
		<Footer/>
	</div>
  <div class="sticky-cta">
    <a href="https://www.facebook.com/Mafornu" target="_blank">
      <img src="@/assets/img/CTA-fb.svg"/>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import FormularioContacto from '@/components/FormularioContacto.vue'
import SliderProductos from '@/components/SliderProductos.vue'
import Footer from '@/components/Footer.vue'
import BannerFooter from '@/components/BannerFooter.vue'

export default {
  name: 'Home',
  components: {
    Header,
    FormularioContacto,
    SliderProductos,
    Footer,
    BannerFooter
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/global.scss";
</style>