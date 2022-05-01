<template>
  <div class='caocaoshiji'>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
    <div class='baseTitle'>{{baseTitle}}</div>
    <single-article class="onepoem" v-for='(item, index) in poems' :key='index' :articleTitle='item.title' :chapter="empty" :section="empty" :articleAuthor="item.author" :paragraphs="item.paragraphs">
    </single-article>
  </div>
</template>

<script>

import singleArticle from './component/singleArticle.vue'
import { getTangshiArticle } from '@/api/tangshi'

export default {
  name: 'tangshi',
  components: {
    singleArticle
  },
  props: {},
  data () {
    return {
      poems: [],
      baseTitle: '唐诗',
      totalCount: 0,
      pageSize: 10,
      currentPage: 0,
      empty: ''
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadPoems(0)
  },
  mounted () {},
  methods: {
    loadPoems (page) {
      getTangshiArticle({
        skip: page * this.pageSize,
        limit: this.pageSize
      }).then(res => {
        console.log(res)
        this.poems = res.data.poems
        this.totalCount = res.data.poemsCount
      })
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.loadPoems(this.currentPage - 1)
    }
  }
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
    margin-top: 10px;
    margin-bottom: 20px;

  }

  .block {
    // position: -webkit-sticky;
    z-index: 10;
    position: sticky;
    top: 0px;
    padding: 0px;
    background-color: #cae8ca;
    border-radius: 7px;
    // opacity: 0.7;
    // border: 2px solid #4CAF50;
    border-radius: 7px;
  }

</style>
