<template>
<defaultpage class="beige-background" id="contact">
  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.contact")}}</span></h1>
  </div>

  <div id="" class="section section-last" :style="{'background-color':content.acf.section_a.background_color, 'color':content.acf.section_a.font_color}">

    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container uk-padding uk-padding-remove-vertical" :style="{'color':content.acf.section_a.font_color}">
      <sectioncontent :ignoreunderline="true" :acfsection="content.acf.section_a.content"></sectioncontent>

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
import sectioncontent from '~/components/sections_component/sectioncontent.vue'

import defaultpage from '~/components/defaultpage.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.contact'),
      meta: [
          {
           hid: 'description',
           name: 'description',
           content: this.$t('meta.contact.content')
          }
        ]
    }
  },



  components: {
    defaultpage,
    templatefooter,
    sectioncontent

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

    // fetch page with slugname => get translation/language ids
    const getLanguageIdsRes = await axios.get('https://api.template-studio.nl/wp-json/wp/v2/pages?slug=' + slugname + '&fields=polylang_langs')
    const getLanguageIds = getLanguageIdsRes.data

    // return content for selected language
    const contentLangRes = await axios.get('https://api.template-studio.nl/wp-json/wp/v2/pages/' + getLanguageIds[0].polylang_langs[currentLanguage])


    return {
      content: contentLangRes.data,
    }
  },

}
</script>

<style >

#contact a{
  color: inherit !important;
}

.gmnoprint {
  display: none;
}


</style>
