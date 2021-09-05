<template>
  <div class='caocaoshiji'>
    <div class='baseTitle'>{{baseTitle}}</div>
    <single-cao class="onepoem" v-for='(item, index) in poems' :key='index' :articleTitle='item.title' :articleAuthor="item.author" :paragraphs="item.paragraphs">
    </single-Cao>
  </div>
</template>

<script>

import singleCao from './components/singleArticle.vue'
import { getCaocaoshijiArticle } from '@/api/caocaoshiji'

export default {
  name: 'Caocaoshiji',
  components: {
    singleCao
  },
  props: {},
  data () {
    return {
      poems: {},
      baseTitle: '曹操诗集'
    }
  },
  computed: {},
  watch: {},
  created () {
    getCaocaoshijiArticle().then(res => {
      console.log(res)
      this.poems = res.data.poems
    })
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'>
  .caocaoshiji {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .baseTitle {
    // position: relative;
    font-size: 30px;
    color: #e54525;
    // margin: auto;
    text-align: center;
    margin-bottom: 30px;

  }

</style>
