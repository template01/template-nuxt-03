<template>
<defaultpage id="werk">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div>
        <!-- <div></div> -->
        <div class="uk-align-center"  :class="{'uk-width-2-3':!getsmallscreen}">
          <div>
            <h1 v-html="content.content.rendered" style="font-weight:800"></h1>
          </div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>

  <div class="uk-container ">
    <div class="killPadding ">


      <!-- {{tiles[0]}} -->

      <div class=" uk-grid-collapse uk-text-center" uk-grid uk-height-match>
        <werktileitem v-bind:key="tile.id" v-for="tile in tiles" :datainput="tile"></werktileitem>

      </div>
    </div>
  </div>
</defaultpage>
</template>

<script>
import axios from 'axios'

import defaultpage from '~/components/defaultpage.vue'
import werktileitem from '~/components/werktileitem.vue'

export default {

  components: {
    defaultpage,
    werktileitem
  },
  data: function() {
    return {
      // actualContent: null,
      hideinitialcontent: false
    }
  },


  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
        let [contentRes, tilesRes] = await Promise.all([
          axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
          axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang),
        ])
        return {
          content: contentRes.data[0],
          tiles: tilesRes.data,
        }
      // }
    } else {

      let [contentRes, tilesRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl'),
      ])
      return {
        content: contentRes.data[0],
        tiles: tilesRes.data,
      }


    }
  },

  //
  // async asyncData({
  //   query,
  //   error
  // }) {
  //   let [werk_enRes, werk_nlRes] = await Promise.all([
  //     axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_en'),
  //     axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
  //     // axios.get('https://jsonplaceholder.typicode.com/posts'),
  //     // axios.get('http://werkt.template01.info/json/referenties.json'),
  //   ])
  //   return {
  //     werk_en: werk_enRes.data,
  //     werk_nl: werk_nlRes.data
  //   }
  // },

  //
  // mounted() {
  //   this.setlanguage()
  // },
  //
  // methods: {
  //   setlanguage: function() {
  //     if (this.$i18n.locale === 'en') {
  //       // alert('en')
  //       // this.actualContent = this.werk_en
  //
  //       axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_en')
  //       .then(response => {
  //         // JSON responses are automatically parsed.
  //         this.content = response.data[0]
  //         this.showcontent = true
  //
  //       })
  //       .catch(e => {
  //         this.errors.push(e)
  //       })
  //
  //     } else {
  //       // alert('nl')
  //       // this.actualContent = this.werk_nl
  //
  //     }
  //   }
  // },





  transition: 'bounce',





}
</script>

<style lang="scss">
#werk {


    /*background: red;*/
}
</style>
