<template>
<div>
  <Slideout menu="#menu" panel="#panel" side="right" :toggleSelectors="['.toggle-button','.toggle-button-menu']" @on-close="close" @on-open="open">
    <nav class="" id="menu">
      <div :class="{'hideSidebarContent':!mounted}">
        <div class="uk-padding-small uk-padding-remove-bottom">
          <button class="toggle-button-menu black-background"><span uk-icon="icon: menu"></span></button>
        </div>
        <menuitemsside></menuitemsside>
      </div>
    </nav>
    <main class="beige-background" id="panel">

      <div id="fixme" class="slide-button" :class="{ 'slide-out-button': !menuopenshow }">
        <button class="toggle-button black-background"><span uk-icon="icon: menu"></span></button>
      </div>

      <section class="defaultpage" :class="{'fadein':loaded}">
        <div class="uk-container uk-visible@m" id="">
          <div class="uk-padding" id="menudefault">
            <menuitems class=""></menuitems>
            <!-- <menuitemsmobile class="uk-hidden@m"></menuitemsmobile> -->
          </div>
        </div>

        <div class="">
          <div>
            <!-- SLOT AREA -->
            <slot>

            </slot>
          </div>

        </div>

        <templatefooter></templatefooter>
      </section>

    </main>
  </Slideout>



</div>
</template>
<script>
import menuitems from '~/components/menuitems.vue'
import menuitemsmobile from '~/components/menuitemsmobile.vue'
import menuitemsside from '~/components/menuitemsside.vue'
import templatefooter from '~/components/templatefooter.vue'
// import computedresizer from '~/mixins/computedresizer.js'

import _ from 'lodash'

export default {

  components: {
    menuitems,
    menuitemsmobile,
    menuitemsside,
    templatefooter,
  },


  methods: {
    open: function() {
      this.menuopenshow = false

    },

    close: function() {
      this.menuopenshow = true

    },

    closeSidebar: function() {
      this.$children[0].slideout.close()
    },
    test: function() {
      console.log('scroll')
    },

    handleScroll() {
      this.scrolled = window.scrollY > 0;
      if (!this.getsmallscreen) {
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
      loaded: false
    }
  },
  destroyed() {
    this.closeSidebar()
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.mounted = true
    window.addEventListener('scroll', this.handleScroll);
    if (this.getsmallscreen) {
      this.menuopenshow = true
    }

    this.$nextTick(() => {
      this.loaded = true
    })

  },



  watch: {
    getsmallscreen: function(val) {
      if (val) {
        this.menuopenshow = true
      } else {
        if (window.scrollY < 100) {
          this.menuopenshow = false
        }

      }
    }
  },

  beforeDestroy: function() {
    // window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>


<style lang="scss">
.defaultpage {
    opacity: 0;
    transition: opacity 0.25s;
    // transition-delay: 0.25s;
    &.fadein {
        opacity: 1;
    }

}


.hideSidebarContent {
    display: none;
}

.slide-button {
    transition: opacity 0.25s, transform 0.25s;
}

.slide-out-button {
    opacity: 0;
    transform: translateX(30px);
}

#fixme {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 99999 !important;
}

.toggle-button,
.toggle-button-menu {
    cursor: pointer;
    border: 0;
    background: 0;
    font-size: 20px;
    color: beige;
    outline: none;
    background: black;
    border-radius: 100%;
    padding: 2px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    margin: 0;
    transition: transform 0.25s;
}

.toggle-button-menu {
    transform: rotate(90deg);
}
.toggle-button-menu:hover {
    transform: rotate(0deg);
}
.toggle-button:hover {
    transform: rotate(90deg);
}

.slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 1000vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: orange;
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
    /*will-change: transform;*/
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
</style>
