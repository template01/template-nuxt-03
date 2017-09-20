 <template>
<div id="" :style="{'color':passedmenucolor}">

  <div class="uk-align-left">

    <!-- <h2 v-if="$i18n.locale === 'en'"><nuxt-link class="ignoreUnderline" :to="{path:'/', query: { lang: 'en' }}">Template </nuxt-link><nuxt-link :to="{path:'/', query: { lang: 'en' }}">Studio</nuxt-link></h2>
    <h2 v-else><nuxt-link class="ignoreUnderline" :to="{path:'/'}">Template </nuxt-link><nuxt-link :to="{path:'/'}">Studio</nuxt-link></h2> -->
    <h2 v-if="$i18n.locale === 'en'"><nuxt-link class="ignoreUnderline" :to="{path:'/', query: { lang: 'en' }}">Template Studio</nuxt-link></h2>
    <h2 v-else><nuxt-link class="ignoreUnderline" :to="{path:'/'}">Template Studio</nuxt-link></h2>
  </div>

  <div class="uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right">
    <div class="uk-padding uk-padding-remove-vertical uk-padding-remove-right">


      <h2 v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/werk', query: { lang: 'en' }}">
        {{$t("menu.topmenu.work")}}</nuxt-link></h2>
      <h2 v-else><nuxt-link :to="{path:'/werk'}">
        {{$t("menu.topmenu.work")}}</nuxt-link></h2>
    </div>

  </div>

  <div class="uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right">
    <div class="uk-padding uk-padding-remove-vertical uk-padding-remove-right">


      <h2 v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/services', query: { lang: 'en' }}">
        {{$t("menu.topmenu.services")}}</nuxt-link></h2>
      <h2 v-else><nuxt-link :to="{path:'/services'}">
        {{$t("menu.topmenu.services")}}</nuxt-link></h2>
    </div>

  </div>

  <div class="uk-align-left uk-padding uk-padding-remove-vertical uk-padding-remove-right">
    <div class="uk-padding uk-padding-remove-vertical uk-padding-remove-right">
      <h2 v-if="$i18n.locale === 'en'"><nuxt-link :to="{path:'/studio', query: { lang: 'en' }}">
        {{$t("menu.topmenu.about")}}</nuxt-link></h2>
      <h2 v-else><nuxt-link :to="{path:'/studio'}">
        {{$t("menu.topmenu.about")}}</nuxt-link></h2>
    </div>
  </div>

  <div class="uk-align-right">
    <h2 class="uk-text-right">
      <span  class=""><nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/contact', query: { lang: 'en' }}">{{$t("menu.topmenu.contact")}}</nuxt-link>
        <nuxt-link v-else :to="{path:'/contact'}">{{$t("menu.topmenu.contact")}}</nuxt-link>
      </span>
      <!-- <span class="uk-padding  uk-padding-remove-right  uk-padding-remove-vertical" v-if="$route.path != '/'">
        <nuxt-link v-if="$i18n.locale === 'en'" :to="{path:'/', query: { lang: 'en' }}">
          <span>{{$t("menu.topmenu.index")}}</span>
        </nuxt-link>
        <nuxt-link v-else :to="{path:'/'}">
          <span>{{$t("menu.topmenu.index")}}</span>
        </nuxt-link>
      </span> -->
      <span class="uk-padding  uk-padding-remove-right  uk-padding-remove-vertical"><nuxt-link :to="{}" replace>NL</nuxt-link> / <nuxt-link :to="{query: { lang: 'en' }}">EN</nuxt-link></span>
    </h2>
  </div>

</div>
</template>
<script>
export default {
  data: function() {
    return {}
  },
  props: ['passedmenucolor'],
  mounted() {}
}
</script>
<style lang="scss" scoped>
* {
    text-transform: uppercase;
    margin: 0;
}

.ignoreUnderline {
    text-decoration: none;
}

h2,
h4 {
    color: inherit;
}
a {
    color: inherit;
}
</style>
