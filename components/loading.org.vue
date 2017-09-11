<template lang="html">
  <!-- <transition name="fade"> -->
  <div class="loading-page" v-if="loading" :style="{'opacity':opacity}">
    <!-- <div class="uk-padding uk-child-width-expand@s uk-flex uk-flex-center uk-flex-middle uk-height-viewport"> -->
      <div class="uk-padding  uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
        <div class="" >
        <div class="loader" >
          <!-- <h1 class="splashSize">Loading...</h1> -->
        </div>
        </div>
      </div>

    <!-- </div> -->

  </div>
  <!-- </transition> -->
</template>

<script>
export default {

  data: () => ({
    loading: false,
    opacity: 0
  }),
  methods: {
    start() {
      var vm = this
      vm.loading = true
      setTimeout(function() {
        vm.opacity = 1
        // alert('start')
      }, 200)


    },
    finish() {
      var vm = this

      setTimeout(function() {
        vm.opacity = 0
      }, 1000)


      setTimeout(function() {
        vm.loading = false
      }, 1500)

    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
    transition: all 0.4s !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;

    text-align: center;
    z-index: 9999;
    h1 {
        color: white;
    }


    .loader {
      font-size: 10px;
      margin: 50px auto;
      text-indent: -9999em;
      width: 20vw;
      height: 20vw;
      border-radius: 50%;
      background: #ffffff;
      background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
      background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
      background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
      background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
      background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
      position: relative;
      -webkit-animation: load3 1.4s infinite linear;
      animation: load3 1.4s infinite linear;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
    }
    .loader:before {
      width: 50%;
      height: 50%;
      background: #ffffff;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
    .loader:after {
      background: black;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    @-webkit-keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }


    .spinner {
        width:100px;
        height:100px;
        background-color: white;
        margin: 100px auto;
        -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
        animation: sk-rotateplane 1.2s infinite ease-in-out;
    }
    @-webkit-keyframes sk-rotateplane {
        0% {
            -webkit-transform: perspective(120px);
        }
        50% {
            -webkit-transform: perspective(120px) rotateY(180deg);
        }
        100% {
            -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
        }
    }
    @keyframes sk-rotateplane {
        0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        }
        100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }

}
</style>
