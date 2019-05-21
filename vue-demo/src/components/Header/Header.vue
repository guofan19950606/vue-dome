<template>

  <div class="Header">
    <div class="layui-logo">
        <!--<img src="/assets/common/images/logo.png"/>-->
        <i class="layui-icon layui-icon-component"></i>
        <cite>&nbsp;Guns管理系统 </cite>
    </div>

    <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item" lay-unselect="">
            <a ew-event="flexible" title="侧边伸缩"><i class="layui-icon layui-icon-shrink-right"></i></a>
        </li>
        <li class="layui-nav-item" lay-unselect="">
            <a ew-event="refresh" title="刷新"><i class="layui-icon layui-icon-refresh-3"></i></a>
        </li>
        <span class="layui-nav-bar" style="left: 10px; top: 48px; width: 0px; opacity: 0;"></span>
    </ul>
    
    <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item" lay-unselect="">
            <a ew-event="message" title="消息"><i class="layui-icon layui-icon-notice"></i></a>
        </li>
        <li class="layui-nav-item layui-hide-xs" lay-unselect="">
            <a ew-event="fullScreen" title="全屏"><i class="layui-icon layui-icon-screen-full"></i></a>
        </li>
        <li class="layui-nav-item" lay-unselect="">
            <a class="first" @mouseout="getstyle()">
              <img src="../../assets/img/previewAvatar.jpg" class="layui-nav-img">
              <span>stylefeng</span>
              <span class="layui-nav-more"></span>
            </a>
            <dl class="layui-nav-child layui-anim layui-anim-upbit" v-show="show" @mouseleave="getstyleone()">
                <dd lay-unselect="">
                    <a ew-href="/system/user_info">个人中心</a>
                </dd>
                <dd lay-unselect="">
                    <a id="setPsw">修改密码</a>
                </dd>
                <hr>
                <dd lay-unselect="">
                    <a id="btnLogout" @click="login()">退出</a>
                </dd>
            </dl>
        </li>
        <li class="layui-nav-item" lay-unselect="">
            <a ew-event="theme" title="主题"><i class="layui-icon layui-icon-more-vertical"></i></a>
        </li>
    <span class="layui-nav-bar" style="left: 115px; top: 48.4px; width: 0px; opacity: 0;"></span></ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
          return {
              show:false,       
          }
        },
  methods: {
    getstyle(){
       this.show=true;
    },
    getstyleone(){
      this.show=false;
    },
    login(){
      this.$router.push({
          name:"login"
          });
      localStorage.clear();
    }
  }
  
}
</script>
<style lang="less" scoped>
 .Header{
     height: 100%;
     padding:0px !important;
     display: flex;
     background-color: white;
     box-shadow: 0 1px 0 0 rgba(0,0,0,.05);
     position: relative;

 }
 .layui-logo{
   width:200px;
   background-color: rgb(90, 91, 94);
   color: #f2f2f2;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
 }
 .layui-layout-left{
   background:white;
 }
 .layui-layout-left li a i{
   color: #000;
 }
 .layui-layout-right{
   background:white;
 }
.layui-nav-item a i{
  color: #000;
}
.layui-nav-item a{
  color: #000;
}
.layui-nav-more{
       border-top-color:  #000!important;
}
.layui-nav-child{
  display: block;
  cursor: pointer;
}
</style>