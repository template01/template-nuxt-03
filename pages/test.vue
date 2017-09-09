<template>
<div id="test">
  <nav id="menu">
    <header>
      <h2>Menu</h2>
    </header>
  </nav>

  <main id="panel">
    <header>
      <h2 @click="toggleMenu">Panel</h2>
    </header>
  </main>

</div>
</template>

<script>
export default {

  components: {},

  data: () => ({
    slideoutObj: null,
  }),
  transition: 'bounce',
  mounted() {

    this.slideoutObj = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });


    // this.slideoutObj.open();

  },

  methods: {
    closeMenu: function() {
      this.slideoutObj.close();
    },

    openMenu: function() {
      this.slideoutObj.open();
    },

    toggleMenu: function() {
      this.slideoutObj.toggle();
    },


    test: function(){
      alert('heyeyey')
    }
  }

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style scoped>
.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background: green;
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
  will-change: transform;
  background-color: red;
  /* A background-color is required */
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
