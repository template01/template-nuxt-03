<template>
<defaultpage class="beige-background" id="contact">
  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.contact")}}</span></h1>
  </div>

  <div id="" class="section section-last" :style="{'background-color':content.acf.section_a.background_color, 'color':content.acf.section_a.font_color}">

    <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

    <div class="uk-container uk-padding uk-padding-remove-vertical" :style="{'color':content.acf.section_a.font_color}">
      <sectioncontent :ignoreunderline="true" :acfsection="content.acf.section_a.content"></sectioncontent>

    </div>
    <div class="uk-container uk-padding uk-padding-remove-vertical ">

    </div>

  </div>


  <!-- <div class="beige-background uk-container uk-position-relative">
    <div class="slantTopLeft" ></div>
  </div> -->

  <div class="beige-background uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative" :class="{'uk-padding ':issmallscreen}">
    <div class="slantTopLeft"></div>
  </div>


</defaultpage>
</template>

<script>
import axios from 'axios'
import sectioncontent from '~/components/sections_component/sectioncontent.vue'

import defaultpage from '~/components/defaultpage.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.contact'),
      meta: [
          {
           hid: 'description',
           name: 'description',
           content: this.$t('meta.contact.content')
          }
        ]
    }
  },



  components: {
    defaultpage,
    templatefooter,
    sectioncontent

  },
  transition: 'bounce',

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
  data() {
    return {
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#fffef5"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        },
        {
          "featureType": "poi",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "transit",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#808080"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#fffef5"
          }]
        }
      ]
    }
  },
  async asyncData({
    params,
    query,
    error
  }) {
    if (query.hasOwnProperty('lang')) {
      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=contact_' + query.lang),
      ])
      return {
        content: contentRes.data[0],
      }
      // }
    } else {

      let [contentRes] = await Promise.all([
        axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=contact_nl'),
      ])
      return {
        content: contentRes.data[0],
      }


    }
  }
}
</script>

<style >

#contact a{
  color: inherit !important;
}

.gmnoprint {
  display: none;
}

/*.featuremap {
  filter: grayscale(100%) contrast(1.1) saturate(0) brightness(1.04);
  -webkit-filter: grayscale(100%) contrast(1.1) saturate(0) brightness(1.04);
  -webkit-backface-visibility: hidden;
  iframe {
    opacity: 0.9;
  }
}*/
</style>
