<template>
  <div id="app">
    <layout-classic></layout-classic>
  </div>
</template>

<script>
import layoutClassic from '../src/views/layout/index.vue'

export default {
  name: 'App',
  components: { layoutClassic },
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }
  },
  methods: {
    goBack () {
      history.back()
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false)
  }
}
</script>

<style lang="less">

</style>
