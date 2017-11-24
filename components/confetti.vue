
<template>
<div id="confetti beigeBackground">
  <div class="uk-container">
    <div class=" uk-width-1-1 uk-padding">

      <!-- Place any content, like an image, here -->

      <div class="uk-padding">
        <h2 class="uk-text-center">
          Template Studio
        </h2>
        <h2 class="hugeLetters uk-text-center">
        POP! POP! POP!
      </h2>
        <h2 class="uk-text-center">
         Website Launch
       </h2>
      </div>

      <div class="uk-align-center " :class="issmallscreen?'':'uk-position-bottom'" >
        <div class="uk-width-2-3@m uk-align-center">
        <div class="" uk-grid>

          <div class="uk-width-1-2@m">
            <h4 class="">
              Template is nu Template Studio. Dit markeren we met een nieuwe identiteit en re-launch van onze website. Verder nog werken we sinds maart van dit jaar vanuit de Fabriek van Delfshaven. This calls for a frimibo.
          </h4>
          </div>
          <div class="uk-width-1-2@m ">
            <h4 class="">
              Template is Template Studio. We're marking this with the launch of our new identity and website. Topping this off, we rescently relocated to the Fabriek van Delfshaven. All in all it really only calls for a dutch borrel.

          </h4>

          </div>
          <div class="uk-width-1-1@m ">
          <h2 class="uk-text-center uk-padding uk-padding-remove-bottom uk-padding-remove-horizontal">
           Borrel - 15/12/17 - 17:00 ~ 20:00 - Fabriek van Delfshaven
         </h2>
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
      confettiInterval: null
    }
  },

  methods: {
    stopConfetti() {
      window.clearTimeout(this.removeTimeout);
      window.clearInterval(this.confettiInterval);
    },

  },

  destroyed() {
    this.stopConfetti()
  },



  mounted() {
    const Confettiful = function(el) {
      this.el = el;
      this.confettiWrapperEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
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
        const confettiSize = (Math.floor(Math.random() * 30) + 7) + 'px';
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
    cursor: pointer;
}
#confetti {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    // z-index: 999999999;
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
    border-radius: 0;
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
