<template>
  <div class="home">
     <el-container>
      <!-- 头部   -->
        <el-header>
          <Header/>
        </el-header>
        <el-container>
          <!-- 左侧导航 -->
          <el-aside width="200px">
            <NavLeft/>
          </el-aside>
          <!-- 内容 -->
          <el-main>
              <router-view>

              </router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '../components/Header/Header'
import NavLeft from '../components/NavLeft/NavLeft'

export default {
  name: 'home',
  data() {
			return {
                menuslist:{}
			}
        },
  components: {  
    Header,
    NavLeft, 
  },
  
  methods: {
        
    }

}
</script>
<style lang="less">

  .home{
    height: 100%;
  }
  section{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
   background-color: #393D49;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow-x: hidden !important;
  }
  
  .el-main {
    background-color: #EBEFF2;
    color: #333;
    text-align: center;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-header{
    padding:0px !important;
  }
  .el-main{
    padding:0px !important;
    background: rgb(245, 244, 244) !important;
  }
</style>