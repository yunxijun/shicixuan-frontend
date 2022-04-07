<template>
  <div class='singleCao'>
    <div class='wrap'>
      <div class='title'>{{articleTitle}}</div>
      <div class='author'>{{articleAuthor}}</div>
      <div class='oneLine' v-for='(item, index) in paragraphs' :key='index'>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleCao',
  components: {},
  props: {
    articleTitle: String,
    articleAuthor: String,
    paragraphs: []
  },
  data () {
    return {
    //   paragraphs: [
    //     '天地间，人为贵。',
    //     '立君牧民，为之轨则。',
    //     '车辙马迹，经纬四极。',
    //     '黜陟幽明，黎庶繁息。',
    //     '於铄贤圣，总统邦域。',
    //     '封建五爵，井田刑狱。',
    //     '有燔丹书，无普赦赎。',
    //     '皋陶甫侯，何有失职？',
    //     '嗟哉后世，改制易律。',
    //     '劳民为君，役赋其力。',
    //     '舜漆食器，畔者十国，',
    //     '不及唐尧，采椽不斫。',
    //     '世叹伯夷，欲以厉俗。',
    //     '侈恶之大，俭为共德。',
    //     '许由推让，岂有讼曲？',
    //     '兼爱尚同，疏者为戚。'
    //   ],
    //   title: '度关山',
    //   author: '曹操'
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
  .singleCao {
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
