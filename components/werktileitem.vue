<template>
<div v-if="showcontent" class="uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle">

  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top" >
    <nuxt-link  :to="$i18n.locale === 'en' ? {path:'/werk/item', query: { lang: $i18n.locale }}:{path:'/contact'}">

      <div class="uk-padding" uk-grid>

        <div v-for="item in actualContent.body" :class="[item.size === 'half' ? {'uk-width-1-2@m':true}:{'uk-width-1-1@m':true}, item.type === 'image' ? 'uk-flex uk-flex-center uk-flex-middle':'']">
          <h1 v-if="item.type === 'header'" class="uk-text-left hugeLetters" v-html="item.content"></h1>
          <img v-if="item.type === 'image'" :class="item.size === 'full' ? 'uk-padding uk-padding-remove-vertical' : ''" :src="item.content" />
          <p v-if="item.type === 'text'" class="uk-text-left uk-h4"  v-html="item.content"></p>
        </div>

      </div>
      <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
        <p class="uk-text-left uk-h1 uk-text-right uk-margin-remove-bottom">{{$t("readmore")}}<span uk-icon="icon: arrow-down; ratio: 2"></span></p>
      </div>

    </nuxt-link>
  </div>

</div>

</template>
<script>

import axios from 'axios'

import {
  mapGetters
} from 'vuex'


export default {
  data: function() {
    return {
      showcontent: false,
      content:null,
      actualContent: null,
      apiendpoint:null


    }
  },
  props: ['itemurl','menucolor'],
  computed: {
    ...mapGetters({
     getlocale: "getlocale",
   }),
 },

 methods:{
   setlanguage:function(){
     if(this.$i18n.locale === 'en' ){
       // alert('en')
       this.actualContent = this.content.en
     }else{
       // alert('nl')
       this.actualContent = this.content.nl

     }
   }
 },

  mounted() {

    axios.get(this.itemurl)
    .then(response => {
      // JSON responses are automatically parsed.
      this.content = response.data
      this.setlanguage()
      this.showcontent = true

    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>
<style lang="scss" scoped>
</style>
