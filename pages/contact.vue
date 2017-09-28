<template>
<defaultpage class="beige-background" id="contact">


  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding" style="text-decoration:underline">CONTACT</h1>
  </div>



  <div id="" class="section section-last pink-background black-color-force uk-padding uk-padding-remove-horizontal uk-padding-remove-top">

    <div class="slantTopLeft"></div>

    <div class="uk-container ">

      <templatefooter ignoreFirstColumn=true passHeader="Contact"></templatefooter>
      <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
        <div uk-grid class="uk-padding uk-padding-remove-horizontal">

          <div class="uk-width-1-2@m">
            <p class="uk-h2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="featuremap uk-width-1-2@m">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.29139015307!2d4.44620201617262!3d51.91039457970326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434ecbd645e93%3A0x894648c2f46b6b77!2sMathenesserdijk+416%2C+3026+Rotterdam%2C+Netherlands!5e0!3m2!1sen!2sus!4v1506599796293"
              width="100%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>


  <!-- <div class="beige-background uk-container uk-position-relative">
    <div class="slantTopLeft" ></div>
  </div> -->

  <div class="beige-background uk-container uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
    <div class="slantTopRight"></div>
  </div>


</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  components: {
    defaultpage,
    templatefooter
  },
  transition: 'bounce'

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>


<style>
.featuremap {
  filter: grayscale(100%) contrast(1.1) saturate(0) brightness(1.04);
  -webkit-filter: grayscale(100%) contrast(1.1) saturate(0) brightness(1.04);
  -webkit-backface-visibility: hidden;
  /*}*/
  iframe {
    opacity: 0.9;
  }
}
</style>
