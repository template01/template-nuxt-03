<template>
<div class="loading-page beige-background" >
  <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
  <div class="opacityWrapper">

    <div class="uk-padding uk-height-viewport">

      <div id="toploading" style="height:33vh;" class="uk-flex uk-flex-center uk-flex-middle " >

        <h1 class=" uk-text-center loading green-color" >Initiating awesome</h1>
      </div>



    </div>
    <div>

      <canvas id="myCanvas" resize :class="{expandtoMiddle:tomiddle,expandtoTop:totop}" :style="{'opacity':opacity}"></canvas>
    </div>
  </div>

  <!-- <div v-if="initWave" id="svgwrapper" :class="{'slideoutbottom':tomiddle}">
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
    tomiddle: true,
    totop: true,
    loading: false,
    fadeloadcontaineractive: false,
    opacity: 0,
  }),
  transition: 'bounce',
  destroyed(){
    this.tomiddle = false
    this.totop = false
    this.fadeloadcontaineractive = false
  },

  mounted(){

    this.paperjs()

    this.tomiddle = false
    this.totop = false

    var vm = this


    setTimeout(function(){

      vm.tomiddle = true
    },1000)

    setTimeout(function(){

      vm.totop = true
    },2500)
  },

  methods: {

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
      
      if(this.getsmallscreen){
        var height = 20
      }else{
        var height = 40;
      }


      // Create a new path and style it:
      var path = new paper.Path({
        fillColor: '#075945'
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
      var vm = this

      setTimeout(function(){

        vm.opacity = 1
      },1000)

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
  height:0vh;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 1000ms;
}

.expandtoMiddle {
  height: 75vh !important;
}


.expandtoTop {
  height: 130vh !important;
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



svg {
  font-weight: bold;
  width: 100vw;
  height: auto;
}
</style>
