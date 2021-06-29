<template>
	<Header/>
	<MensajeAgradecimiento/>
	<Footer/>
  <div class="sticky-cta">
    <a href="https://www.facebook.com/Mafornu" target="_blank">
      <img src="@/assets/img/CTA-fb.svg"/>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MensajeAgradecimiento from '@/components/MensajeAgradecimiento.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Gracias',
  components: {
    Header,
    MensajeAgradecimiento,
    Footer,
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.footer-bottom {
  padding-top: 30px!important;
}
</style>