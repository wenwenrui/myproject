<template>
  <div>
    <img :src="imgsrc" v-if="isCut">
    <Upload action="/" :before-upload="seleteImg" type="drag" style="width:300px" :disabled="!isDrap" :format="['jpg','jpeg','png']" v-else>
      <div style="padding: 20px 0" v-if="isDrap">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击这里选择图片</p>
      </div>
      <div style="width:300px;height:300px" v-else>
       <VueCropper
         ref="cropper2"
         :img="example2.img "
         :outputSize="example2.size"
         :outputType="example2.outputType"
         :info="example2.info"
         :canScale="example2.canScale"
         :autoCrop="example2.autoCrop"
         :autoCropWidth="example2.autoCropWidth"
         :autoCropHeight="example2.autoCropHeight"
         :fixed="example2.fixed"
         :fixedNumber="example2.fixedNumber"
       >
       </VueCropper>
      </div>
    </Upload>
    <Button type="primary" @click="uploadImg" v-if="isCut">上传</Button>
    <Button type="success" @click="finish2" v-if="!isCut">裁剪</Button>
    <Button type="warning" @click="cancelCut" v-if="isCut">取消</Button>
  </div>
</template>
<script>
import {VueCropper} from 'vue-cropper'
export default {
  name: 'index',
  components: {
    VueCropper
  },
  data () {
    return {
      imgsrc: '',
      isDrap: true,
      isCut: false,
      file: null,
      example2: {
        // img的路径自行修改
        img: '',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 250,
        fixed: true,
        // 真实的输出宽高
        infoTrue: true,
        fixedNumber: [2, 1]
      }
    }
  },
  methods: {
    seleteImg (file) {
      // upload file
      console.log(file)
      this.file = file
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        data = e.target.result
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.example2.img = data
        this.isDrap = !this.isDrap
      }
      reader.readAsArrayBuffer(file)
      return false
    },
    finish2 () {
      try {
        this.$refs.cropper2.getCropData((data) => {
          this.imgsrc = data
          this.example2.img = data
          this.isCut = true
          console.log(this.imgsrc)
        })
      } catch (e) {
        this.$Message.success('请先选择图片')
      }
    },
    uploadImg () {
      // const data = {
      //   img_url: this.imgsrc
      // }
      // 请求页面
      setTimeout(() => {
        this.$Message.success('Success')
      }, 500)
    },
    cancelCut () {
      this.isDrap = !this.isDrap
      this.imgsrc = ''
      this.example2.img = ''
      this.isCut = false
    }
  }
}
</script>
<style scoped>
body{
    width: 100%;
    font-size: 0;
    margin: 0;
    padding: 0;
}
.layout{
    width: 100%;
    min-width: 100em;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    background: #D0D0D0;
    border: 0.1em solid #C9D9EE;
    border-radius: 0.5em;
    overflow: hidden;
}
.layout .header,.layout .content,.layout .footer{
    font-size: 10px;
    height: 45em;
    width: 100%;
}
.layout .header{
    display: flex;
    flex-direction: column;
    background-image: url('//livewebbs2.msstatic.com/huya_1552272581_content.jpg');
    background-size: 100% 100%
}
.layout .header .video{
    width: 70%;
    height: 80%;
    background-color: #f000;
}
.layout .header .video .video-left{
    height: 100%;
    background-color: blue;
    background-clip: content-box
}
.layout .header .video .video-right{
    height: 100%;
    background-color: pink;
    background-clip: content-box;
    display: flex;
    flex-direction: column;
}
</style>
