<template>
<div>
  <transition name="fade">
    <loadingsingle class="loadingsingle" v-if="!getinitiated"></loadingsingle>
  </transition>
  <nav id="menu">
    <div :class="{'hideSidebarContent':!mounted}">
      <div class="uk-padding-small uk-padding-remove-bottom" @click="toggleMenu">
        <button class="toggle-button-menu black-background"><img class="uk-visible@l" src="/hamburger.svg"/><img class="uk-hidden@l" src="/hamburgerSm.svg"/></button>
      </div>
      <div style="padding:15px;">
        <menuitems class="black-color-force" :sidebar="true"></menuitems>
      </div>

    </div>
  </nav>

  <main class="" id="panel" v-if="reinitiateUikit">
    <div id="fixme">
      <div  class="slide-button" @click="toggleMenu" :class="{ 'slide-out-button': !menuopenshow }">
        <button class="toggle-button black-background"><img class="uk-visible@l"  src="/hamburger.svg"/><img class="uk-hidden@l" src="/hamburgerSm.svg"/></button>
      </div>
      <div  class="slide-button slide-button-delay uk-visible@m" @click="scrollToTop()" :class="{ 'slide-out-button': !menuopenshow }">
        <button class="toggle-button black-background ignoreHover slide-item-up-xsmall "><img class="uk-visible@l"  src="/arrowUp.svg"/><img class="uk-hidden@l" src="/arrowUpSm.svg"/></button>
      </div>
    </div>


    <section class="defaultpage" :class="{'fadein':loaded}">
      <div class="uk-container uk-visible@m" id="">
        <div class="uk-padding uk-padding-remove-horizontal" id="menudefault">
          <div class="uk-width-1-1 uk-align-center ignoreWidthSmallScreen" >
            <menuitems class="black-color-force"></menuitems>
          </div>
        </div>
      </div>

      <div class="">
        <div :class="issmallscreen ? '':'offsetSlantTop'">
          <slot>

          </slot>
        </div>

      </div>
      <templatefooter :iserrorpage="iserrorpage" class="black-color-force" v-if="$route.path != '/contact'"></templatefooter>
      <templatefooter :iserrorpage="iserrorpage" class="black-color-force" v-else ignoreSecondColumn=true></templatefooter>
    </section>

  </main>

</div>
</template>
<script>
import menuitems from '~/components/menuitems.vue'
import templatefooter from '~/components/templatefooter.vue'
import loadingsingle from '~/components/loadingsingle.vue'


import {
  mapGetters
} from 'vuex'

import _ from 'lodash'

