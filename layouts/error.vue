<template>
<!-- <div class="container">
  <h1 v-if="error.statusCode === 404">Page not found</h1>
  <h1 v-else>An error occurred</h1>
  <nuxt-link to="/">Home page</nuxt-link>
</div> -->

<defaultpage :iserrorpage="true" class="beige-background" id="contact">

  <div class="uk-container uk-padding uk-padding-remove-vertical ">
    <div id="fullError">
      <div class="Aligner">
        <h1 class="hugeLetters uk-text-center" v-if="error.statusCode === 404">Page not found 😢</h1>
        <h1 class="hugeLetters uk-text-center" v-else>An error occurred 😢</h1>
      </div>
      <!-- <nuxt-link to="/">Home page</nuxt-link> -->
    </div>
  </div>

</defaultpage>

</template>

<script>
import defaultpage from '~/components/defaultpage.vue'


import {
  mapGetters
} from 'vuex'


export default {
  components: {
    defaultpage,
  },
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
<style scoped>
#fullError{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  /*pointer-events: none;*/
}

.Aligner{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  /* vendor prefixes omitted due to brevity */
}
</style>
