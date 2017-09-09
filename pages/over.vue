<template>
<defaultpage id="over">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">
          <div>
            <h1 v-html="content" style="font-weight:800"></h1>
          </div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>


  <div id="branding" class="green-background green-color" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">
    <div class="slantTopRight" ></div>


    <div class="uk-container">


      <div class="uk-padding beige-color-force">

        <div uk-grid>
          <div class="uk-width-2-3@m">
            <h1 class="hugeLetters" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Branding</h1>
          </div>

          <div class="uk-width-1-3@m ">


            <h3 class="">
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3>
            <div class="uk-paddding green-color-force uk-padding">
              <div class="uk-align-center uk-paddding green-color-force uk-padding beige-background uk-width-5-6@m">
                <img uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-align-center uk-margin-remove-bottom " src="https://i2.wp.com/aa-mktg.com/wp-content/uploads/2016/08/chanel.png
              " />
              </div>
            </div>

          </div>

          <div class="uk-width-1-3@m">
            <h3>
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3></div>
          <div class="uk-width-2-3@m">
            <h1 class="hugeLetters" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Branding</h1>
          </div>


          <div class="uk-width-1-3@m ">

            <div class="uk-paddding green-color-force uk-padding">
              <div class="uk-align-center uk-paddding green-color-force uk-padding beige-background uk-width-5-6@m">
                <img uk-scrollspy="cls: uk-animation-fade; repeat: true" class="uk-align-center uk-margin-remove-bottom " src="https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11049256_807228486020798_1964534238_n.jpg" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>


  <div id="code" class="blue-background blue-color uk-height-viewport" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">

    <div class="slantTopLeft"></div>
    <div class="uk-container">

      <div class="uk-padding pink-color-force">
        <div uk-grid>
          <div class="uk-width-1-1@m">
            <h1 class="hugeLetters uk-text-center" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Code</h1>
          </div>
          <div class="uk-width-1-3@m">
            <h3 class="">
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3></div>

          <div class="uk-width-1-3@m">
            <h3>
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3></div>
        </div>

      </div>
    </div>
  </div>

  <div id="design" class="pink-background pink-color uk-height-viewport" :uk-parallax="getsmallscreen ? 'y: 100,0; viewport: 0.4' : 'y: 300,0; viewport: 0.4'">
    <div class="slantTopRight"></div>
    <div class="uk-container">

      <div class="uk-padding black-color-force">
        <div uk-grid>
          <div class="uk-width-1-1@m">
            <h1 class="hugeLetters uk-text-center" uk-parallax="opacity: 0,2; y: 100,0; viewport: 0.5">Design</h1>
          </div>
          <div class="uk-width-1-3@m">
            <h3 class="">
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3></div>

          <div class="uk-width-1-3@m">
            <h3>
            Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
          </h3></div>
        </div>

      </div>
    </div>
  </div>
</defaultpage>

</template>

<script>
import defaultpage from '~/components/defaultpage.vue'

export default {
  components: {
    defaultpage,
  },
  data: function() {
    return {
      paralaxy: '500,0',
      content:"Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt."
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
#over {

    #intro {
        overflow-y: hidden;
    }

    #branding {

        -webkit-box-shadow: 0 300px 0 0;
        -moz-box-shadow: 0 300px 0 0;
        box-shadow: 0 300px 0 0;

    }

    #design {}

    #code {
        -webkit-box-shadow: 0 300px 0 0;
        -moz-box-shadow: 0 300px 0 0;
        box-shadow: 0 300px 0 0;

    }
}
</style>
