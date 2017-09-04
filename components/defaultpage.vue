<template>
  <div>


    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button','.toggle-button-menu']" @on-close="close" @on-open="open">
      <nav id="menu">
              <div>
                <div class="uk-padding uk-padding-remove-bottom">
                  <button class="toggle-button-menu">X</button>
                </div>
                <menuitemsside></menuitemsside>
                </div>
            </nav>
            <main id="panel">

                <div  id="fixme" class="slide-button" :class="{ 'slide-out-button': !menuopenshow }">
                  <button  class="toggle-button">☰</button>
                </div>


              <section class="uk-container uk-container-center ">
                <div class="uk-padding" id="">
                <div class="uk-padding uk-padding-remove-horizontal" id="menusplash">
                  <menuitems></menuitems>
                </div>
                </div>

                <div class="uk-padding uk-padding-remove-top">
                  <div class="uk-padding uk-padding-remove-top">
                    <slot>

                    </slot>
                  </div>
                </div>

                <templatefooter></templatefooter>
              </section>

            </main>
            <div @click="somethingClicked">
              hello
            </div>
    </Slideout>



</div>
</template>
<script>
import menuitems from '~/components/menuitems.vue'
import menuitemsside from '~/components/menuitemsside.vue'
import templatefooter from '~/components/templatefooter.vue'

export default {

  components: {
    menuitems,
    menuitemsside,
    templatefooter
  },
   methods: {
    open: function () {
      console.log('slideoutOpen')
      this.menuopenshow = false

    },

    close: function () {
      console.log('CLOSEee')
      this.menuopenshow = true

    },

    somethingClicked: function () {
  this.$children[0].slideout.close()
}
  },
  data: function(){
    return {
      menuopenshow: true,
    }
  },
  watch: {

    'menuopenshow': function(){
      alert('changfe')

    },
    '$route' : function(){
      // react to route changes...
      console.log('heyyeyeye')
      this.$children[0].slideout.close()

    }
  }
}
</script>


<style>

.slide-button{
  transition: opacity 0.25s, transform 0.25s;
}
  .slide-out-button{
    opacity: 0;
    transform: translateX(30px);
  }

  #fixme{
    position: fixed;
    top: 30px;
    left: 30px;
    z-index: 99999;
  }

  .slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
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
    background: beige;

    position: relative;
    z-index: 1;
    /*will-change: transform;*/
    min-height: 100vh;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
  }
</style>
