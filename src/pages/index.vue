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
      >
        <div class="avatar">
          <Avatar shape="square" icon="ios-person" :class="rotaavrtar"></Avatar>
        </div>
        <div class="menu">
          <Row>
            <Col span="20" offset="2">
              <div>
                <Row v-show="!isCollapsible">
                  <Col span="8">
                    浏览数
                    123
                  </Col>
                  <Col span="8">
                    <Divider type="vertical" class="vertical"/>
                    <div class="vertical_text">
                      <div>粉丝</div>
                      <div>123</div>
                    </div>
                  </Col>
                  <Col span="8">
                    <Divider type="vertical" class="vertical"/>
                    <div class="vertical_text">
                      <div>文章</div>
                      <div>123</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div>
            <Menu theme="dark" :active-name="activeName" width="auto" accordion :class="menuitemClasses" @on-select='changeactiveName'>
              <MenuItem v-for="(item, index) in menuList" :key="index" :name="item.key">
                <Icon :type="item.icon" />
                <span>{{item.label}}</span>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Row>
            <Col span="8">
              <Icon @click.native="changeCollapsible" type="md-menu" size="24" :class="rotateIcon"></Icon>
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
      menuList: [
        {
          label: '首页',
          key: '/home',
          icon: 'ios-home'
        },
        {
          label: '新闻',
          key: '/news',
          icon: 'ios-glasses'
        },
        {
          label: '周边',
          key: '/periphery',
          icon: 'ios-cafe'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'isCollapsible',
      'activeName'
    ]),
    rotateIcon () {
      return ['menu-icon', this.isCollapsible ? 'rotate-icon' : '']
    },
    rotaavrtar () {
      return !this.isCollapsible ? 'asize' : 'samllasize'
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsible ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted () {
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
.avatar{
  text-align: center;
  margin-top: 10%
}
.asize{
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 40px;
}
.smallasize{
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
}
.menu{
  color: white;
  font-size: 12px;
  padding-top:30px;
  margin-top: -20px;
  background-color: black;
}
.vertical{
  margin-left:0;
  height:2em
}
.vertical_text {
  display: inline-block;
  vertical-align: -50%;
  text-align: center;
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
