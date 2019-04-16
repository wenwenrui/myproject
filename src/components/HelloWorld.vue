<template>
   <row align='middle' type='flex' class-name="contain">
     <Col span="12" offset='6' class-name="login" style="display:flex;align-items:center;justify-content:center;flex-direction:column">
      <Row style="width:50%;">
        <Row type='flex' justify='center' class-name="row">
        <h1>登录</h1>
      </Row>
      <Row type='flex' justify='center' class-name="row">
        <Col span="24">
          <Input prefix="md-contact" placeholder="用户名" clearable v-model="username" style="width:100%" @on-enter='login'></Input>
        </Col>
      </Row>
      <Row type='flex' justify='center' class-name="row">
        <Col span="24">
          <Input prefix="md-lock" placeholder="密码" type='password' clearable  v-model="password" style="width:100%" @on-enter='login'></Input>
        </Col>
      </Row>
      </Row>
      <Row style="height: 50px;width:50%;">
        <Col span="6" offset="18">
          <Button style="width:100%" @click='login' type="primary" shape="circle">确定</Button>
        </Col>
      </Row>
      <Row style="height: 150px;width:50%;">
        <transition name="fade">
          <Alert v-if='showalter' closable show-icon :type='type' @on-close='hidealert'>{{erromessage}}</Alert>
        </transition>
      </Row>
     </Col>
   </row>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import router from '../router'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      erromessage: '',
      showalter: false,
      type: 'success'
    }
  },
  mounted () {
    this.showalter = false
  },
  methods: {
    Showalter (type, erromessage) {
      this.showalter = true
      this.erromessage = erromessage
      this.type = type
    },
    hidealert () {
      this.showalter = false
      console.log(this.showalter)
    },
    login () {
      // console.log(this.showalter)
      if (!this.username || this.username === '') {
        this.Showalter('error', '用户名不能为空')
        return
      }
      if (!this.password || this.password === '') {
        this.Showalter('error', '密码不能为空')
        return
      }
      this.Showalter('success', '正确')
      setTimeout(() => {
        router.push({path: '/index'})
      }, 3000)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  height: 300px;
}
.contain{
  width: 100%;
  height: 600px;
}
.row{
  margin-bottom: 5%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
