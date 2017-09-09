<template>
  <defaultpage id="contact">
    <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
      <div class="uk-padding">

        <div class="uk-child-width-expand uk-flex-center" uk-grid>
          <!-- <div></div> -->
          <div :class="{'uk-width-3-4':!getsmallscreen}">
            <div>
              <h1 v-html="'contact'" style="font-weight:800"></h1>
            </div>
          </div>
          <!-- <div></div> -->
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

<style scoped>
  #contact{
    background: white;
  }

  #map{
    background: orange;
  }

</style>
