<template>
  <div class='singleArticle'>
    <div class='wrap'>
      <div v-if="articleTitle != ''" class='title'>{{articleTitle}}</div>
      <div v-if="chapter != ''" class='chapter'>{{chapter}}</div>
      <div v-if="section != ''" class='section'>{{section}}</div>
      <div v-if="articleAuthor != ''" class='author'>{{articleAuthor}}</div>
      <div class='oneLine' v-for='(item, index) in paragraphs' :key='index'>{{`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0` + item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleArticle',
  components: {},
  props: {
    articleTitle: String,
    articleAuthor: String,
    section: String,
    paragraphs: [],
    chapter: String
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'>
  .singleArticle {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #2f3538;
    opacity: 0.9;
    margin-bottom: 66px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .wrap {
    // width: auto;
    max-width: 1000px;
    margin: auto;
    padding-bottom: -10px;
    // margin: auto;
    .oneLine {
      font-family:Arial, Helvetica, sans-serif;
      font-size: 120%;
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      // margin-bottom: 15px;
      // margin-top: 15px;
      line-height: 36px;
      text-align: justify;
      // justify-content: space-between;
    }
    .title {
      width: auto;
      font-size:28px;
      color: #fff;
      text-align: center;
    }
    .chapter, .section {
      width: auto;
      font-size:20px;
      color: #fff;
      text-align: center;
      padding: 5px;
    }
    .author {
      font-size:20px;
      color: #fff;
      text-align: center;
      margin-top: 15px;
    }
  }
</style>
