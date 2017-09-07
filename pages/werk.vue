<template>
<defaultpage id="werk">
  <div id="intro beige-background" class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
    <div class="uk-padding">

      <div class="uk-child-width-expand uk-flex-center" uk-grid>
        <!-- <div></div> -->
        <div :class="{'uk-width-3-4':!getsmallscreen}">
          <div>
            <h1 style="font-weight:800">Werk intro. Esse reprehenderit consequat nostrud culpa et amet enim. Duis ad ipsum velit nisi eiusmod non quis aliqua eiusmod non aute. Aliqua in ut ipsum incididunt consectetur veniam irure ut excepteur labore voluptate. Anim labore nostrud laborum dolor
              </h1></div>
        </div>
        <!-- <div></div> -->
      </div>


    </div>
  </div>

  <div class="uk-container ">
    <div class="killPadding ">

      <div class=" uk-grid-collapse uk-text-center" uk-grid uk-height-match>


        <!-- <werktileitem :itemurl="'/content/testcontent.json'"></werktileitem> -->
        <werktileitem :menucolor="'red'" :itemurl="'/content/testcontent.json'"></werktileitem>
        <werktileitem :menucolor="'red'" :itemurl="'/content/testcontent2.json'"></werktileitem>
<!--

        <div v-if="$i18n.locale === 'en'"  class="uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle">
          <nuxt-link :to="{path:'/contact', query: { lang: 'en' }}">

          <div class="uk-padding" uk-grid>

            <div class="uk-width-1-2@m">
              <h1 class="uk-text-left hugeLetters">R&D</h1>
            </div>

            <div class="uk-width-1-2@m">
              <div class="">
                <img src="/content/img/extra_img3.jpg" />
              </div>
            </div>

            <div>
              <p class="uk-text-left uk-h4">emglish.</p>
            </div>


          </div>
          <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
            <p class="uk-text-left uk-h1 uk-text-right uk-margin-remove-bottom">{{$t("readmore")}}<span uk-icon="icon: arrow-down; ratio: 2"></span></p>
          </div>

        </nuxt-link>
        </div>


        <div v-else  class="uk-width-1-2@m pink-background uk-padding uk-inline uk-transition-toggle">
          <nuxt-link :to="{path:'/contact'}">

          <div class="uk-padding" uk-grid>

            <div class="uk-width-1-2@m">
              <h1 class="uk-text-left hugeLetters">R&D</h1>
            </div>

            <div class="uk-width-1-2@m">
              <div class="">
                <img src="/content/img/extra_img3.jpg" />
              </div>
            </div>

            <div>
              <p class="uk-text-left uk-h4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>


          </div>
          <div class="uk-width-1-1@m uk-padding  uk-transition-slide-right-medium uk-position-bottom">
            <p class="uk-text-left uk-h1 uk-text-right uk-margin-remove-bottom">{{$t("readmore")}}<span uk-icon="icon: arrow-down; ratio: 2"></span></p>
          </div>

        </nuxt-link>
        </div> -->



        <div class="uk-width-1-2@m green-background uk-padding">
          <div class="uk-padding" uk-grid>

            <div class="">
              <h1 class="uk-text-left hugeLetters">Aaaan.net</h1>
            </div>

            <div class="uk-flex uk-flex-center uk-flex-middle ">
              <div class="uk-padding uk-padding-remove-vertical">
                <img src="/content/img/overlay_aaaan1.jpg" />
              </div>
            </div>

            <div>
              <p class="uk-text-left uk-h4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

          </div>
        </div>


        <div class="uk-width-1-2@m green-background uk-padding">
          <h1 class="uk-text-left hugeLetters">Aaaan.net</h1>
          <p class="uk-text-left uk-h4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div class="uk-flex uk-flex-center uk-flex-middle uk-tile">
            <div class="uk-padding">
              <!-- <p class="uk-text-left uk-h4">Default</p> -->
            </div>
          </div>

        </div>

        <!-- <div class="uk-flex uk-flex-center uk-flex-middle uk-tile uk-width-1-2@m ">
                <div class="green-background uk-padding">
                  <p class="uk-h1">AAAAN.NET</p>
                  <p class="uk-text-left uk-h4">Default</p>
                  </div>

              </div>


              <div class="uk-flex uk-flex-center uk-flex-middle uk-tile">
                <div class="pink-background uk-padding">
                  <p class="uk-h4">pink</p>
                  </div>
              </div>


              <div class="uk-tile blue-background">
                  <p class="uk-h4">Primary</p>
              </div>


              <div class="uk-tile black-background">
                  <p class="uk-h4">Secondary</p>
              </div> -->

      </div>
    </div>
  </div>
</defaultpage>
</template>

<script>
import defaultpage from '~/components/defaultpage.vue'
import werktileitem from '~/components/werktileitem.vue'

export default {

  components: {
    defaultpage,
    werktileitem
  },
  transition: 'bounce'

}
</script>

<style lang="scss">
#werk {

  a{
    text-decoration: none;
  }
  /*background: red;*/
}
</style>
