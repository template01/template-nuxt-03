<template>
<defaultpage id="werkwijze">

  <div id="intro" class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">
          <div>
            <h1 style="font-weight:800">Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor
            </h1></div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>

  <div id="branding" class="uk-height-viewport killPadding" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">

    <div class="slantTopRight"></div>

    <div class="uk-padding">
      <div class="uk-padding">

        <div uk-grid>
          <div class="uk-width-2-3@m">
            <h1 class="hugeLetters" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Branding</h1>
          </div>
          <div class="uk-width-1-3@m">
            <h4>
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h4></div>

          <div class="uk-width-1-3@m">
            <h4>
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h4></div>
          <div class="uk-width-2-3@m">
            <h1 class="hugeLetters" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Branding</h1>
          </div>

        </div>

      </div>
    </div>
  </div>


  <div id="code" class="uk-height-viewport killPadding"  :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">

    <div class="slantTopLeft slantTopLeftBlack"></div>

    <div class="uk-padding">
      <div class="uk-padding ">
        <h1 class="hugeLetters uk-text-center" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Code</h1>
      </div>
    </div>
  </div>

  <div id="design" class="uk-height-viewport killPadding">
    <div class="uk-padding">
      <div class="uk-padding">
        <h1 class="hugeLetters uk-text-right">Design</h1>
      </div>
    </div>
  </div>
</defaultpage>
<!-- <section id="over" class="container">
  <div class="uk-padding uk-padding-remove-bottom" id="menusplash">
    <menuitems></menuitems>
  </div>

  <div class="uk-padding uk-padding-remove-top">
    <div class="uk-padding uk-padding-remove-top">
      <div class="">
        <h1 style="font-weight:800">over</h1>
      </div>
    </div>
  </div>

  <templatefooter></templatefooter>
</section> -->
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import computedresizer from '~/mixins/computedresizer.js'

export default {


  components: {
    defaultpage,
  },
  mixins:[computedresizer],
  data: function() {
    return {
      paralaxy: '500,0',
    }
  },

  transition: 'bounce',


  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style lang="scss" scoped>
#werkwijze {


    // the slant classes does not work without paralax ( because position relative is not set)
    .slantTopLeft {
        height: 0;
        border-width: 0 0 40px calc(100vw - 15px);
        position: absolute;
        top: -40px;
        border-style: solid;
        border-color: transparent orange orange transparent;
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);

    }

    .slantTopRight {
        height: 0;
        border-width: 0 0 40px calc(100vw - 15px);
        position: absolute;
        top: -40px;
        border-style: solid;
        border-color: transparent orange orange transparent;
    }

    .slantTopRightBlack,.slantTopLeftBlack{
      border-color: transparent black black transparent;
    }



    background: beige;

    #intro {
        background: beige;
        overflow-y: hidden;
    }

    #branding {
        background: orange;
        * {
            // color: lime;
        }

        -webkit-box-shadow: 0px 300px 0px 0px orange;
-moz-box-shadow: 0px 300px 0px 0px orange;
box-shadow: 0px 300px 0px 0px orange;

    }
    #design {
        background: green;
        * {
            color: white;
        }
    }

    #code {
        background: black;
        * {
            color: lime;
        }
    }
}
</style>
