<template>
<div id="test">
  <div class="loading-page beige-background" @click="testslide=!testslide">
    <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
    <!-- <div class="uk-padding uk-height-viewport">

      <div id="toploading" style="height:33vh;" class="uk-flex uk-flex-center uk-flex-middle " :class="{'slideouttop':testslide}">

        <h1 class=" uk-text-center loading green-color">Awaiting awesome</h1>
      </div>



    </div> -->

    <canvas id="myCanvas" resize></canvas>

  </div>

</div>
</template>

<script>
export default {

  components: {},

  data: () => ({
    testslide: false
  }),
  transition: 'bounce',
  mounted() {

    this.paperjs()
  },

  methods: {


    paperjs: function() {
      var canvas = document.getElementById('myCanvas');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);
      // Create a Paper.js Path to draw a line into it:

      // The amount of segment points we want to create:
      var amount = 10;

      // The maximum height of the wave:
      var height = 40;

      // Create a new path and style it:
      var path = new paper.Path({
        // 80% black:
        // strokeColor: [0.8],
        // strokeWidth: 30,
        // strokeCap: 'square',
        fillColor: 'red'
      });

      // Give the stroke a color
      // var start = new paper.Point(100, 100);
      // var start = new paper.Point(0,0)


      // Move to start and draw a line from there
      // path.moveTo(start);

      for (var i = 0; i <= amount; i++) {
        path.add(new paper.Point((i / amount) * paper.view.size.width, 1 * paper.view.size.height));
      }

      path.add(new paper.Point(paper.view.size.width, paper.view.size.height));
      path.add(new paper.Point(0, paper.view.size.height));
      // path.add(new paper.Point(0,0));

      path.closed = true;

      // Select the path, so we can see how it is constructed:
      // path.selected = true;

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
  height: 50vw;
}

#test {

  background: white;
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
