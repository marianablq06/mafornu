<template lang="pug">
.container-slider
	.main-container
		h2.subtitle.center.blue
			|Porque un buen 
			strong alimento
			|, promete un buen 
			strong futuro
			|:
		.mafornu-products
			agile(:dots="false", :navButtons="false", ref="carousel")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Aves
							ul.description
								li
									h4 Alimento Revoltura Pájaro
								li
									h4 Gallo de Oro
								li
									h4 Gallo Mantenimiento
								li
									h4 Gallo Mantenimiento Tapatío
								li
									h4 Mezcla de Granos
								li
									h4 Super Casta 
								
								

						.image-product
							img(src="../assets/img/Sello-Aves.png")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Cerdos
							ul.description
								li
									h4 Iniciación
								li
									h4 Crecimiento
								li
									h4 Desarrollo
								li
									h4 Engorda
								li
									h4 Engorda Especial
								li
									h4 Engorda Cerdos Especial Hi-Magra
								li
									h4 Reproductora Gestación "N"
								li
									h4 Reproductora Lactancia "N"
								li
									h4 Iniciación Cerdos Hi-Magra
								li
									h4 Crecimiento Cerdos Hi-Magra
								li
									h4 Reproducción Gestación 
								li
									h4 Reproducción Lactancia


						.image-product
							img(src="../assets/img/Sello-Cerdos.png")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Caballos
							ul.description
								li
									h4 Caballos Pel Rol
								li
									h4 Manzana Caballos Pel Rol
						.image-product
							img(src="../assets/img/Sello-Caballos.png")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Borregos
							ul.description
								li
									h4 Alimento Borregos
								li
									h4 Iniciación Borregos
								li
									h4 Borregas

						.image-product
							img(src="../assets/img/Sello-Borregos.png")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Ganado de Engorda
							ul.description
								li
									h4 Desarrollo Becerros 16
								li
									h4 Engorda Ganado Sostenimiento
								li
									h4 Engorda Ganado 12 Normal
								li
									h4 Engorda Ganado 12 Especial
								li
									h4 Engorda Ganado 12 L.E. ZMX
						.image-product
							img(src="../assets/img/Sello-Ganado2.png")
				.slide
					.row-flex
						.description-product
							h3.blue.subtitle
								span.rwd-line Alimentos para 
								span.rwd-line Ganado de Lechero
							ul.description
								li
									h4 Línea Super
								li
									h4 Línea Normal
								li
									h4 Línea Plus
								li
									h4 Línea Especial
								li
									h4 Línea Ultra M.E.
								li
									h4 Línea Altas Productoras
								li
									h4 Iniciación Becerras 18
								li
									h4 Cría Becerras 16
								li
									h4 Desarrollo Vaquillas 14
								li
									h4 Vacas Secas
								li
									h4 Vacas Transición
						.image-product
							img(src="../assets/img/sello-vacas.png")
			.navigation-slider-items
				button.navigation-slider.prev(@click="$refs.carousel.goToPrev()")
					svg(width='38px', height='34px', viewBox='0 0 38 34', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
						defs
							polygon#path-1(points='0 0 22 0 22 33 0 33')
						g#Page-1(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
							g(id='1.0-Landing', transform='translate(-100.000000, -1442.000000)')
								g#icon-arrow(transform='translate(117.000000, 1459.000000) scale(-1, 1) translate(-117.000000, -1459.000000) translate(100.000000, 1442.000000)')
									g#Flecha-Izquierda(transform='translate(23.000000, 16.613636) scale(1, -1) translate(-23.000000, -16.613636) translate(12.000000, 0.113636)')
										mask#mask-2(fill='white')
											use(xlink:href='#path-1')
										g#Clip-5
										path#Fill-4(d='M0.545351287,31.8572848 C-0.359066533,30.5917278 -0.113152322,28.8033785 1.09455969,27.854925 L15.5980334,16.499193 L1.09455969,5.14060421 C-0.113152322,4.19215062 -0.359066533,2.40380138 0.545351287,1.14110112 C1.44976911,-0.118742353 3.16297144,-0.372996478 4.37068346,0.566886747 L20.3742338,13.0996154 C21.3906792,13.8966592 21.9972676,15.1622162 22,16.4934794 C22,17.8275994 21.3934116,19.0960132 20.3769662,19.8959138 L4.37068346,32.4314992 C3.87885503,32.8143088 3.30505521,33 2.73398776,33 C1.90334421,33 1.08089779,32.6057633 0.545351287,31.8572848 Z', fill='#0A253F', mask='url(#mask-2)')
									line#Path-3(x1='0.404326923', y1='16.6136364', x2='28.4423077', y2='16.6136364', stroke='#0A253F', stroke-width='7', stroke-linecap='round', stroke-linejoin='round')

				button.navigation-slider.next(@click="$refs.carousel.goToNext()")
					svg(width='38px', height='34px', viewBox='0 0 38 34', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
						defs
							polygon#path-1(points='0 0 22 0 22 33 0 33')
						g#Page-1(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
							g(id='1.0-Landing', transform='translate(-1228.000000, -1442.000000)')
								g#icon-arrow(transform='translate(1232.000000, 1442.000000)')
									g#Flecha-Izquierda(transform='translate(23.000000, 16.613636) scale(1, -1) translate(-23.000000, -16.613636) translate(12.000000, 0.113636)')
										mask#mask-2(fill='white')
											use(xlink:href='#path-1')
										g#Clip-5
										path#Fill-4(d='M0.545351287,31.8572848 C-0.359066533,30.5917278 -0.113152322,28.8033785 1.09455969,27.854925 L15.5980334,16.499193 L1.09455969,5.14060421 C-0.113152322,4.19215062 -0.359066533,2.40380138 0.545351287,1.14110112 C1.44976911,-0.118742353 3.16297144,-0.372996478 4.37068346,0.566886747 L20.3742338,13.0996154 C21.3906792,13.8966592 21.9972676,15.1622162 22,16.4934794 C22,17.8275994 21.3934116,19.0960132 20.3769662,19.8959138 L4.37068346,32.4314992 C3.87885503,32.8143088 3.30505521,33 2.73398776,33 C1.90334421,33 1.08089779,32.6057633 0.545351287,31.8572848 Z', fill='#0A253F', mask='url(#mask-2)')
									line#Path-3(x1='0.404326923', y1='16.6136364', x2='28.4423077', y2='16.6136364', stroke='#0A253F', stroke-width='7', stroke-linecap='round', stroke-linejoin='round')


</template>
<script>
import { VueAgile } from 'vue-agile'

  export default {
    name: 'SliderProductos',
    components: { agile: VueAgile, },
  }
</script>
<style lang="scss" scoped>
@import "../assets/styles/components/slider-productos.scss";

</style>