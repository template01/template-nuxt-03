<template>
  <div class="uk-text-center" >
    <div >
      <div class="uk-width-1-3@m"   v-for="(archiveItem, index) in archive">
        {{archiveItem}}
      </div>
    </div>

  </div>
</template>
<script>
// import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'

export default {
  components: {
    werkarchiveitem
  },
  data: function() {
    return {}
  },
  props: ['archive']

}
</script>
<style lang="scss" scoped>

</style>
