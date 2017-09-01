<template>
  <div>

<section class="uk-container uk-container-center ">
  <div class="uk-padding" id="">
  <div class="uk-padding uk-padding-remove-horizontal" id="menusplash">
    <menuitems></menuitems>
  </div>
  </div>

  <div class="uk-padding uk-padding-remove-top">
    <div class="uk-padding uk-padding-remove-top">
      <slot>

      </slot>
    </div>
  </div>

  <templatefooter></templatefooter>
</section>
</div>
</template>
<script>
import menuitems from '~/components/menuitems.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  components: {
    menuitems,
    templatefooter
  },
}
</script>
