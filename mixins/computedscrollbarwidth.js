import Vue from 'vue'

Vue.mixin({
  data: function() {
    return {
      datascrollbarwidth: 0,
    }
  },

  mounted(){
    this.datascrollbarwidth  =  window.getScrollbarWidth()
  }

})
