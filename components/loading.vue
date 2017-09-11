<template>
  <div class="loading-page beige-background"  v-if="loading" >
    <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
    <div class="uk-padding uk-height-viewport">

      <div id="toploading" style="height:33vh;" class="uk-flex uk-flex-center uk-flex-middle " :class="{'slideouttop':testslide}">

        <h1 class=" uk-text-center loading green-color">Awaiting awesome</h1>
      </div>



    </div>

    <div v-if="initWave" id="svgwrapper" :class="{'slideoutbottom':testslide}">
      <svg height="210" width="500">
            <defs>
              <pattern id="wave" x="0" y="0" width="120" height="24" patternUnits="userSpaceOnUse">
                <path id="wavePath" d="M-80 2 Q-30 7 -20 2 T0 2 T20 2 T80 2 T60 2 T80 2 T100 2 T120 2 V20 H-80z" mask="url(#mask)" fill="#075945">
                  <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="1.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>

    </div>
  </div>

</template>

<script>
export default {

  components: {},

  data: () => ({
    testslide: false,
    loading: false,
    initWave: false
  }),
  transition: 'bounce',

  methods: {
    start() {
      var vm = this
      vm.loading = true
      setTimeout(function() {
        // vm.opacity = 1
        // alert('start')
        vm.initWave = true
      }, 1000)


    },
    finish() {
      var vm = this

      setTimeout(function() {
        // vm.opacity = 0
      }, 1000)


      setTimeout(function() {
        vm.loading = false
      }, 150000)

    },

    test: function() {
      alert('heyeyey')
    }
  }

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style scoped>

.loading-page{
  position: fixed;
  z-index: 9999999999999;
  width: 100%;
  height: 100%
}

.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 900ms infinite;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "…";
  /* ascii code for the ellipsis character */
  width: 0px;
  position: absolute;
  font-family: serif;
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

#svgwrapper {
  position: fixed;
  left: 0;
  width: 100%;
  /*height: 100%;*/
  bottom: 0;
  transition: all 1000ms;
}

#toploading {
  transition: all 1000ms;
  transition-delay: 500ms;
}

.slideoutbottom {
  margin-bottom: -100vh;
}

.slideouttop {
  margin-top: -100vh;
}

svg {
  font-weight: bold;
  width: 100vw;
  height: auto;
}
</style>
