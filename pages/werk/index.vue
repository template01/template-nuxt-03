<template>
<defaultpage class="beige-background" id="werk">

  <div class="sendToFront">


    <div class="beige-background uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top  uk-hidden@m ">
      <h1 class="uk-text-center uk-padding "><span class="mobilePageHeader">{{$t("menu.topmenu.work")}}</span></h1>
    </div>


    <div id="" class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}" :uk-parallax="issmallscreen ? 'y: 0,0; viewport: 0.4' : 'y: 0,0; viewport: 0.4'">
      <div class="slantTopLeft" :style="{'border-color': 'transparent '+content.acf.section_a.background_color+' '+content.acf.section_a.background_color+' transparent'}"></div>

      <div class="uk-container" :style="{'color':content.acf.section_a.font_color}">
        <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_a.content"></sectioncontent>

      </div>

    </div>

    <div class="section" :style="{'color':content.acf.section_a.background_color,'background-color':content.acf.section_a.background_color}">

      <div class="uk-container " :style="{'background':content.acf.section_a.background_color}">
        <div class="killPadding uk-padding uk-padding-remove-horizontal uk-padding-remove-top" id="workitems">

          <div class=" uk-grid-collapse uk-text-center" uk-grid>
            <werktileitem :inheritcolorfont="content.acf.section_a.font_color" :inheritcolorbackground="content.acf.section_a.font_color" :inheritcolor="true" v-bind:key="index" :index="index" v-for="(tile,index) in orderedWerkTiles" :datainput="tile"></werktileitem>

          </div>
        </div>
      </div>

    </div>
  </div>


  <div id="" class="section sendToBack" :style="{'color':content.acf.section_b.background_color,'background-color':content.acf.section_b.background_color}" :uk-parallax="issmallscreen ? '' : 'y: -300,0px; viewport: 0.5'">

    <div class="uk-container" :style="{'color':content.acf.section_b.font_color}">
      <sectioncontent :ignorePaddingBottom="true" :acfsection="content.acf.section_b.content"></sectioncontent>
    </div>

    <div class="uk-container uk-padding uk-padding-remove-horizontal uk-padding-remove-top" :style="{'color':content.acf.section_b.font_color}">
      <div class="uk-align-center uk-width-2-3@m uk-padding uk-padding-remove-top" :class="issmallscreen ? '':'uk-padding-remove-horizontal ' ">
        <div class="uk-text-center uk-grid-match uk-flex" v-for="yearItem in collectedYears" uk-height-match uk-grid>
          <div class="uk-width-1-1@m">
            <div class="archiveYear uk-padding-remove-horizontal uk-padding-remove-bottom uk-padding">
              <h4 v-html="yearItem[0]"></h4>
            </div>
          </div>
          <div class="uk-width-1-3@m" v-for="item in yearItem[1]">
            <werkarchiveitem :datainput="item"></werkarchiveitem>
          </div>
        </div>
      </div>
    </div>

    <div class="slantTopLeft uk-position-relative" :style="{'top':'0px','border-color': '#fffef5'+' '+'#fffef5'+' '+'#fffef5'+' '+content.acf.section_b.background_color}"></div>
  </div>
</defaultpage>
</template>

<script>
import axios from 'axios'
import defaultpage from '~/components/defaultpage.vue'
import sectioncontent from '~/components/sections_component/sectioncontent.vue'
import werktileitem from '~/components/werk/werktileitem.vue'
import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'
import _ from 'lodash'


