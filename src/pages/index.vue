<template>
  <Row class="layout">
      <Row class="header">
          <Row></Row>
          <Row :gutter="16" class="video" style="margin-left:15%">
              <Col span="18" class="video-left">
                <img src="https://huyaimg.msstatic.com/cdnimage/roomad/pic_1554114929.jpg" style="width:100%;height:100%"/>
              </Col>
              <Col span="6" class="video-right">
                <div v-for="n in 5" :key="n" style="height:20%;padding:1% 2%">
                    <img src="https://huyaimg.msstatic.com/cdnimage/roomad/pic_1554114929.jpg" style="width:100%;height:100%"/>
                </div>
                <!-- <img src="https://huyaimg.msstatic.com/cdnimage/roomad/pic_1554114929.jpg" style="width:100%;flex:1"/> -->
              </Col>
          </Row>
      </Row>
      <Row class="content">
          <div></div>
      </Row>
      <Row class="footer">
          <div></div>
      </Row>
  </Row>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
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
