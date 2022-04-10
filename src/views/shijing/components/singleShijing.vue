<template>
  <div class='singleChuci'>
    <div class='wrap'>
      <div class='title'>{{articleTitle}}</div>
      <div class='section'>{{section}}</div>
      <div class='author'>{{articleAuthor}}</div>
      <div class='oneLine' v-for='(item, index) in paragraphs' :key='index'>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleChuci',
  components: {},
  props: {
    articleTitle: String,
    articleAuthor: String,
    section: String,
    paragraphs: []
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
  .singleChuci {
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
    max-width: 400px;
    margin: auto;
    padding-bottom: -10px;
    // margin: auto;
    .oneLine {
      font-family:Arial, Helvetica, sans-serif;
      font-size: 120%;
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
      margin-top: 15px;
      text-align: center;
    }
    .title {
      width: auto;
      font-size:28px;
      color: #fff;
      text-align: center;
    }
    .author {
      font-size:20px;
      color: #fff;
      text-align: center;
      margin-top: 15px;
    }
  }
</style>
