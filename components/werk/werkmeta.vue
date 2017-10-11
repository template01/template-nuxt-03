<template>
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
    <span v-if="datainput.acf['meta_link'] && singlepage" :class="{ 'metapadding': singlepage }">
      <span><a :href="datainput.acf['meta_link']">{{$t("visit")}} <span><svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="24"
    viewbox="0 0 14 24">
    <path
         id="rect4140-3"
         d="m 9.2222084,3.6089252 c -0.1987942,0 -0.3976726,0.077304 -0.549999,0.2296294 -0.3046529,0.3046524 -0.3046529,0.7953462 0,1.0999986 l 2.6777746,2.6777743 -10.57220911,0 c -0.43084353,0 -0.7777768350898,0.3469333 -0.7777768350898,0.777776 0,0.430844 0.3469333050898,0.777778 0.7777768350898,0.777778 l 10.52776611,0 -2.670369,2.6703655 c -0.304652,0.304651 -0.304652,0.795347 0,1.099999 0.3046527,0.304652 0.7953461,0.304652 1.0999995,0 L 13.653684,9.0237325 c 0.126491,-0.08691 0.231819,-0.199458 0.28889,-0.344443 0.03483,-0.08849 0.05742,-0.184041 0.05742,-0.285186 0,-0.0012 6e-6,-0.0025 0,-0.0037 4.77e-4,-0.1022564 -0.02128,-0.2039175 -0.06111,-0.2999994 -0.03807,-0.091845 -0.09362,-0.1788038 -0.168518,-0.2537034 L 9.772208,3.8385546 C 9.6198808,3.6862284 9.4210026,3.6089252 9.2222084,3.6089252 Z"
         style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:inherit;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
</svg></span></a></span>
    </span>
  </h4>
</template>
<script>
export default {
  data: function() {
    return {}
  },

  props: ['datainput', 'singlepage'],
}
</script>
<style lang="scss" scoped>
.metapadding {
    // padding-right: 20px;
    &::before {
        content: " – ";
    }
}

a {
    color: inherit;
}
</style>
