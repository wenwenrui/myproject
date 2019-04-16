<template>
  <div style="width:500px;height:300px">
    <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import {mapGetters} from 'vuex'
export default {
  name: 'getAddress',
  components: {
    VDistpicker
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('index', [
      'isCollapsible'
    ])
  },
  methods: {
    onChangeProvince (a) {
      console.log(this.isCollapsible)
    },
    onChangeCity (a) {
      console.log(a)
    },
    onChangeArea (a) {
      console.log(a)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
