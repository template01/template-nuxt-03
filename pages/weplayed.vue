<template>
<defaultpage class="beige-background" id="contact">
  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.contact")}}</span></h1>
  </div>

  <div id="" class="section section-last">

    <div class="slantTopLeft" :style="{'border-color': 'transparent transparent transparent transparent'}"></div>

    <div class="uk-container uk-padding uk-padding-remove-vertical beige-color ">

      <div class=" uk-padding uk-padding-remove-horizontal">
        <div class="uk-width-1-1@m">
          <div class="uk-align-center sectionPart">
            <div :class="[issmallscreen ? 'uk-padding-small':'uk-padding']">
              <h1 :class="" class="uk-text-center hugeLetters" v-html="'We Played'"></h1>
            </div>
          </div>
        </div>

        <div class="uk-width-1-1@m">
          <div class="uk-align-center sectionPart uk-width-2-3@m sectionPartIgnoreHrefUnderline">
            <div class="uk-grid uk-grid-collapse	">


              <div class="uk-width-1-2@m" v-for="item in recentlyPlayed.recent.items" uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium, uk-animation-fade; delay: 500">
                <div class="uk-padding">
                  <div class="" style="margin: 0 auto;">
                    <a class="" :href="'https://www.google.nl/search?q='+item.track.artists[0].name+', '+item.track.name" target="_blank">
                      <div class="black-background slide-item-down-small uk-padding">

                        <h2 class="uk-text-center" style="color: inherit;" v-html="item.track.artists[0].name"></h2>
                        <p class="uk-text-center">
                          <img v-lazy="item.track.album.images[1].url" />
                        </p>
                        <h2 class="uk-text-center" style="margin-bottom:0; color: inherit;" v-html="item.track.name"></h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="uk-container uk-padding uk-padding-remove-vertical ">

    </div>

  </div>


  <!-- <div class="beige-background uk-container uk-position-relative">
    <div class="slantTopLeft" ></div>
  </div> -->

  <div class="beige-background uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative" :class="{'uk-padding ':issmallscreen}">
    <div class="slantTopLeft"></div>
  </div>


</defaultpage>
</template>

<script>
import axios from 'axios'
import sectioncontentinner from '~/components/sections_component/sectioncontentinner.vue'
import sectioncontentinnerColumn from '~/components/sections_component/sectioncontentinnerColumn.vue'

import defaultpage from '~/components/defaultpage.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.contact'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('meta.contact.content')
      }]
    }
  },



  components: {
    defaultpage,
    templatefooter,
    sectioncontentinner,
    sectioncontentinnerColumn

  },
  transition: 'bounce',

  async asyncData({
    params,
    query,
    error
  }) {

    // hardcoded slug
    const slugname = 'contact'

    // determain lang. If no query lang then 'nl'
    const currentLanguage = query.hasOwnProperty('lang') ? query.lang : 'nl'

    const getRecentlyPlayed = await axios.get('https://spotify.template-studio.nl/output/output.json')

    return {
      recentlyPlayed: getRecentlyPlayed.data,
    }
  },

}
</script>

<style >
#contact a {
  color: inherit !important;
}

.gmnoprint {
  display: none;
}
</style>
