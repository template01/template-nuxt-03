<template>
<div>

  <h4 style="color:inherit;">
      <span v-if="datainput.acf['meta_what']">
        <span v-html="datainput.acf['meta_what']"></span>
        <br/>
      </span>
      <span>
        <span v-for="(type,index) in datainput.pure_taxonomies.tags">
          <span v-if="index<datainput.pure_taxonomies.tags.length - 1" v-html="type.name+ ' / ' "></span>
            <span v-else v-html="type.name"></span>
          </span>
        </span>
        <span v-if="datainput.pure_taxonomies['categories'] && singlepage" :class="{ 'metapadding': singlepage }" >
          <span v-html="datainput.pure_taxonomies['categories'][0].name"></span>
        </span>
  </h4>

  <h4 class="slide-item-right-small" v-if="datainput.acf['meta_link'] && singlepage">

      <span><a :href="datainput.acf['meta_link']">{{$t("visit")}}
        <span class="">
        <i class="icon-right-1" style=""></i>
        </span>
      </a></span>

    </h4>

</div>
</template>
<script>
export default {
  data: function() {
    return {}
  },
  components: {},

  props: ['datainput', 'singlepage'],
}
</script>
<style lang="scss" scoped>
h4 {
    @media (max-width: 640px) {
        font-size: 0.8rem !important;
    }

}
.metapadding {
    // padding-right: 20px;
    &::before {
        content: " – ";
    }
}

a {
    color: inherit;
    box-shadow: inset 0 0 0 0;
    
}
</style>
