import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBV1ilSWFiINiYqWQS1n7mVI2WkZy4JzpA',
    //libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
