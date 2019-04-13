<template>
  <div ref='main'></div>
</template>
<script>
import echart from 'echarts'
export default {
  name: 'echart',
  data () {
    return {
      options: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  computed: {
    myechart () {
      return echart.init(this.$refs.main)
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      console.log(this.myechart)
      this.myechart.setOption(this.options)
    }
  }
}
</script>
<style scope>
</style>