export default {


  head() {
    return {
      title: 'Template Studio - ' + this.$t('menu.topmenu.work'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('meta.work.content')
      }]
    }
  },


  components: {
    defaultpage,
    sectioncontent,
    werktileitem,
    werkarchiveitem
    // werkarchiveitem
  },
  data: function() {
    return {
      // actualContent: null,
      hideinitialcontent: false
    }
  },
  //
  // async asyncData({
  //   params,
  //   query,
  //   error
  // }) {
  //   if (query.hasOwnProperty('lang')) {
  //     let [contentRes, tilesRes] = await Promise.all([
  //       axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_' + query.lang),
  //       axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_' + query.lang ),
  //     ])
  //
  //     const res = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/categories?parent=19')
  //     const categories = res.data.reverse()
  //     const collectedYearsRes = (await axios.all(
  //         categories.map(category => axios.get('http://api.template-studio.nl/wp-json/wp/v2/archiveitem_' + query.lang + '?categories=' + category.id))
  //
  //       ))
  //       .map(result => result.data)
  //       .reduce((acc, curr, index) => {
  //         acc.push([categories[index].name, [...curr]])
  //         return acc
  //       }, [])
  //
  //
  //
  //     return {
  //       content: contentRes.data[0],
  //       tiles: tilesRes.data,
  //       collectedYears: collectedYearsRes,
  //     }
  //     // }
  //   } else {
  //
  //     let [contentRes, tilesRes] = await Promise.all([
  //       axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=werk_nl'),
  //       axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem_nl'),
  //     ])
  //
  //
  //     const res = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/categories?parent=19')
  //     const categories = res.data.reverse()
  //     const collectedYearsRes = (await axios.all(
  //         categories.map(category => axios.get('http://api.template-studio.nl/wp-json/wp/v2/archiveitem_nl?categories=' + category.id))
  //       ))
  //       .map(result => result.data)
  //       .reduce((acc, curr, index) => {
  //         acc.push([categories[index].name, [...curr]])
  //         return acc
  //       }, [])
  //
  //     return {
  //       content: contentRes.data[0],
  //       tiles: tilesRes.data,
  //       collectedYears: collectedYearsRes,
  //     }
  //
  //
  //   }
  // },

  computed: {
    orderedWerkTiles: function() {

      var orderedWerkTilesTemp = this.tiles
      // var removeIndex = _.remove(menuitemsTemp, {
      //   slug: 'index'
      // });
      var orderedWerkTilesReturn = _.sortBy(orderedWerkTilesTemp, 'menu_order')

      return orderedWerkTilesReturn
    }
  },



  async asyncData({
    params,
    query,
    error
  }) {

    // hardcoded slug
    const slugname = 'werk'

    // determain lang. If no query lang then 'nl'
    const currentLanguage = query.hasOwnProperty('lang') ? query.lang : 'nl'

    // fetch page with slugname => get translation/language ids
    const getLanguageIdsRes = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages?slug=' + slugname + '&fields=polylang_langs')
    const getLanguageIds = getLanguageIdsRes.data

    // return content for selected language
    const contentLangRes = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/pages/' + getLanguageIds[0].polylang_langs[currentLanguage])



    // get work tiles content

    let [tilesRes] = await Promise.all([
      axios.get('http://api.template-studio.nl/wp-json/wp/v2/werkitem?lang=' + currentLanguage),
    ])



    // get archive content
    // http://api.template-studio.nl/wp-json/wp/v2/categories?lang=en&parent=77

    // YOU HAVE TO HARDCODE catagoriy parent id for each lang.
    var res
    if (query.hasOwnProperty('lang') && query.lang != 'nl') {
      // NOW we only have EN which has has a parent of the id 77
      res = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/categories?lang=en&parent=77')
    } else {
      // fallback to NL parent
      res = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/categories?parent=19')
    }

    const categories = res.data.reverse()
    const collectedYearsRes = (await axios.all(
        categories.map(category => axios.get('http://api.template-studio.nl/wp-json/wp/v2/archiveitem?lang=' + currentLanguage + '&categories=' + category.id))
      ))
      .map(result => result.data)
      .reduce((acc, curr, index) => {
        acc.push([categories[index].name, [...curr]])
        return acc
      }, [])


    return {
      tiles: tilesRes.data,
      content: contentLangRes.data,
      collectedYears: collectedYearsRes,

    }
  },


  methods: {
    goToWorkItems: function() {
      // window.scroll({ top: this.$el.querySelector("#workitems").getBoundingClientRect().top + this.$el.querySelector("#workitems").offsetTop, left: 0, behavior: 'smooth' });
      window.scroll({
        top: this.$el.querySelector("#workitems").getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
      });

    }
  },


  transition: 'bounce',





}
</script>

<style lang="scss" scoped>
.archiveYear {
    display: inline-block;
    -webkit-box-shadow: inset 0 -0px 0 0px, inset 0 3px 0 0;
    -moz-box-shadow: inset 0 -0px 0 0px, inset 0 3px 0 0;
    box-shadow: inset 0 -0px 0 0px, inset 0 3px 0 0;
    // padding-top: 10px;
    padding-bottom: 10px;
    * {
        color: inherit;

    }
}
@media (max-width: 959px) {
    .archiveYear {
        -webkit-box-shadow: inset 0 -0px 0 0px, inset 0 2px 0 0;
        -moz-box-shadow: inset 0 -0px 0 0px, inset 0 2px 0 0;
        box-shadow: inset 0 -0px 0 0px, inset 0 2px 0 0;
    }
}

// @media (max-width: 640px) {
//   .archiveYear{
//     -webkit-box-shadow: inset 0px -2px 0px 0px, inset 0px 2px 0px 0px;
//     -moz-box-shadow: inset 0px -2px 0px 0px, inset 0px 2px 0px 0px;
//     box-shadow: inset 0px -2px 0px 0px, inset 0px 2px 0px 0px;
//   }
// }

.sendToBack {
    z-index: 1;
}

.sendToFront {
    z-index: 2;
    position: relative;

}

#slideMeDownHover {
    display: inline-block;
    transition: all 0.25s ease-in-out;
    &:hover {
        transform: translateY(10px);
    }
}
</style>
