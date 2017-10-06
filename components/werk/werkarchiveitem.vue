<template>
<div>

  <span v-if="datainput.acf['meta_year']">
    <br />
    <span v-html="datainput.acf['meta_year']"></span>
  <br />
  </span>
  <div class="">
    <h2 class="" v-html="datainput.title.rendered" style="color:inherit;"></h2>
  </div>
  <h4 style="color:inherit;">
    <span v-for="(type,index) in datainput.pure_taxonomies.tags">
      <span v-if="index<datainput.pure_taxonomies.tags.length - 1" v-html="type.name+ ' / ' "></span>
      <span v-else v-html="type.name"></span>
    </span>
    <span v-if="datainput.acf['meta_what']">
      <br />
      <span v-html="datainput.acf['meta_what']"></span>
      <br />
    </span>
  </h4>
  <h4 class="slide-item-right-small" style="color:inherit;" v-if="datainput.acf['meta_link']">
    <a :href="datainput.acf['meta_link']" target="_blank">{{$t("visit")}}<span class="uk-icon uk-icon-image" style="background-image: url('arrowRight.svg');"></span></a>
  </h4>

</div>
</template>
<script>
export default {
  data: function() {
    return {}
  },
  props: ['datainput', 'fullArchive', 'index'],
  mounted() {
    // var iDiv = document.createElement('div');
    // iDiv.id = 'block';
    // iDiv.className = 'block';
    // this.$el.appendChild(iDiv);
    //
    // // Now create and append to iDiv
    // var innerDiv = document.createElement('div');
    // innerDiv.className = 'block-2';
    //
    // // The variable iDiv is still good... Just append to it.
    // iDiv.appendChild(innerDiv);
  }

}
</script>
<style lang="scss" scoped>
h2,
h4 {
    margin: 0;
}
a {
    box-shadow: inset 0 0 0 0;
    color: inherit;
}
</style>
