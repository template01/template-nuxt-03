<template>
<defaultpage id="over">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-2-3':!getsmallscreen}">
          <div>
            <h1 v-html="content.content.rendered" style="font-weight:800"></h1>
          </div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>

  <div id="branding" class="black-background black-color" :uk-parallax="getsmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">
    <div class="slantTopRight"></div>

    <div class="uk-container beige-color-force">


        <oversectioncontent :acfsection="content.acf.section"></oversectioncontent>

    </div>

  </div>


  <div id="code" class="blue-background blue-color uk-height-viewport" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">

    <div class="slantTopLeft"></div>
    <div class="uk-container pink-color-force">

      <oversectioncontent :acfsection="content.acf.section_b"></oversectioncontent>

    </div>
    <div class="slantBottomLeft"></div>
  </div>

  <div id="design" class="pink-background pink-color uk-height-viewport" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">
    <div class="slantTopRight"></div>
    <div class="uk-container">

      <oversectioncontent :acfsection="content.acf.section_c"></oversectioncontent>

    </div>
  </div>
</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import oversectioncontent from '~/components/oversectioncontent.vue'
import axios from 'axios'

export default {
  components: {
    defaultpage,
    oversectioncontent
  },
  data: function() {
    return {
      paralaxy: '500,0',
    }
  },



  transition: 'bounce',

  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=over_' + query.lang),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
    } else {

      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=over_nl'),
      ])
      return {
        content: contentRes.data[0],
      }


    }
  },

}
</script>

<style lang="scss" scoped>
#over {

    #intro {
        overflow-y: hidden;
    }

    #branding {

        -webkit-box-shadow: 0 300px 0 0;
        -moz-box-shadow: 0 300px 0 0;
        box-shadow: 0 300px 0 0;

    }

    #design {}

    #code {
        -webkit-box-shadow: 0 300px 0 0;
        -moz-box-shadow: 0 300px 0 0;
        box-shadow: 0 300px 0 0;

    }
}
</style>
