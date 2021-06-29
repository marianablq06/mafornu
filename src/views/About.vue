<template>
	<Header/>
	<AvisodePrivacidad/>
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
import Footer from '@/components/Footer.vue'
import AvisodePrivacidad from '@/components/AvisodePrivacidad.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    AvisodePrivacidad
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/global.scss";
</style>