export default {

  components: {
    menuitems,
    loadingsingle,
    templatefooter,
  },


  computed: {
    ...mapGetters({
      getinitiated: "getinitiated",
    }),
  },

  props:['iserrorpage'],

  methods: {


    initSlideout: function() {
      var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 280,
        'tolerance': 70,
        'side': 'right',
        'touch' : false
      });

      this.slideoutObj = slideout


      var vm = this
      slideout.on('open', function() {
        vm.menuopenshow = false
      });

      slideout.on('close', function() {
        vm.menuopenshow = true
      });
    },


    destroySlideout: function() {
      this.slideoutObj.destroy();
    },

    closeMenu: function() {
      this.slideoutObj.close();
      this.$store.commit('SET_SIDEBARCLOSE')
    },

    openMenu: function() {
      this.slideoutObj.open();
    },

    toggleMenu: function() {
      this.slideoutObj.toggle();
      this.$store.commit('SET_SIDEBARTOGGLE')
    },

    scrollToTop: function(){
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    },

    //
    // open: function() {
    //   this.menuopenshow = false
    //
    // },
    //
    // close: function() {
    //   this.menuopenshow = true
    //
    // },
    //
    // closeSidebar: function() {
    //   // this.$children[0].slideout.close()
    // },
    // test: function() {
    //   console.log('scroll')
    // },

    handleScroll() {
      this.scrolled = window.scrollY > 0;
      if (!this.issmallscreen) {
        if (window.scrollY > 100) {
          this.menuopenshow = true
        } else {
          this.menuopenshow = false
        }
      }
    },



  },
  // mixins:[computedresizer],
  data: function() {
    return {
      menuopenshow: false,
      mounted: false,
      scrolled: false,
      loaded: false,
      slideoutObj: null,
      reinitiateUikit: true
    }
  },

  destroyed() {

    this.closeMenu()
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {

    this.initSlideout()

    this.mounted = true


    window.addEventListener('scroll', this.handleScroll);
    if (this.issmallscreen) {
      this.menuopenshow = true
    }

    this.$nextTick(() => {
      var vm = this
      vm.loaded = true
      setTimeout(function() {
        vm.$store.commit('SET_INITIATED')
      }, 1500)
    })


    if(this.issmallscreen && !this.getinitiated){
      var vm = this
      var savedScrollPos = window.scrollY
      vm.reinitiateUikit = false
      vm.destroySlideout()
      setTimeout(function() {
        vm.reinitiateUikit = true
        setTimeout(function() {
          window.scrollTo(0, savedScrollPos)
          vm.initSlideout()
        }, 10)

      }, 1)
    }


  },


  watch: {
    issmallscreen: function(val) {


      if (val) {
        this.menuopenshow = true
      } else {
        if (window.scrollY < 100) {
          this.menuopenshow = false
        }

      }

      var vm = this
      var savedScrollPos = window.scrollY
      vm.reinitiateUikit = false
      vm.destroySlideout()
      setTimeout(function() {
        vm.reinitiateUikit = true
        setTimeout(function() {
          window.scrollTo(0, savedScrollPos)
          vm.initSlideout()
        }, 10)

      }, 1)


    }



  },

  beforeDestroy: function() {
    // window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>


<style lang="scss">

#panel{
  background: inherit;
}
.loadingsingle {
    opacity: 1;
    transition: opacity 0.25s;
    // transition-delay: 0.25s;
    &.fadeout {
        opacity: 0;
    }

}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.hideSidebarContent {
    display: none;
}

.slide-button {
    transition: opacity 0.25s, transform 0.25s;
    padding-bottom: 7px;
}
.slide-button-delay{
  transition-delay: 0.125s
}

.slide-out-button {
    opacity: 0;
    transform: translateX(30px);
}

#fixme {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 99999 !important;
}


.toggle-button,
.toggle-button-menu {
    cursor: pointer;
    color: beige;
    outline: none;
    border-radius: 100%;
    padding: 2px;
    font-size: 20px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    margin: 0;
    transition: transform 0.25s;
    @media (min-width: 1200px){
      font-size: 20px;
      width: 40px;
      height: 40px;
      line-height: 20px;
    }

}

.toggle-button{
  border: 0;

}
.toggle-button-menu {
    transform: rotate(90deg);
    border: 0;
}
.toggle-button-menu:hover {
    transform: rotate(0deg);
}
.toggle-button:hover {
    &:not(.ignoreHover){
      transform: rotate(90deg);

    }
}

.slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 280px;
    min-height: 100vh;
    // overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background: #ffd573;
}

.slideout-menu-left {
    left: 0;
}

.slideout-menu-right {
    right: 0;
}

.slideout-panel {
    position: relative;
    z-index: 1;
    // will-change: transform;
    // background-color: red;
    /* A background-color is required */
    min-height: 100vh;
}

.slideout-open,
.slideout-open .slideout-panel,
.slideout-open body {
    overflow: hidden;
}

.slideout-open .slideout-menu {
    display: block;
}

// .slideout-menu {
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     width: 280px;
//     height: 1000vh;
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;
//     z-index: 0;
//     display: none;
//     background-color: orange;
// }
//
// .slideout-menu-left {
//     left: 0;
// }
//
// .slideout-menu-right {
//     right: 0;
// }
//
// .slideout-panel {
//     position: relative;
//     z-index: 1;
//     /*will-change: transform;*/
//     min-height: 100vh;
// }
//
// .slideout-open,
// .slideout-open .slideout-panel,
// .slideout-open body {
//     overflow: hidden;
// }
//
// .slideout-open .slideout-menu {
//     display: block;
// }
</style>
