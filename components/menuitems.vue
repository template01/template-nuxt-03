 <template>
<div id="menuitems" :style="{'color':passedmenucolor}" :class="[sidebar ? 'sidebar':'',indexMobile ? 'indexMobile':'']">
  <div id="mainMenuItems">

    <!-- {{getlocale}} -->
  <div :class="sidebar ? 'sidebarItem' : 'uk-align-left'">
    <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-if="$i18n.locale === 'en'"><nuxt-link class="ignoreUnderline" :to="{path:'/', query: { lang: 'en' }}">Template Studio</nuxt-link></p>
    <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-else><nuxt-link class="ignoreUnderline" :to="{path:'/'}">Template Studio</nuxt-link></p>
  </div>

  <div :class="sidebar ? 'sidebarItem' : 'uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right'" >
    <div :class="sidebar ? '' : 'uk-padding uk-padding-remove-vertical uk-padding-remove-right'">


      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/werk', query: { lang: 'en' }}">
        {{$t("menu.topmenu.work")}}</nuxt-link></p>
      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-else><nuxt-link :to="{path:'/werk'}">
        {{$t("menu.topmenu.work")}}</nuxt-link></p>
    </div>

  </div>

  <div :class="sidebar ? 'sidebarItem' : 'uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right'" >
    <div :class="sidebar ? '' : 'uk-padding uk-padding-remove-vertical uk-padding-remove-right'">


      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/services', query: { lang: 'en' }}">
        {{$t("menu.topmenu.services")}}</nuxt-link></p>
      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-else><nuxt-link :to="{path:'/services'}">
        {{$t("menu.topmenu.services")}}</nuxt-link></p>
    </div>

  </div>

  <div :class="sidebar ? 'sidebarItem' : 'uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right'" >
    <div :class="sidebar ? '' : 'uk-padding uk-padding-remove-vertical uk-padding-remove-right'">
      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/studio', query: { lang: 'en' }}">
        {{$t("menu.topmenu.about")}}</nuxt-link></p>
      <p :class="sidebar ? 'uk-h4' : 'uk-h2'" v-else><nuxt-link :to="{path:'/studio'}">
        {{$t("menu.topmenu.about")}}</nuxt-link></p>
    </div>
  </div>
</div>


  <div id="langChange" :class="sidebar ? 'sidebarItem' :'uk-align-right'">
    <p :class="sidebar ? 'uk-h4' : 'uk-h2 uk-text-right'" >
      <span  :class="sidebar ? 'sidebarItem':''"><nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">{{$t("menu.topmenu.contact")}}</nuxt-link>
        <nuxt-link v-else :to="{path:'/contact'}">{{$t("menu.topmenu.contact")}}</nuxt-link>
      </span>
      <span :class="sidebar ? '' :'uk-padding  uk-padding-remove-right  uk-padding-remove-vertical'"><nuxt-link :class="getlocale ==='nl' ? 'nuxt-link-exact-active':''" :to="{}">NL</nuxt-link> / <nuxt-link :class="getlocale ==='en' ? 'nuxt-link-exact-active':''" :to="{query: { lang: 'en' }}">EN</nuxt-link></span>
    </p>
  </div>

</div>
</template>
<script>
import computedlocalemixin from '~/mixins/computedlocalemixin.js'

export default {
  data: function() {
    return {}
  },
  mixins: [computedlocalemixin],
  props: ['passedmenucolor', 'sidebar','indexMobile'],
  mounted() {}
}
</script>
<style lang="scss" scoped>
// #mainMenuItems{
.nuxt-link-exact-active {
    display: inline-block;
    -webkit-box-shadow: inset 0 -3px 0 0;
    -moz-box-shadow: inset 0 -3px 0 0;
    box-shadow: inset 0 -3px 0 0;
    transition: box-shadow 0.0s;
}
@media (max-width: 959px) {

    .nuxt-link-exact-active {
        -webkit-box-shadow: inset 0 -2px 0 0;
        -moz-box-shadow: inset 0 -2px 0 0;
        box-shadow: inset 0 -2px 0 0;
    }

}

#menuitems {
    transition: color 1s;
    // &.mobileMenuIndex{
    //   // display: none;
    //
    //       .sidebarItem{
    //         float: left;
    //         padding-right: 10px;
    //       }
    // }
    //
    &:not(.indexMobile){
      .sidebarItem{
        padding-bottom: 10px;
        display: block;
        clear: both;
      }
    }

    &.indexMobile {
        @media all and (orientation:portrait) {
            /* Style adjustments for portrait mode goes here */
            .sidebarItem {
                padding-bottom: 10px;
                display: block;
                clear: both;
            }
        }
        @media all and (orientation:landscape) {
            /* Style adjustments for landscape mode goes here */
            .sidebarItem {
                // padding-bottom: 10px;
                float: left;
                padding-right: 10px;

                // display: block;
                // clear: both;

            }
        }

    }

}

* {
    // text-transform: uppercase;
    margin: 0;
}

.ignoreUnderline {
    text-decoration: none;
}

h2,
h4,
p {
    color: inherit;
}
a {
    color: inherit;
}
</style>
