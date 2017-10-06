<template>
  <div class="uk-text-center" >
    <div   v-for="(archiveItem, index) in archive">
      <div class="uk-width-1-3@m" v-if="'year' in archiveItem">
        {{archiveItem}}
      </div>
      <div class="uk-width-1-3@m" v-else>
        {{archiveItem}}
      </div>
    </div>

    <!-- <div   uk-grid uk-height-match v-for="(archiveItem, index) in archive"> -->
      <!-- <div class="uk-width-1-3@m"> -->
        <!-- {{archiveItem[0]}} -->
      <!-- </div> -->
      <!-- {{archiveItem[1]}} -->
      <!-- {{archiveItem.data}} -->
      <!-- {{archiveItem[1][0].slug}} -->
      <!-- <div v-for="archiveContent in archiveItem[1]"> -->

        <!-- {{archiveContent}} -->
      <!-- </div> -->
      <!-- <werkarchiveitem v-bind:key="archiveItem.id" :index="index" :datainput="archiveItem" ></werkarchiveitem> -->
    <!-- </div> -->
  </div>
</template>
<script>
import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'

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
