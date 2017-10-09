<template>
<div>
  <div class="uk-text-center uk-grid-match uk-flex uk-flex-middle" uk-height-match uk-grid>
    <div  class="uk-width-1-3@m"  v-for="yearItem in collectedYears">

      <div v-if="Object.keys(yearItem).length === 1">
        <h2 v-html="yearItem.year"></h2>
      </div>
      <div v-else>
        <werkarchiveitem :datainput="yearItem" ></werkarchiveitem>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import werkarchiveitem from '~/components/werk/werkarchiveitem.vue'


export default {

  data: function() {
    return {}
  },
  components: {
    werkarchiveitem
  },

  async asyncData({
    params,
    query,
    error
  }) {

    const res = await axios.get('http://api.template-studio.nl/wp-json/wp/v2/categories?parent=19')
    const categories = res.data.reverse()
    const collectedYearsRes = (await axios.all(
        categories.map(category => axios.get('http://api.template-studio.nl/wp-json/wp/v2/archiveitem_nl?categories=' + category.id))
      ))
      .map(result => result.data)
      .reduce((acc, curr, index) => {
        acc.push({"year" : categories[index].name}, ...curr)
        // acc.push([categories[index].name, [...curr]])
        return acc
      }, [])


    return {
      collectedYears: collectedYearsRes,

    }

  },

}
</script>
<style>
div {
  background: white;
}

pre {
  margin: 0;
  width: 33.333%;
  float: left;
}
</style>
