<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="sider1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        class="sider"
        v-model="isCollapsible"
      ></Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Row>
            <Col span="8">
              <Icon @click.native="changeCollapsible" type="md-menu" size="24" :class="rotateIcon"></Icon>
            </Col>
            <Col span="8">
              <Tabs :value="activeName" @on-click="changeactiveName">
                <TabPane v-for="(item, index) in tabsData" :key="index" :name="item.key" :label="item.label"></TabPane>
              </Tabs>
            </Col>
          </Row>
        </Header>
        <Content class="content">Content</Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'index',
  components: {},
  data () {
    return {
      tabsData: [
        {
          label: '首页',
          key: '/home'
        },
        {
          label: '新闻',
          key: '/news'
        },
        {
          label: '周边',
          key: '/periphery'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('index', [
      'isCollapsible',
      'activeName'
    ]),
    rotateIcon () {
      return ['menu-icon', this.isCollapsible ? 'rotate-icon' : '']
    }
  },
  mounted () {
    console.log(this.activeName)
  },
  methods: {
    ...mapActions('index', [
      'changeCollapsible',
      'changeactiveName'
    ])
  },
  watch: {
    activeName (newValue, oldValue) {
      if (newValue) {
        console.log(newValue)
      }
    }
  }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  position: relative;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 10px;
  overflow: hidden;
}
.layout .sider {
  background: #515a6e;
  background-clip: content-box;
}
.layout-header-bar {
  background: white;
  padding-left: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.content {
  background: white;
  background-clip: content-box;
  padding: 20px;
  min-height: 300px;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-icon {
  transition: all .3s;
}

</style>
