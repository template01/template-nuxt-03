<template>
<div>
  <div class="text-scroll-container">

    <p class="text-scroll-content uk-h4">
      <!-- <p class="uk-h4" :class="{'uk-h5':footer}"> -->
      <span class="text-scroll-inner">

        {{$t("nowlistening.desc")}}

        <transition name="fade">
          <span v-if="showtune">
        <span v-if="tune.playing">
        <span>
          <a :style="setBoxShadowColor" :href="'https://www.google.nl/search?q='+tune.artist+', '+tune.song" target="_blank">{{tune.artist}}, {{tune.song}}</a>
        </span>
      <!-- <span v-html="tune.song"></span> -->
      </span>
      </span>
      </transition>
      <transition name="fade">
        <span v-if="!showtune && init">
        <span><nuxt-link to="/weplayed">{{$t("nowlistening.none")}}</nuxt-link></span>
        </span>
      </transition>
      </span>

    </p>

  </div>
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
      tuneInterval: null,
      init: false

    }
  },
  props: ['footer'],

  computed:{

    setBoxShadowWidth: function(){
      if(this.issmallscreen){
        return 2
      }else{
        return 3
      }
    },

    setBoxShadowColor: function(){
      return `{'box-shadow':'inset 0 `+this.setBoxShadowWidth+`px 0 0 `+this.passedmenucolor+`}`
    }
  },

  methods: {


    disableTextScroll() {

      for (var i = 0, len = this.$el.querySelectorAll(".text-scroll-container").length; i < len; i++) {
        if (this.$el.querySelectorAll(".text-scroll-container")[i].offsetWidth > this.$el.querySelectorAll(".text-scroll-inner")[i].offsetWidth) {
          this.$el.querySelectorAll(".text-scroll-container")[i].classList.add("text-scroll-disable");
        } else {
          this.$el.querySelectorAll(".text-scroll-container")[i].classList.remove("text-scroll-disable");
        }
      }
    },


    getTune: function() {
      axios.get('https://spotify.template-studio.nl/output/output.json')
        .then((res) => {
          this.tune = res.data
          this.init = true

          if (res.data.artist != null) {
            if (res.data.artist.length > 0 && res.data.playing) {
              this.showtune = true
            }
          }
          var vm = this
          setTimeout(function() {
            vm.disableTextScroll()
          }, 500)
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
    var vm = this
    window.addEventListener('resize', _.debounce(function(){vm.disableTextScroll()}, 100));

  },
  destroyed: function() {
    this.stopTuneInterval()
  }
}
</script>

<style scoped>
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
  -webkit-box-shadow: inset 0px -3px 0px 0px;
  -moz-box-shadow: inset 0px -3px 0px 0px;
  box-shadow: inset 0px -3px 0px 0px;
  color: inherit;
  transition: box-shadow 0.0s;
}


@media (max-width: 959px) {

  a {
    -webkit-box-shadow: inset 0px -2px 0px 0px;
    -moz-box-shadow: inset 0px -2px 0px 0px;
    box-shadow: inset 0px -2px 0px 0px;
    color: inherit;
  }

}
</style>
