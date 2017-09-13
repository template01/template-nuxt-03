<template>
<div id="splash" :style="{'background':functionArray[functionIndex].color}">

  <div class="uk-container uk-container-center ">

  <splashtopmenu class="uk-visible@m" :menucolor="functionArray[functionIndex].textcolor"></splashtopmenu>
  <splashbottommenu :menucolor="functionArray[functionIndex].textcolor"></splashbottommenu>

  <div class="uk-visible@m uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
    <div class="uk-width-5-6 uk-align-center  uk-child-width-expand@s  uk-flex uk-flex-center uk-flex-middle ">

    <div class="">
      <div class="" :class="{'uk-animation-slide-bottom':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-top':!begin, 'uk-animation-reverse':begin}">
        <h1 class="hugeLetters" :style="{'color':functionArray[functionIndex].textcolor}">{{functionArray[functionIndex].title}}</h1>
      </div>
    </div>
    <div class="">
      <h1 class="hugeLetters uk-text-center" :style="{'color':functionArray[functionIndex].textcolor}">Studio</h1>
    </div>
  </div>
  </div>

  <div id="splashMobile" class="uk-hidden@m  uk-height-viewport">
    <div class="">
      <div class="" :class="{'uk-animation-slide-left-medium':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-right-medium':!begin, 'uk-animation-reverse':begin}">
        <h1 class="hugeLetters" :style="{'color':functionArray[functionIndex].textcolor}">{{functionArray[functionIndex].title}}</h1>
      </div>
    </div>
    <div class="">
      <h1 class="hugeLetters" :style="{'color':functionArray[functionIndex].textcolor}">Studio</h1>
    </div>
  </div>



  <div>
  </div>

</div>

  <!-- </div> -->
  <!-- <div>

        <div class="uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle uk-text-center" uk-height-viewport="" style="box-sizing: border-box; min-height: 100vh; height: 100vh;">
          <h1>JS</h1>
        </div>

      </div> -->


  <!-- </div> -->
  <!-- </div> -->
</div>
</template>
<script>
import splashtopmenu from '~/components/splashtopmenu.vue'
import splashbottommenu from '~/components/splashbottommenu.vue'


export default {
  components: {
    splashtopmenu,
    splashbottommenu,
  },
  data: function() {
    return {
      begin: false,
      functionTitle: '',
      functionArray: [{
        title: 'Template',
        color: 'yellow',
        textcolor: 'black'
      }, {
        title: 'Branding',
        color: '#101010',
        textcolor: 'yellow'
      }, {
        title: 'Design',
        color: '#F8E6F7',
        textcolor: 'black'
      }, {
        title: 'Code',
        color: '#0008A1',
        textcolor: '#F8E6F7'
      }],
      functionIndex: 0
    }
  },
  mounted() {
    var vm = this
    setTimeout(function() {
      setInterval(function() {
        vm.begin = !vm.begin
      }, 1500)
      setInterval(function() {
        vm.functionIndex = vm.functionIndex + 1
        if (vm.functionIndex === vm.functionArray.length) {
          vm.functionIndex = 0
        }
      }, 3000)
    }, 1500)
  }
}
</script>
<style lang="scss">
#splash {
  position: relative;
    transition: background 1s;
}
#splashMobile{
  overflow: hidden;
}
</style>
