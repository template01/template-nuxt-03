<template>
<div class="loading-page beige-background" >
  <div class="uk-padding" style="width:100vw">
    <div class="uk-text-center">
      <div class="uk-visible@m ">
        <p class="uk-h2  uk-text-center inintializing">
          {{$t("inintializing")}}
        </p>
      </div>
      <div class="uk-hidden@m ">
        <p class="uk-h1 uk-text-center"><span class="mobilePageHeader">{{$t("inintializing")}}</span></p>
      </div>



    </div>
  </div>
  <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
  <div class="opacityWrapper">

    <div class="uk-padding uk-height-viewport">

    </div>
    <div>
      <canvas id="myCanvas" resize ></canvas>
    </div>
  </div>

</div>
</template>

<script>
export default {

  destroyed(){
    this.finish()
  },
  mounted(){
    this.start()
  },
  methods: {
    start() {

      var vm = this
      vm.loading = true
      // setTimeout(function() {
        vm.paperjs()
        vm.opacity = 1
        // vm.initWave = true
      // }, 1)


    },
    finish() {
      var vm = this

      setTimeout(function() {
        vm.loading = false
      }, 1000)

    },

    paperjs: function() {
      var canvas = document.getElementById('myCanvas');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);
      // Create a Paper.js Path to draw a line into it:

      // The amount of segment points we want to create:
      var amount = 10;

      // The maximum height of the wave:

      if(this.issmallscreen){
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

<style lang="scss" scoped>


#myCanvas {
  transform: scaleX(2);
  width: 100vw;
  height: 65vh;
  position: absolute;
  bottom: 0;
  left: 0;
  // transition: all 1000ms;
}

.fadeloadcontainer{
  opacity: 0;
}

.loading-page {
  transition: all 0.4s !important;
  top: 0;
  position: fixed;
  z-index: 9999999999999;
  width: 100%;
  height: 100%;


  .inintializing{
    display: inline-block;
    -webkit-box-shadow: inset 0px -3px 0px 0px;
    -moz-box-shadow: inset 0px -3px 0px 0px;
    box-shadow: inset 0px -3px 0px 0px;
    transition: box-shadow 0.25s;
  }

  @media (max-width: 959px) {

    .inintializing{
      -webkit-box-shadow: inset 0px -2px 0px 0px;
      -moz-box-shadow: inset 0px -2px 0px 0px;
      box-shadow: inset 0px -2px 0px 0px;
    }

  }


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
