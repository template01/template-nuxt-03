<template>
<defaultpage id="">
  <div class="">
    <h1 style="font-weight:800">werk {{$route.path}}</h1> {{content}}
    <br /> {{p}}
  </div>
</defaultpage>
<!-- <section id="over" class="container">
  <div class="uk-padding uk-padding-remove-bottom" id="menusplash">
    <menuitems></menuitems>
  </div>

  <div class="uk-padding uk-padding-remove-top">
    <div class="uk-padding uk-padding-remove-top">
      <div class="">
        <h1 style="font-weight:800">over</h1>
      </div>
    </div>
  </div>

  <templatefooter></templatefooter>
</section> -->
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import axios from 'axios'

export default {

  components: {
    defaultpage,
  },
  transition: 'bounce',


  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_'+query.lang+'?slug=' + params.slug),

      ])
      return {
        content: contentRes.data[0],
      }
    } else {

      let [contentRes] = await Promise.all([
        // axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl?slug=' + params.slug),

      ])
      return {
        content: contentRes.data[0],
        p: params
      }
    }

    }

    // transition(to, from) {
    //   if (!from) return 'slide-left'
    //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    // },
  }
</script>

<style scoped>
#contact {
  background: white;
}

#map {
  background: orange;
}
</style>
