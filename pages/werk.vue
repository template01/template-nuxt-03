<template>
<defaultpage id="werk">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">
          <div>
            <h1 style="font-weight:800">{{actualContent.body.intro}}
              </h1></div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>

  <div class="uk-container ">
    <div class="killPadding ">

      <werktileitem v-for="tile in actualContent.body.tiles" :itemurl="'/content/werk/testcontent.json'"></werktileitem>

      <div class=" uk-grid-collapse uk-text-center" uk-grid uk-height-match>

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
      actualContent: null,
      hideinitialcontent: false
    }
  },


  asyncData({
    app
  }) {
    return axios.get(`http://template-studio.nl/content/werk/werk.json`)
      .then((res) => {
        return {
          content: res.data,
          actualContent:res.data.nl
        }

      })
  },

  mounted() {
    this.setlanguage()
  },

  methods: {
    setlanguage: function() {
      if (this.$i18n.locale === 'en') {
        // alert('en')
        this.actualContent = this.content.en
      } else {
        // alert('nl')
        this.actualContent = this.content.nl

      }
    }
  },





  transition: 'bounce',





}
</script>

<style lang="scss">
#werk {

    a {
        text-decoration: none;
    }
    /*background: red;*/
}
</style>
