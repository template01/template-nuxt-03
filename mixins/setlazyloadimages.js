import Vue from 'vue'

Vue.mixin({
  mounted(){
    this.$Lazyload.$once('loading', function ({ el, src }) {

        var cs = getComputedStyle(el);

        var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingButtom);

        var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
        var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

        var elementWidth = el.offsetWidth - paddingX - borderX;
        var elementHeight = el.offsetHeight - paddingY - borderY;

        el.style.height = elementWidth*(el.getAttribute('setheight')/el.getAttribute('setwidth')) + 'px'




    })

    this.$Lazyload.$on('loaded', function ({ el, src }) {
        el.style.height = 'auto'
    })

  }

})
