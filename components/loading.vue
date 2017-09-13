<template>
<div class="loading-page beige-background" v-if="loading" :class="{'fadeloadcontainer':fadeloadcontaineractive}">
  <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
  <div class="opacityWrapper" :style="{'opacity':opacity}">

    <div class="uk-padding uk-height-viewport">

      <!-- <div id="toploading" style="height:33vh;" class="uk-flex uk-flex-center uk-flex-middle " :class="{'slideouttop':testslide}">

        <h1 class=" uk-text-center loading black-color">Awaiting awesome</h1>
      </div> -->



    </div>
    <div>

      <canvas id="myCanvas" resize :class="{'slideoutbottom':testslide}"></canvas>
    </div>
  </div>

  <!-- <div v-if="initWave" id="svgwrapper" :class="{'slideoutbottom':testslide}">
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

    </div> -->
</div>
</template>

<script>
export default {

  components: {},

  data: () => ({
    testslide: false,
    loading: false,
    fadeloadcontaineractive: false,
    opacity: 0
  }),
  transition: 'bounce',
  destroyed(){
    this.testslide = false
    this.fadeloadcontaineractive = false
  },
  methods: {
    start() {
      this.testslide = false
      this.fadeloadcontaineractive = false

      var vm = this
      vm.loading = true
      setTimeout(function() {
        vm.paperjs()
        vm.opacity = 1
        // alert('start')
        // vm.initWave = true
      }, 1)


    },
    finish() {
      var vm = this

      setTimeout(function() {
        vm.testslide = true

      }, 500)

      setTimeout(function() {
        vm.opacity = 0
        vm.fadeloadcontaineractive = true

      }, 1100)


      setTimeout(function() {
        vm.loading = false
      }, 1500)

    },

    test: function() {
      alert('heyeyey')
    },

    paperjs: function() {
      var canvas = document.getElementById('myCanvas');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);
      // Create a Paper.js Path to draw a line into it:

      // The amount of segment points we want to create:
      var amount = 10;

      // The maximum height of the wave:

      if(this.getsmallscreen){
        var height = 20
      }else{
        var height = 40;
      }

      // Create a new path and style it:
      var path = new paper.Path({
        fillColor: '#101010'
      });

      for (var i = 0; i <= amount; i++) {
        path.add(new paper.Point((i / amount) * paper.view.size.width, 1 * paper.view.size.height));
      }

      path.add(new paper.Point(paper.view.size.width, paper.view.size.height));
      path.add(new paper.Point(0, paper.view.size.height));
      // path.add(new paper.Point(0,0));

      path.closed = true;

      paper.view.onFrame = function(event) {
        // Loop through the segments of the path:
        for (var i = 0; i <= amount; i++) {
          var segment = path.segments[i];

          // A cylic value between -1 and 1
          var sinus = Math.sin(event.time * 3 + i);

          // Change the y position of the segment point:
          segment.point.y = sinus * height + 100;
        }
        // Uncomment the following line and run the script again
        // to smooth the path:
        path.smooth({
          type: 'continuous',
          from: 0,
          to: 10
        });
      }

      paper.view.draw();
    }

  }

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style scoped>
#myCanvas {
  transform: scaleX(2);
  width: 100vw;
  height: 60vh;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 1000ms;
}

.fadeloadcontainer{
  opacity: 0;
}

.loading-page {
  transition: all 0.4s !important;
  position: fixed;
  z-index: 9999999999999;
  width: 100%;
  height: 100%
}

.opacityWrapper{
    transition: all 0.4s !important;
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

#toploading {
  transition: all 1000ms;
}

.slideoutbottom {
  transform: translateY(100vh) scaleX(2) !important;
  transition-delay: 300ms;
}

.slideouttop {
  transform: translateY(-100vh)
}

svg {
  font-weight: bold;
  width: 100vw;
  height: auto;
}
</style>
