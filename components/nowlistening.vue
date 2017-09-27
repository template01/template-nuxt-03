<template>
<div class="container">

  <p class="content uk-h4">
    <!-- <p class="uk-h4" :class="{'uk-h5':footer}"> -->
    {{$t("nowlistening.desc")}}

    <transition name="fade">
      <span v-if="showtune">
        <span v-if="tune.playing">
        <span>
          <a :href="'https://www.google.nl/search?q='+tune.artist+', '+tune.song" target="_blank">{{tune.artist}}, {{tune.song}}</a>
        </span>
      <!-- <span v-html="tune.song"></span> -->
      </span>
      </span>
    </transition>
    <transition name="fade">
      <span v-if="!showtune">
        <span>{{$t("nowlistening.none")}}</span>
      </span>
    </transition>

  </p>

</div>
</template>
<script>
import axios from 'axios'


export default {
  components: {},
  data: function() {
    return {
      tune: Object,
      showtune: false,
      tuneInterval: null

    }
  },
  props: ['footer'],

  methods: {
    getTune: function() {
      axios.get('http://spotify.template01.info/output/output.json')
        .then((res) => {
          console.log(res)
          this.tune = res.data
          console.log(res.data.artist)

          if (res.data.artist != null) {
            if (res.data.artist.length > 0 && res.data.playing) {
              this.showtune = true
            }
          }
        })
    },
    setTuneInterval: function() {
      var vm = this
      this.tuneInterval = window.setInterval(function() {
        vm.getTune()
      }, 60000)
    },
    stopTuneInterval() {
      window.clearInterval(this.tuneInterval);
    },
  },
  mounted() {
    this.getTune()
    this.setTuneInterval()
  },
  destroyed: function() {
    this.stopTuneInterval()
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;

  /* To make the width of the container exact. */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.content {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  /* Required to make ellipsis work */
  text-overflow: ellipsis;

  /* Starting transition */
  left: 0%;
  width: 100%;

  transition-timing-function: linear;

  /* Tweak 'till your heart's content */
  -webkit-transition: left 6s, width 6s;
  -moz-transition: left 6s, width 6s;
  transition: left 6s, width 6s;
}

/* The magic! */

.container:hover .content {
  /* This is not completely accurate. It resizes to 2x the current width. */
  left: -100%;
  width: 200%;
}


.uk-h4,
.uk-h5 {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

a {
  -webkit-box-shadow: inset 0px -2px 0px 0px;
  -moz-box-shadow: inset 0px -2px 0px 0px;
  box-shadow: inset 0px -2px 0px 0px;
  color: inherit;
}
</style>
