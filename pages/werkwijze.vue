<template>
<defaultpage id="werkwijze">
  <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
      <h1 style="font-weight:800">Incididunt occaecat fugiat id consequat eu proident reprehenderit esse eiusmod. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor. Aliquip id anim consequat dolore adipisicing sint esse non cillum est. Irure exercitation et anim proident irure anim irure proident duis fugiat consectetur labore. Sit minim aliquip do officia aliqua qui qui voluptate aute occaecat elit qui. Anim dolor esse ad elit officia mollit cillum officia. Esse amet voluptate Lorem id consectetur aliquip nisi enim sint aliqua anim deserunt. Sunt aliqua excepteur veniam laboris id. Laborum mollit reprehenderit laboris fugiat excepteur deserunt.
</h1>
    </div>
  </div>

  <div id="branding" class="uk-height-viewport killPadding">
    <div class="uk-padding">
      <div class="uk-padding">
        <div class="uk-padding">
          <h1 class="hugeLetters">Branding</h1>
        </div>
      </div>
    </div>
  </div>


  <div id="code" class="uk-height-viewport killPadding">
    <div class="uk-padding">
      <div class="uk-padding">
        <div class="uk-padding ">
          <h1 class="hugeLetters uk-text-center">Code</h1>
        </div>
      </div>
    </div>
  </div>

  <div id="design" class="uk-height-viewport killPadding">
    <div class="uk-padding">
      <div class="uk-padding">
        <div class="uk-padding">
          <h1 class="hugeLetters uk-text-right">Design</h1>
        </div>
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

export default {

  components: {
    defaultpage,
  },
  transition: 'bounce'

  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
}
</script>

<style lang="scss" scoped>
#werkwijze {
    background: beige;

    #branding {
        background: orange;
        * {
            // color: lime;
        }
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
