<template>
<defaultpage class="beige-background" id="contact">


  <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
    <h1 class="uk-text-center uk-padding" style="text-decoration:underline">CONTACT</h1>
  </div>



  <div id="" class="section section-last blue-background beige-color-force uk-padding uk-padding-remove-horizontal uk-padding-remove-top">

    <div class="slantTopLeft"></div>

    <div class="uk-container ">

      <templatefooter ignoreFirstColumn=true passHeader="Contact"></templatefooter>
      <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
        <div uk-grid class="uk-padding uk-padding-remove-horizontal">

          <div class="uk-width-1-2@m">
            <p class="uk-h2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              <!-- key=AIzaSyCacRKxkXOLIJ-KbA34QvvqiRnx2-CQDZs&center=-33.810189708437925,151.14588012695307&zoom=11&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360 -->
            </p>
          </div>
          <div class="featuremap uk-width-1-2@m">
            <gmap-map :options="{styles: styles}" :center="{lat:51.9103946, lng:4.44620217}" :zoom="15" style="height: 500px">
              <gmap-marker :position="{lat:51.9103946, lng:4.44620217}" :clickable="true" :draggable="true" @click="center={lat:51.9103946, lng:4.44620217}"></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>

  </div>


  <!-- <div class="beige-background uk-container uk-position-relative">
    <div class="slantTopLeft" ></div>
  </div> -->

  <div class="beige-background uk-container uk-padding-remove-horizontal uk-padding-remove-top uk-position-relative" :class="{'uk-padding ':getsmallscreen}">
    <div class="slantTopLeft"></div>
  </div>


</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  components: {
    defaultpage,
    templatefooter
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
            "color": "#f5f5f5"
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
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
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
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
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
            "color": "#989fff"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#989fff"
          }]
        }
      ]
    }
  },
  mounted() {

  }
}
</script>


<style>
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
