<template>
  <defaultpage id="werk">
    <div class="">
      <div class="uk-child-width-1-2@s uk-grid-collapse uk-text-center" uk-grid uk-height-match>

              <div class="uk-flex uk-flex-center uk-flex-middle uk-tile ">
                <div class="green-background uk-padding">
                  <p class="uk-h1">AAAAN.NET</p>
                  <p class="uk-text-left uk-h4">Default</p>
                  </div>

              </div>


              <div class="uk-flex uk-flex-center uk-flex-middle uk-tile">
                <div class="pink-background uk-padding">
                  <p class="uk-h4">pink</p>
                  </div>
              </div>


              <div class="uk-tile blue-background">
                  <p class="uk-h4">Primary</p>
              </div>


              <div class="uk-tile black-background">
                  <p class="uk-h4">Secondary</p>
              </div>

      </div>
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

export default {

  components: {
    defaultpage,
  },
  transition:'bounce'

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style>
  #werk{
    /*background: red;*/
  }
</style>
