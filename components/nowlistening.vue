<template>
<div>
  {{$t("nowlistening.desc")}}
  <transition name="fade">
    <span v-if="showtune">
        <span v-if="tune.playing">
        <span>
          <a :href="'https://www.google.nl/search?q='+tune.artist+', '+tune.song" target="_blank">{{tune.artist}}, {{tune.song}}</a>
        </span>
    <!-- <span v-html="tune.song"></span> -->
    </span>
    <span v-else>
        <span>{{$t("nowlistening.none")}}</span>
    </span>
    </span>
  </transition>
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
      tuneInterval:null

    }
  },
  methods: {
    getTune: function() {
      axios.get('http://spotify.template01.info/output/output.json')
        .then((res) => {
          console.log(res)
          this.tune = res.data
          if (res.data.artist.length > 0) {
            this.showtune = true
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
  opacity: 0
}
</style>
