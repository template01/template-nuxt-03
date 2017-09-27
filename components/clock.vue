<template>
<div>

  <div class="container">
      <p class="uk-h4 content" ><span><transition name="fade"> <span v-if="clockloaded" v-html="' '+momentstamp"></span></transition>
      </span></transition>
      </span></p>
  </div>


  <div class="container">
      <p class="uk-h4 content" ><span>{{$t("clock.statusdesc")}}<transition name="fade"> <span class="dontBreakString" v-if="clockloaded" v-html="' '+status"></span></transition>
      </span></p>
  </div>

</div>
</template>
<script>
import VueI18n from 'vue-i18n'



export default {
  data: function() {
    return {
      momentstamp: '',
      status: '',
      clockObj: null,
      clockloaded: false
      // locale: 'en'
    }
  },
  props: ['footer'],
  methods: {
    getTime: function() {
      return moment().tz('Europe/Amsterdam').format('MMMM Do YYYY, H:mm:ss')
    },
    getTimeHour: function() {
      return moment().tz('Europe/Amsterdam').format('H')
    },
    pickRandomStatus: function(arrayInput) {
      return Math.floor(Math.random() * arrayInput.length)
    },
    getStatus: function(time) {

      const day = moment().day();
      const isWeekend = (day == 6) || (day == 0);

      if (!isWeekend) {

        if (time >= 0 && time < 8)
          this.status = this.$t("clock.modes.sleep")[this.pickRandomStatus(this.$t("clock.modes.sleep"))]
        else if (time >= 8 && time < 9)
          this.status = this.$t("clock.modes.beforework")[this.pickRandomStatus(this.$t("clock.modes.beforework"))]
        else if (time >= 9 && time < 10)
          this.status = this.$t("clock.modes.morning")[this.pickRandomStatus(this.$t("clock.modes.morning"))]
        else if (time >= 10 && time < 12)
          this.status = this.$t("clock.modes.work")[this.pickRandomStatus(this.$t("clock.modes.work"))]
        else if (time >= 12 && time < 13)
          this.status = this.$t("clock.modes.lunch")[this.pickRandomStatus(this.$t("clock.modes.lunch"))]
        else if (time >= 13 && time < 17)
          this.status = this.$t("clock.modes.work")[this.pickRandomStatus(this.$t("clock.modes.work"))]
        else if (time >= 17 && time < 23)
          this.status = this.$t("clock.modes.afterwork")[this.pickRandomStatus(this.$t("clock.modes.afterwork"))]
        else if (time >= 23)
          this.status = this.$t("clock.modes.sleep")[this.pickRandomStatus(this.$t("clock.modes.sleep"))]

      } else {
        this.status = 'Enjoying the weekend!'
      }



    },
    setClock: function() {
      var vm = this
      this.clockObj = window.setInterval(function() {
        vm.momentstamp = vm.getTime()
      }, 1000)
    },
    stopClock() {
      window.clearInterval(this.clockObj);
    },
  },
  watch: {
    // whenever question changes, this function will run
    '$i18n.locale': function() {
      this.getStatus(this.getTimeHour())
    }
  },

  mounted() {
    this.getStatus(this.getTimeHour())
    this.momentstamp = this.getTime()
    this.setClock()
    this.clockloaded = true
  },
  destroyed: function() {
    this.stopClock()
  },

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
    overflow: hidden;    /* Required to make ellipsis work */
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
  margin-bottom: 0;
}

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
