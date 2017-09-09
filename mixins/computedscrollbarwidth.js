import Vue from 'vue'

Vue.mixin({
  data: function() {
    return {
      datascrollbarwidth: 0,
    }
  },

  mounted(){
    var vm = this
    this.datascrollbarwidth  =  window.getScrollbarWidth()

  }

})
