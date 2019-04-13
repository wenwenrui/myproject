<template>
  <div style="width:500px;height:300px">
    <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'getAddress',
  components: {
    VDistpicker
  },
  data () {
    return {
    }
  },
  methods: {
    onChangeProvince (a) {
      console.log(a)
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
