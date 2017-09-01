<template>
<div id="splash" :style="{'background':functionArray[functionIndex].color}">

  <div class="uk-container uk-container-center ">

  <splashtopmenu :menucolor="functionArray[functionIndex].textcolor"></splashtopmenu>
  <splashbottommenu :menucolor="functionArray[functionIndex].textcolor"></splashbottommenu>

  <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
    <div class="uk-padding">
      <div class="" :class="{'uk-animation-slide-bottom':begin, 'uk-animation-reverse':!begin, 'uk-animation-slide-top':!begin, 'uk-animation-reverse':begin}">
        <h1 class="hugeLetters" :style="{'color':functionArray[functionIndex].textcolor}">{{functionArray[functionIndex].title}}</h1>
      </div>
    </div>
    <div class="uk-padding uk-padding-remove-left">
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
        color: 'orange',
        textcolor: 'black'
      }, {
        title: 'Branding',
        color: 'green',
        textcolor: 'white'
      }, {
        title: 'Design',
        color: 'beige',
        textcolor: 'black'
      }, {
        title: 'Code',
        color: 'black',
        textcolor: 'lime'
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
</style>
