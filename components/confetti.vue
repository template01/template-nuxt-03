
<template>
<div id="confetti beigeBackground">
  <div class="uk-container uk-height-viewport">
    <div class="uk-inline  uk-height-viewport  uk-height-viewport uk-width-1-1">

      <!-- Place any content, like an image, here -->

      <div class="uk-position-center">
        <h1 class="uk-text-center">
          Template Studio
        </h1>
        <h1 class="hugeLetters">
        POP! POP! POP!
        </h1>
        <h1 class="uk-text-center">
         Website Launch
        </h1>
      </div>

      <div class="uk-position-bottom uk-margin-large">
        <h4 class="uk-text-center">
          Accompanying borrel November 20'th
        </h4>
      </div>

    </div>

  </div>
  <div class="js-confettiWrapper confettiWrapper"></div>
</div>
</template>


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
