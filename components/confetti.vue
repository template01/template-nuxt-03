
<template>
<div id="confetti" class="black-background beige-color-force" v-if="reinitiateUikit">

  <div class="uk-container uk-height-viewport">
    <div class=" uk-width-1-1 uk-padding">


      <div class="uk-padding">
        <p :class="issmallscreen?'uk-h4':'uk-h2'" class=" uk-text-center">
          Template Studio
        </p>
        <h1 class="hugeLetters uk-text-center">
          Hurrah!
      </h1>
      <p :class="issmallscreen?'uk-h4':'uk-h2'" class=" uk-text-center slide-item-right-small" :style="{'margin-top':issmallscreen?'40px':'50px'}">
       <nuxt-link style="box-shadow: inset 0 0 0 0;" :to="{path:'/'}">Website launch<i class="icon-right-1"></i></nuxt-link>

     </p>
      </div>

      <div class="uk-align-center " :class="issmallscreen?'':'uk-position-bottom'" >
        <div class="uk-width-2-3@m uk-align-center">
        <div class="" uk-grid>

          <div class="uk-width-1-2@m">
            <p class="uk-h4">
              Template is nu Template Studio. We vieren dit met een nieuwe identiteit en website launch. Ook best nieuw: sinds maart werken we vanuit de Fabriek van Delfshaven. Tijd voor een borrel!
          </p>
          </div>
          <div class="uk-width-1-2@m ">
            <p class="uk-h4">

Template is now Template Studio. We're marking this with the launch of our new identity and website. We also recently relocated to a new studio in the Fabriek van Delfshaven. This calls for a Dutch borrel!

          </p>

          </div>
          <div class="uk-width-1-1@m ">
          <p :class="issmallscreen?'uk-h4':'uk-h2'"  class="uk-h2 uk-text-center uk-padding uk-padding-remove-bottom uk-padding-remove-horizontal">
           Borrel - 15/12/17 - 17:00 ~ 20:00 - <a href="https://www.google.nl/maps/place/Mathenesserdijk+416,+3026+Rotterdam/@51.9103946,4.446202,17z/data=!3m1!4b1!4m5!3m4!1s0x47c434ecbd645e93:0x894648c2f46b6b77!8m2!3d51.9103946!4d4.4483907?hl=en" target="_blank">Fabriek van Delfshaven</a>
         </p>
          </div>
        </div>
        </div>

      </div>

    </div>

  </div>
  <div class="js-confettiWrapper confettiWrapper"></div>
</div>
</template>



<script>
export default {
  transition: 'bounce',

  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.index'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('meta.index.content')
      }]
    }
  },


  data: function() {
    return {
      // smallscreen: null,
      // confetti: false
      removeTimeout: null,
      confettiInterval: null,
      reinitiateUikit: true,
    }
  },

  methods: {
    stopConfetti() {
      window.clearTimeout(this.removeTimeout);
      window.clearInterval(this.confettiInterval);
    },

  },
  computed:{
    computedconfettisize(){
      return this.issmallscreen ? 8 : 14
    }
  },

  destroyed() {
    this.stopConfetti()
  },



  mounted() {
    if(this.issmallscreen){
        this.reinitiateUikit = false
        this.reinitiateUikit = true
    }

    const Confettiful = function(el) {
      this.el = el;
      this.confettiWrapperEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = ['#0000ff', '#00FF00','#e8f7fc', '#ff7768'];

      this.confettiAnimations = ['slow', 'medium'];

      this._setupElements();
      this._renderConfetti();
    };

    var vm = this

    Confettiful.prototype._setupElements = function() {
      const confettiWrapperEl = document.createElement('div');
      const elPosition = this.el.style.position;

      if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'relative';
      }

      confettiWrapperEl.classList.add('confetti-confettiWrapper');

      this.el.appendChild(confettiWrapperEl);

      this.confettiWrapperEl = confettiWrapperEl;
    };

    Confettiful.prototype._renderConfetti = function() {
      vm.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        const confettiSize = (Math.floor(Math.random() * (vm.computedconfettisize*2)) + vm.computedconfettisize) + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        vm.removeTimeout = setTimeout(function() {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);
        this.confettiWrapperEl.appendChild(confettiEl);
      }, 100);
    };

    window.confettiful = new Confettiful(document.querySelector('.js-confettiWrapper'));



  },




}
</script>

<style lang="scss">
* {
}
#confetti {

}
@keyframes confetti-slow {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
        transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
    }
}
@keyframes confetti-medium {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
        transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
    }
}
@keyframes confetti-fast {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
        transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
    }
}
.confettiWrapper {
    width: 100%;
    height: 100%;
}

.confetti-confettiWrapper {

    perspective: 700px;
    pointer-events: none;

    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.confetti {
    position: absolute;
    z-index: 1;
    top: -10px;
    border-radius: 100%;
}
.confetti--animation-slow {
    animation: confetti-slow 2.25s linear 1 forwards;
}
.confetti--animation-medium {
    animation: confetti-medium 1.75s linear 1 forwards;
}
.confetti--animation-fast {
    animation: confetti-fast 1.25s linear 1 forwards;
}
</style>
