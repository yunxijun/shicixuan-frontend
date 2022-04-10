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
    <single-chuci class="onepoem" v-for='(item, index) in poems' :key='index' :articleTitle='item.title' :section="section" :articleAuthor="item.author" :paragraphs="item.content">
    </single-chuci>
  </div>
</template>

<script>

import singleChuci from './components/singleChuci.vue'
import { getChuciArticle } from '@/api/chuci'

export default {
  name: 'Chuci',
  components: {
    singleChuci
  },
  props: {},
  data () {
    return {
      poems: [],
      baseTitle: '楚辞',
      totalCount: 0,
      pageSize: 6,
      currentPage: 0,
      section: ''
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
      getChuciArticle({
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
    // border: 2px solid #4CAF50;
  }

</style>
